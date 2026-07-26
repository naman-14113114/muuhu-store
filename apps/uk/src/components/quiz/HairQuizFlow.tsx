"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Lock,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import {
  type QuizAnswersLike,
  type QuizQuestion,
  type QuizResult,
  type QuizRoutineStep,
} from "@/data/hairQuiz";
import { Button, cn } from "@/components/ui/Button";
import { useEffect, useMemo, useRef, useState } from "react";

type QuizStage = "intro" | "questions" | "analyzing" | "results";

type SavedQuiz = {
  stage: Exclude<QuizStage, "intro" | "analyzing">;
  questionIndex: number;
  answers: QuizAnswersLike;
};

function trackQuizEvent(name: string) {
  if (typeof window !== "undefined") {
    const clarity = (window as unknown as { clarity?: (...args: string[]) => void }).clarity;
    clarity?.("event", name);
  }
}

function isSavedQuiz(value: unknown, empty: QuizAnswersLike): value is SavedQuiz {
  if (!value || typeof value !== "object") return false;
  const saved = value as Partial<SavedQuiz>;
  const a = saved.answers as Partial<QuizAnswersLike> | undefined;

  const allStrings = Object.entries(empty).every(([key, def]) => {
    const v = (a as Record<string, unknown> | undefined)?.[key];
    return typeof def === "string" ? typeof v === "string" : Array.isArray(v);
  });

  return (
    (saved.stage === "questions" || saved.stage === "results") &&
    typeof saved.questionIndex === "number" &&
    saved.questionIndex >= 0 &&
    Boolean(saved.answers) &&
    allStrings
  );
}

function getAnswer(q: QuizQuestion, answers: QuizAnswersLike) {
  return (answers as Record<string, string | string[]>)[q.id];
}

function isAnswered(q: QuizQuestion, answers: QuizAnswersLike) {
  const v = getAnswer(q, answers);
  return Array.isArray(v) ? v.length > 0 : Boolean(v);
}

export type HairQuizFlowProps = {
  track: "care" | "style";
  storageKey: string;
  emptyAnswers: QuizAnswersLike;
  questions: QuizQuestion[];
  intro: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    copy: string;
    startLabel: string;
    bullets: string[];
  };
  buildResult: (answers: QuizAnswersLike) => QuizResult;
  productHref: string;
  ctaCopy: string;
  ctaLabel: string;
};

export function HairQuizFlow({
  track,
  storageKey,
  emptyAnswers,
  questions,
  intro,
  buildResult,
  productHref,
  ctaCopy,
  ctaLabel,
}: HairQuizFlowProps) {
  const [stage, setStage] = useState<QuizStage>("intro");
  const [answers, setAnswers] = useState<QuizAnswersLike>(emptyAnswers);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [savedQuiz, setSavedQuiz] = useState<SavedQuiz | null>(null);
  const [storageReady, setStorageReady] = useState(false);
  const analysisTimer = useRef<number | null>(null);
  const quizPanel = useRef<HTMLDivElement>(null);
  const currentQuestion = questions[questionIndex];
  const result = useMemo<QuizResult | null>(
    () => (stage === "results" ? buildResult(answers) : null),
    [answers, stage, buildResult],
  );

  useEffect(() => {
    let stored: SavedQuiz | null = null;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        stored = isSavedQuiz(parsed, emptyAnswers) ? parsed : null;
      }
    } catch {
      /* ignore */
    }
    const t = window.setTimeout(() => {
      setSavedQuiz(stored);
      setStorageReady(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, [storageKey, emptyAnswers]);

  useEffect(() => {
    if (!storageReady || savedQuiz || stage === "intro" || stage === "analyzing") {
      return;
    }
    const next: SavedQuiz = { stage, questionIndex, answers };
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  }, [answers, questionIndex, savedQuiz, stage, storageReady, storageKey]);

  useEffect(
    () => () => {
      if (analysisTimer.current) window.clearTimeout(analysisTimer.current);
    },
    [],
  );

  function scrollToPanel() {
    window.requestAnimationFrame(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      quizPanel.current?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  function startFresh() {
    window.localStorage.removeItem(storageKey);
    setSavedQuiz(null);
    setAnswers(emptyAnswers);
    setQuestionIndex(0);
    setStage("questions");
    trackQuizEvent(`${track}_quiz_started`);
    scrollToPanel();
  }

  function resumeQuiz() {
    if (!savedQuiz) return;
    setAnswers(savedQuiz.answers);
    setQuestionIndex(savedQuiz.questionIndex);
    setStage(savedQuiz.stage);
    setSavedQuiz(null);
    trackQuizEvent(`${track}_quiz_resumed`);
    scrollToPanel();
  }

  function resetQuiz() {
    window.localStorage.removeItem(storageKey);
    setSavedQuiz(null);
    setAnswers(emptyAnswers);
    setQuestionIndex(0);
    setStage("intro");
    trackQuizEvent(`${track}_quiz_restarted`);
    scrollToPanel();
  }

  function selectOption(question: QuizQuestion, value: string) {
    setAnswers((current) => {
      const next = { ...(current as Record<string, string | string[]>) };
      if (question.selection === "single") {
        next[question.id] = value;
        return next;
      }
      const selected = (next[question.id] as string[]) ?? [];
      const option = question.options.find((o) => o.value === value);
      const nextValues = option?.exclusive
        ? [value]
        : selected.includes(value)
          ? selected.filter((v) => v !== value)
          : [
              ...selected.filter((v) => {
                const o = question.options.find((c) => c.value === v);
                return !o?.exclusive;
              }),
              value,
            ];
      next[question.id] = nextValues;
      return next;
    });
  }

  function showResults() {
    setStage("analyzing");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    analysisTimer.current = window.setTimeout(
      () => {
        setStage("results");
        trackQuizEvent(`${track}_quiz_result_viewed`);
        scrollToPanel();
      },
      reduce ? 10 : 800,
    );
  }

  function continueQuiz() {
    trackQuizEvent(
      `${track}_quiz_step_${String(questionIndex + 1).padStart(2, "0")}`,
    );
    if (questionIndex === questions.length - 1) {
      showResults();
      return;
    }
    setQuestionIndex((i) => i + 1);
    scrollToPanel();
  }

  return (
    <div
      className="min-h-[620px] scroll-mt-24 rounded-[18px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_30px_80px_-60px_rgba(58,31,61,.7)] sm:p-8 lg:p-10"
      ref={quizPanel}
    >
      {stage === "intro" ? (
        <QuizIntro
          savedQuiz={savedQuiz}
          intro={intro}
          onResume={resumeQuiz}
          onStart={startFresh}
        />
      ) : null}

      {stage === "questions" ? (
        <QuizQuestionStep
          answers={answers}
          currentQuestion={currentQuestion}
          questions={questions}
          onBack={() => {
            setQuestionIndex((i) => Math.max(0, i - 1));
            scrollToPanel();
          }}
          onContinue={continueQuiz}
          onReset={resetQuiz}
          onSelect={selectOption}
          questionIndex={questionIndex}
        />
      ) : null}

      {stage === "analyzing" ? <QuizAnalyzing /> : null}

      {stage === "results" && result ? (
        <QuizResults
          onReset={resetQuiz}
          result={result}
          productHref={productHref}
          ctaCopy={ctaCopy}
          ctaLabel={ctaLabel}
          track={track}
        />
      ) : null}
    </div>
  );
}

function QuizIntro({
  savedQuiz,
  intro,
  onResume,
  onStart,
}: {
  savedQuiz: SavedQuiz | null;
  intro: HairQuizFlowProps["intro"];
  onResume: () => void;
  onStart: () => void;
}) {
  return (
    <div className="flex min-h-[540px] flex-col justify-center">
      <p className="buudy-eyebrow">{intro.eyebrow}</p>
      <h2 className="buudy-display mt-4 text-[2.8rem] leading-[1.02] text-[var(--plum)] md:text-[4rem]">
        {intro.title} <em className="buudy-italic text-[var(--gold)]">{intro.titleAccent}</em>
      </h2>
      <p className="buudy-copy mt-5 max-w-xl">{intro.copy}</p>

      {savedQuiz ? (
        <div className="mt-8 rounded-[14px] border border-[rgba(180,145,76,.38)] bg-[rgba(180,145,76,.09)] p-5">
          <p className="buudy-mono text-[var(--gold)]">Quiz in progress</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Pick up where you left off, or begin a fresh assessment.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={onResume}>
              Resume quiz
              <ArrowRight size={16} />
            </Button>
            <Button onClick={onStart} variant="ghost">
              Start over
            </Button>
          </div>
        </div>
      ) : (
        <Button className="mt-8 self-start" onClick={onStart}>
          {intro.startLabel}
          <ArrowRight size={16} />
        </Button>
      )}

      <div className="mt-12 grid gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-3">
        {intro.bullets.map((item) => (
          <div
            className="flex items-center gap-2 text-sm text-[var(--muted)]"
            key={item}
          >
            <Check className="text-[var(--gold)]" size={15} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizQuestionStep({
  answers,
  currentQuestion,
  questions,
  onBack,
  onContinue,
  onReset,
  onSelect,
  questionIndex,
}: {
  answers: QuizAnswersLike;
  currentQuestion: QuizQuestion;
  questions: QuizQuestion[];
  onBack: () => void;
  onContinue: () => void;
  onReset: () => void;
  onSelect: (q: QuizQuestion, value: string) => void;
  questionIndex: number;
}) {
  const answer = getAnswer(currentQuestion, answers);
  const progress = ((questionIndex + 1) / questions.length) * 100;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="buudy-mono text-[var(--gold)]">
          Step {String(questionIndex + 1).padStart(2, "0")} /{" "}
          {String(questions.length).padStart(2, "0")}
        </p>
        <button
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted)] transition hover:text-[var(--plum)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
          onClick={onReset}
          type="button"
        >
          <RotateCcw size={14} />
          Start over
        </button>
      </div>
      <div
        aria-label={`Question ${questionIndex + 1} of ${questions.length}`}
        aria-live="polite"
        className="mt-4 h-1.5 overflow-hidden rounded-full bg-[rgba(58,31,61,.09)]"
        role="progressbar"
        aria-valuemax={questions.length}
        aria-valuemin={1}
        aria-valuenow={questionIndex + 1}
      >
        <div
          className="h-full rounded-full bg-[var(--gold)] transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="buudy-display mt-9 text-[2.25rem] leading-[1.06] text-[var(--plum)] md:text-[3.2rem]">
        {currentQuestion.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        {currentQuestion.subtitle}
      </p>

      <div
        aria-label={currentQuestion.title}
        className={cn(
          "mt-8 grid gap-3",
          currentQuestion.selection === "multiple" && currentQuestion.options.length > 4
            ? "sm:grid-cols-2"
            : "",
        )}
        role={currentQuestion.selection === "single" ? "radiogroup" : "group"}
      >
        {currentQuestion.options.map((option) => {
          const selected = Array.isArray(answer)
            ? answer.includes(option.value)
            : answer === option.value;

          return (
            <button
              aria-checked={selected}
              className={cn(
                "group flex min-h-16 w-full items-center gap-4 rounded-[14px] border px-4 py-4 text-left transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]",
                selected
                  ? "border-[var(--gold)] bg-[rgba(180,145,76,.1)] shadow-[0_12px_24px_-22px_rgba(58,31,61,.8)]"
                  : "border-[var(--border)] bg-[var(--cream)] hover:border-[rgba(180,145,76,.62)] hover:bg-[rgba(180,145,76,.05)]",
              )}
              key={option.value}
              onClick={() => onSelect(currentQuestion, option.value)}
              role={currentQuestion.selection === "single" ? "radio" : "checkbox"}
              type="button"
            >
              <span
                className={cn(
                  "grid h-6 w-6 shrink-0 place-items-center border transition",
                  currentQuestion.selection === "single"
                    ? "rounded-full"
                    : "rounded-[7px]",
                  selected
                    ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--cream)]"
                    : "border-[rgba(58,31,61,.26)] bg-[var(--card)]",
                )}
              >
                {selected ? <Check size={14} strokeWidth={3} /> : null}
              </span>
              <span>
                <span className="block font-semibold text-[var(--plum)]">
                  {option.label}
                </span>
                {option.description ? (
                  <span className="mt-1.5 block text-xs leading-5 text-[var(--muted)]">
                    {option.description}
                  </span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-6">
        <Button
          className={questionIndex === 0 ? "invisible" : ""}
          onClick={onBack}
          tabIndex={questionIndex === 0 ? -1 : 0}
          variant="ghost"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        <Button
          disabled={!isAnswered(currentQuestion, answers)}
          onClick={onContinue}
        >
          {questionIndex === questions.length - 1 ? "Reveal my routine" : "Continue"}
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}

function QuizAnalyzing() {
  return (
    <div
      aria-live="polite"
      className="flex min-h-[540px] flex-col items-center justify-center text-center"
      role="status"
    >
      <span className="relative grid h-20 w-20 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-[rgba(180,145,76,.18)]" />
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--plum)] text-[var(--gold)]">
          <Sparkles size={26} />
        </span>
      </span>
      <p className="buudy-eyebrow mt-8">Analyzing data</p>
      <h2 className="buudy-display mt-3 text-4xl text-[var(--plum)]">
        Formulating your routine.
      </h2>
      <p className="buudy-copy mt-3 max-w-md text-sm">
        Matching your answers with the right attachment, heat, and weekly plan.
      </p>
    </div>
  );
}

function QuizResults({
  onReset,
  result,
  productHref,
  ctaCopy,
  ctaLabel,
  track,
}: {
  onReset: () => void;
  result: QuizResult;
  productHref: string;
  ctaCopy: string;
  ctaLabel: string;
  track: "care" | "style";
}) {
  const lockedSteps = result.weeks.filter((w) => w.locked);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="buudy-eyebrow">Your hair dossier</p>
          <h2 className="buudy-display mt-3 text-[2.8rem] leading-none text-[var(--plum)] md:text-[4rem]">
            Your routine, <em className="buudy-italic">revealed</em>.
          </h2>
        </div>
        <button
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted)] transition hover:text-[var(--plum)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
          onClick={onReset}
          type="button"
        >
          <RotateCcw size={14} />
          Start over
        </button>
      </div>

      <div className="mt-6 rounded-[14px] border border-[rgba(180,145,76,.34)] bg-[rgba(180,145,76,.08)] p-4">
        <p className="buudy-mono text-[var(--gold)]">Profile</p>
        <p className="mt-2 font-semibold leading-6 text-[var(--plum)]">
          {result.profileTag}
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          {result.profileSummary}
        </p>
      </div>

      <div className="mt-4 rounded-[14px] border border-[rgba(180,145,76,.34)] bg-[rgba(180,145,76,.08)] p-4">
        <p className="buudy-mono text-[var(--gold)]">Your prescription</p>
        <p className="mt-2 font-semibold leading-6 text-[var(--plum)]">
          {result.prescription}
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          {result.prescriptionDetail}
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {result.weeks
          .filter((step) => !step.locked)
          .map((step) => (
            <WeekCard key={step.number} step={step} />
          ))}
      </div>

      {lockedSteps.length > 0 ? (
        <div className="mt-6 rounded-[14px] bg-[var(--plum)] p-5 text-center text-[var(--cream)] sm:p-7">
          <Lock className="mx-auto text-[var(--gold)]" size={22} />
          <h3 className="buudy-display mt-3 text-3xl">
            Weeks 3 &amp; 4 are locked
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[rgba(247,241,232,.82)]">
            {ctaCopy}
          </p>
          <Button asChild className="mt-5">
            <Link
              href={productHref}
              onClick={() => trackQuizEvent(`${track}_quiz_unlock_cta_clicked`)}
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      ) : null}

      <p className="mt-5 text-xs leading-5 text-[var(--muted)]">
        This quiz provides general haircare guidance and is not a substitute for
        professional advice. Results are tailored to the Muuhu Airpro.
      </p>
    </div>
  );
}

function WeekCard({ step }: { step: QuizRoutineStep }) {
  return (
    <article
      className={cn(
        "grid gap-3 rounded-[14px] border p-5 sm:grid-cols-[56px_1fr]",
        step.highlighted
          ? "border-[rgba(180,145,76,.55)] bg-[var(--plum)] text-[var(--cream)]"
          : "border-[var(--border)] bg-[var(--cream)]",
      )}
    >
      <p className="buudy-display text-4xl text-[var(--gold)]">{step.number}</p>
      <div>
        <h3
          className={cn(
            "buudy-display text-2xl",
            step.highlighted ? "text-[var(--cream)]" : "text-[var(--plum)]",
          )}
        >
          {step.title}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm leading-6",
            step.highlighted
              ? "text-[rgba(247,241,232,.76)]"
              : "text-[var(--muted)]",
          )}
        >
          {step.copy}
        </p>
      </div>
    </article>
  );
}

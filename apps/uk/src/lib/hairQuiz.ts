// Personalised result engines for the Muuhu Haircare and Hairstyle quizzes.
// Both build a 4-week routine: weeks 1 & 2 are revealed, weeks 3 & 4 are
// locked behind owning the Muuhu Hair Dryer (the 7-in-1 styler).

import type {
  HairCareAnswers,
  HairStyleAnswers,
  QuizAnswersLike,
  QuizResult,
  QuizRoutineStep,
} from "@/data/hairQuiz";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function profileTagFrom(values: string[]): string {
  if (values.length === 0) return "Your custom plan";
  if (values.length === 1) return values[0];
  if (values.length === 2) return `${values[0]} + ${values[1]}`;
  return `${values[0]}, ${values[1]} +${values.length - 2}`;
}

// ---------------------------------------------------------------------------
// Haircare quiz result
// ---------------------------------------------------------------------------

function carePrescription(a: HairCareAnswers) {
  const damaged =
    a.concerns.includes("Colour or Heat Damage") ||
    a.concerns.includes("Dryness and Breakage");
  const frizzy = a.concerns.includes("Frizz");
  const oily = a.concerns.includes("Oily Roots");
  const thin = a.concerns.includes("Thinning and Volume Loss");
  const scalp = a.concerns.includes("Scalp Sensitivity");

  let attachment = "Smoothing Brush";
  let detail =
    "Medium heat, Ionic on. The Smoothing Brush seals the cuticle for a calm, frizz-free finish.";

  if (thin || a.goals.includes("More volume")) {
    attachment = "Round Volumising Brush";
    detail =
      "Low–medium heat at the root, Ionic on. The Round Volumising Brush lifts from the scalp for lasting body.";
  } else if (frizzy && !thin) {
    attachment = "Smoothing Brush";
    detail =
      "Medium heat, Ionic on. The Smoothing Brush flattens the cuticle so frizz stays down all day.";
  } else if (oily) {
    attachment = "Concentrator";
    detail =
      "Cool-shot finish at the root. The Concentrator directs airflow to dry the scalp fast without over-stimulating oil.";
  } else if (scalp || a.goals.includes("A healthier scalp")) {
    attachment = "Round Volumising Brush";
    detail =
      "Low heat, Ionic on, keep the nozzle off the skin. Gentle root lift improves scalp airflow without irritation.";
  }

  const heatNote = damaged
    ? "Keep heat at Low and let the 200-million-ion flow do the work, your strands are already stressed."
    : "Medium heat is your sweet spot, intelligent heat control keeps it safe.";

  return { attachment, detail: `${detail} ${heatNote}` };
}

function careWeek1(a: HairCareAnswers): QuizRoutineStep {
  const prep =
    a.hairType === "Coily" || a.hairType === "Curly"
      ? "Start on damp, conditioned hair with a wide-tooth comb and a leave-in."
      : "Start on towel-dried hair, rough-dry to 80% with the Concentrator first.";
  return {
    number: "01",
    title: "Reset Week — Learn your tool",
    copy: `${prep} Run one full pass with your prescription attachment to see how your hair responds. Keep sessions under 10 minutes and never go past Medium heat. This week is about reading your hair, not perfecting it.`,
    highlighted: true,
  };
}

function careWeek2(a: HairCareAnswers): QuizRoutineStep {
  const goal = a.goals[0] ?? "healthier hair";
  const focus = a.concerns.includes("Frizz")
    ? "section your hair and brush each panel slowly from mid-length down."
    : a.concerns.includes("Thinning and Volume Loss")
      ? "lift at the root, then roll the brush out for soft body."
      : `focus the airflow where you want ${goal.toLowerCase()}.`;
  return {
    number: "02",
    title: "Build the Habit — Refine technique",
    copy: `Now you know the feel. ${focus.charAt(0).toUpperCase()}${focus.slice(1)} Use the Cool Shot to set each section so the result lasts. Three sessions this week and the routine becomes automatic.`,
  };
}

function careWeek3(a: HairCareAnswers): QuizRoutineStep {
  const advance =
    a.goals.includes("Grow it longer")
      ? "Add a weekly scalp-warm-up pass to encourage growth."
      : a.goals.includes("More shine")
        ? "Layer a light oil mist before the Cool Shot for mirror shine."
        : "Introduce a second attachment to expand your finish.";
  return {
    number: "03",
    title: "Advanced Styling — Unlock your signature",
    copy: `${advance} This is where the routine turns from maintenance into transformation. Full step-by-step lives in your Muuhu owner plan.`,
    locked: true,
  };
}

function careWeek4(): QuizRoutineStep {
  return {
    number: "04",
    title: "Your Signature Look — On autopilot",
    copy: "By now you style in half the time with salon-grade results. The final week cements your personal method, with attachment swaps for any occasion. Unlock the complete plan with your Muuhu Hair Dryer.",
    locked: true,
  };
}

export function buildHairCareResult(a: QuizAnswersLike): QuizResult {
  const answers = a as unknown as HairCareAnswers;
  const rx = carePrescription(answers);
  const concerns = answers.concerns.length ? answers.concerns : ["general upkeep"];
  const goals = answers.goals.length ? answers.goals : ["healthier hair"];

  return {
    profileTag: profileTagFrom([...concerns, ...goals].slice(0, 3)),
    profileSummary: `For your ${answers.hairType.toLowerCase()} hair, styling ${answers.heatFrequency.toLowerCase()}, we built a ${answers.timeBudget.toLowerCase()} routine around ${concerns[0].toLowerCase()} and ${goals[0].toLowerCase()}.`,
    prescription: rx.attachment,
    prescriptionDetail: rx.detail,
    weeks: [careWeek1(answers), careWeek2(answers), careWeek3(answers), careWeek4()],
  };
}

// ---------------------------------------------------------------------------
// Hairstyle quiz result
// ---------------------------------------------------------------------------

function stylePrescription(a: HairStyleAnswers) {
  const wants = a.desiredLook;
  if (wants.includes("Bouncy Curls") || wants.includes("Soft Waves")) {
    return {
      attachment: "Auto-Wrap Curlers",
      detail:
        "Medium heat, Coanda airflow on. The Auto-Wrap Curlers draw hair up the barrel, no clamp, no kink, just even curls.",
    };
  }
  if (wants.includes("Defined Coils")) {
    return {
      attachment: "Diffuser",
      detail:
        "Low heat, Ionic on. The Diffuser cups each coil to lock definition and cut frizz without disturbing the pattern.",
    };
  }
  if (wants.includes("Voluminous Blowout") || wants.includes("Lifted Roots")) {
    return {
      attachment: "Round Volumising Brush",
      detail:
        "Medium heat at the root, Cool Shot to set. The Round Volumising Brush builds body and a bouncy blowout shape.",
    };
  }
  if (wants.includes("Sleek and Straight")) {
    return {
      attachment: "Smoothing Brush",
      detail:
        "Medium heat, Ionic on. The Smoothing Brush pulls hair straight and flat for a glassy, frizz-free finish.",
    };
  }
  return {
    attachment: "Concentrator",
    detail:
      "Medium heat, follow with Cool Shot. The Concentrator gives precise, directional straightness.",
  };
}

function styleWeek1(a: HairStyleAnswers): QuizRoutineStep {
  const lenNote =
    a.hairLength === "Short"
      ? "Short hair dries fast, keep sections small."
      : a.hairLength === "Long"
        ? "Long hair needs patient, section-by-section work."
        : "Work in horizontal sections around the head.";
  return {
    number: "01",
    title: "Foundation Week — One attachment, one look",
    copy: `Rough-dry to 80%, then practise only your prescription attachment. ${lenNote} Aim for one repeatable result, not perfection. Under 10 minutes.`,
    highlighted: true,
  };
}

function styleWeek2(a: HairStyleAnswers): QuizRoutineStep {
  const skill =
    a.skillLevel === "Beginner"
      ? "Slow down and let the airflow do the work, your hands stay relaxed."
      : a.skillLevel === "Confident pro"
        ? "Push speed and consistency, mirror-finishing every section."
        : "Add the Cool Shot to lock each section as you go.";
  return {
    number: "02",
    title: "Consistency Week — Make it repeatable",
    copy: `This week the look should arrive the same way each time. ${skill.charAt(0).toUpperCase()}${skill.slice(1)} For ${a.occasion.toLowerCase()}, rehearse the exact finish you want to show up with.`,
  };
}

function styleWeek3(a: HairStyleAnswers): QuizRoutineStep {
  const add =
    a.attachments.length > 1
      ? `Layer in your second pick (${a.attachments[1]}) for a hybrid finish.`
      : "Add a second attachment to double your looks.";
  return {
    number: "03",
    title: "Mastery Week — Combine attachments",
    copy: `${add} This is where a single tool starts replacing your whole drawer. The full multi-attachment sequence is in your Muuhu owner plan.`,
    locked: true,
  };
}

function styleWeek4(a: HairStyleAnswers): QuizRoutineStep {
  const occ =
    a.occasion === "Events and glam"
      ? "red-carpet waves that hold all night"
      : a.occasion === "Work and polished"
        ? "boardroom-sleek in under 8 minutes"
        : "effortless everyday hair";
  return {
    number: "04",
    title: "Signature Week — Your full repertoire",
    copy: `You can now switch between every look on your list and deliver ${occ}. The complete style library unlocks with your Muuhu Hair Dryer.`,
    locked: true,
  };
}

export function buildHairStyleResult(a: QuizAnswersLike): QuizResult {
  const answers = a as unknown as HairStyleAnswers;
  const rx = stylePrescription(answers);
  const looks = answers.desiredLook.length ? answers.desiredLook : ["a polished finish"];

  return {
    profileTag: profileTagFrom(looks.slice(0, 3)),
    profileSummary: `For ${answers.hairLength.toLowerCase()} hair and a ${answers.skillLevel.toLowerCase()} hand, we mapped a routine to ${looks[0].toLowerCase()} and your ${answers.occasion.toLowerCase()} moments.`,
    prescription: rx.attachment,
    prescriptionDetail: rx.detail,
    weeks: [styleWeek1(answers), styleWeek2(answers), styleWeek3(answers), styleWeek4(answers)],
  };
}

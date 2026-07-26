// Hair Quiz data — shared types, question sets, and result shapes for the
// Muuhu Haircare and Hairstyle quizzes. Questions and options are intentionally
// data-driven so the quiz engine stays generic and reviewable.

export type HairQuizTrack = "care" | "style";

/** A loose answers shape the generic quiz engine reads from. */
export type QuizAnswersLike = Record<string, string | string[]>;

export type QuizOption = {
  value: string;
  label: string;
  description?: string;
  exclusive?: boolean;
};

export type QuizQuestion = {
  id: string;
  title: string;
  subtitle: string;
  selection: "single" | "multiple";
  options: QuizOption[];
};

export type QuizRoutineStep = {
  number: string;
  title: string;
  copy: string;
  highlighted?: boolean;
  // Weeks 3 & 4 are gated behind owning the Muuhu Airpro.
  locked?: boolean;
};

export type QuizResult = {
  profileTag: string;
  profileSummary: string;
  /** The attachment + heat setting prescription for this profile. */
  prescription: string;
  prescriptionDetail: string;
  weeks: QuizRoutineStep[];
};

// ---------------------------------------------------------------------------
// Haircare quiz
// ---------------------------------------------------------------------------

export type HairCareAnswers = {
  hairType: string;
  concerns: string[];
  heatFrequency: string;
  goals: string[];
  timeBudget: string;
};

export const emptyHairCareAnswers: HairCareAnswers = {
  hairType: "",
  concerns: [],
  heatFrequency: "",
  goals: [],
  timeBudget: "",
};

export const hairCareQuestions: QuizQuestion[] = [
  {
    id: "hairType",
    title: "What is your hair type?",
    subtitle: "Select the one that fits best.",
    selection: "single",
    options: [
      { value: "Straight", label: "Straight", description: "Lays flat, can get oily near the roots quickly." },
      { value: "Wavy", label: "Wavy", description: "Soft S-shape, somewhere between straight and curly." },
      { value: "Curly", label: "Curly", description: "Defined loops and ringlets that love moisture." },
      { value: "Coily", label: "Coily", description: "Tight, dense coils that need real hydration." },
    ],
  },
  {
    id: "concerns",
    title: "What are your main hair concerns?",
    subtitle: "Select all that apply.",
    selection: "multiple",
    options: [
      { value: "Dryness and Breakage", label: "Dryness and Breakage" },
      { value: "Frizz", label: "Frizz" },
      { value: "Oily Roots", label: "Oily Roots" },
      { value: "Thinning and Volume Loss", label: "Thinning and Volume Loss" },
      { value: "Colour or Heat Damage", label: "Colour or Heat Damage" },
      { value: "Scalp Sensitivity", label: "Scalp Sensitivity" },
    ],
  },
  {
    id: "heatFrequency",
    title: "How often do you use heat to style?",
    subtitle: "Be honest, it shapes your routine.",
    selection: "single",
    options: [
      { value: "Daily", label: "Daily" },
      { value: "A few times a week", label: "A few times a week" },
      { value: "Rarely", label: "Rarely" },
      { value: "Never", label: "Never" },
    ],
  },
  {
    id: "goals",
    title: "What do you want most from your hair?",
    subtitle: "Pick your top goals.",
    selection: "multiple",
    options: [
      { value: "Grow it longer", label: "Grow it longer" },
      { value: "More volume", label: "More volume" },
      { value: "Smoother, less frizz", label: "Smoother, less frizz" },
      { value: "A healthier scalp", label: "A healthier scalp" },
      { value: "Faster drying", label: "Faster drying" },
      { value: "More shine", label: "More shine" },
    ],
  },
  {
    id: "timeBudget",
    title: "How much time do you have each day?",
    subtitle: "We tailor the routine to your real life.",
    selection: "single",
    options: [
      { value: "Under 5 minutes", label: "Under 5 minutes" },
      { value: "5 to 15 minutes", label: "5 to 15 minutes" },
      { value: "15+ minutes", label: "15+ minutes" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Hairstyle quiz
// ---------------------------------------------------------------------------

export type HairStyleAnswers = {
  desiredLook: string[];
  hairLength: string;
  skillLevel: string;
  occasion: string;
  attachments: string[];
};

export const emptyHairStyleAnswers: HairStyleAnswers = {
  desiredLook: [],
  hairLength: "",
  skillLevel: "",
  occasion: "",
  attachments: [],
};

export const hairStyleQuestions: QuizQuestion[] = [
  {
    id: "desiredLook",
    title: "Which looks are you after?",
    subtitle: "Pick every style you love.",
    selection: "multiple",
    options: [
      { value: "Bouncy Curls", label: "Bouncy Curls" },
      { value: "Sleek and Straight", label: "Sleek and Straight" },
      { value: "Voluminous Blowout", label: "Voluminous Blowout" },
      { value: "Soft Waves", label: "Soft Waves" },
      { value: "Defined Coils", label: "Defined Coils" },
      { value: "Lifted Roots", label: "Lifted Roots" },
    ],
  },
  {
    id: "hairLength",
    title: "How long is your hair?",
    subtitle: "This sets the right technique.",
    selection: "single",
    options: [
      { value: "Short", label: "Short", description: "Above the shoulders." },
      { value: "Shoulder Length", label: "Shoulder Length", description: "Grazes the shoulders." },
      { value: "Long", label: "Long", description: "Past the shoulders." },
    ],
  },
  {
    id: "skillLevel",
    title: "How confident are you with styling tools?",
    subtitle: "We meet you where you are.",
    selection: "single",
    options: [
      { value: "Beginner", label: "Beginner", description: "Rarely pick up a tool." },
      { value: "Some experience", label: "Some experience", description: "Comfortable with a dryer." },
      { value: "Confident pro", label: "Confident pro", description: "Salon-level at home." },
    ],
  },
  {
    id: "occasion",
    title: "When do you style most?",
    subtitle: "Helps us prioritise the routine.",
    selection: "single",
    options: [
      { value: "Everyday", label: "Everyday" },
      { value: "Work and polished", label: "Work and polished" },
      { value: "Events and glam", label: "Events and glam" },
    ],
  },
  {
    id: "attachments",
    title: "Which attachments intrigue you?",
    subtitle: "Select any that you want to master.",
    selection: "multiple",
    options: [
      { value: "Auto-Wrap Curlers", label: "Auto-Wrap Curlers", description: "Coanda airflow curls, no clamp." },
      { value: "Diffuser", label: "Diffuser", description: "Defines curls and coils." },
      { value: "Round Volumising Brush", label: "Round Volumising Brush", description: "Blowout body and lift." },
      { value: "Smoothing Brush", label: "Smoothing Brush", description: "Sleek, frizz-free finish." },
      { value: "Concentrator", label: "Concentrator", description: "Precise, straight styling." },
    ],
  },
];

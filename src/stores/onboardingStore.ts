import { create } from "zustand";

export type AnalysisStyle = "analyst" | "degen" | "balanced" | "contrarian";
export type RiskTolerance = "conservative" | "moderate" | "aggressive";

export interface OnboardingState {
  currentStep: number;

  // Step 2: Profile
  profile: {
    avatar: string | null;
    username: string;
    bio: string;
    twitterConnected: boolean;
    twitterHandle: string | null;
  };

  // Step 3: Interests
  interests: string[];

  // Step 4: Clone
  clone: {
    name: string;
    style: AnalysisStyle;
    riskTolerance: RiskTolerance;
  };

  // Step 5-6
  activated: boolean;
  tourCompleted: boolean;

  // Actions
  setStep: (step: number) => void;
  setProfile: (profile: Partial<OnboardingState["profile"]>) => void;
  toggleInterest: (interest: string) => void;
  setClone: (clone: Partial<OnboardingState["clone"]>) => void;
  setActivated: (activated: boolean) => void;
  setTourCompleted: (completed: boolean) => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 1,

  profile: {
    avatar: null,
    username: "",
    bio: "",
    twitterConnected: false,
    twitterHandle: null,
  },

  interests: [],

  clone: {
    name: "",
    style: "balanced",
    riskTolerance: "moderate",
  },

  activated: false,
  tourCompleted: false,

  setStep: (step) => set({ currentStep: step }),

  setProfile: (profile) =>
    set((state) => ({
      profile: { ...state.profile, ...profile },
    })),

  toggleInterest: (interest) =>
    set((state) => ({
      interests: state.interests.includes(interest)
        ? state.interests.filter((i) => i !== interest)
        : [...state.interests, interest],
    })),

  setClone: (clone) =>
    set((state) => ({
      clone: { ...state.clone, ...clone },
    })),

  setActivated: (activated) => set({ activated }),
  setTourCompleted: (completed) => set({ tourCompleted: completed }),
}));

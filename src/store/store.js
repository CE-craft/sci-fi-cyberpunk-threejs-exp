import create from "zustand";

export const useStore = create((set) => ({
  feature: "",
  featureLens: () =>
    set((state) => {
      state.feature = "lens";
    }),
  featureShield: () =>
    set((state) => {
      state.feature = "shield";
    }),
  featureMobility: () =>
    set((state) => {
      state.feature = "mobility";
    }),
  featureUsage: () =>
    set((state) => {
      state.feature = "usage";
    }),
  featureClose: () =>
    set((state) => {
      state.feature = "";
    }),
}));

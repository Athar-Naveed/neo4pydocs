import { StateType } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const stateStore = create(
  persist<StateType>(
    (set) => ({
      activeSection: "introduction",
      setActiveSection: (section) => set({ activeSection: section }),
    }),
    {
      name: "user-storage", // unique name
    }
  )
);

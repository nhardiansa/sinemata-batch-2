import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGenres = create(
  persist(
    (set) => ({
      genres: [],
      setGenres: (genres) => set({ genres }),
    }),
    {
      name: "genres-storage",
    },
  ),
);

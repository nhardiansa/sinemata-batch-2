import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWatchlist = create(
  persist(
    (set) => ({
      watchlist: [],
      addMovieToWatchlist: (movie) =>
        set((state) => ({ watchlist: [...state.watchlist, movie] })),
      removeMovieFromWatchlist: (movie) =>
        set((state) => ({
          watchlist: state.watchlist.filter((m) => m.id !== movie.id),
        })),
      hasMovieInWatchlist: (movie) =>
        set((state) => ({
          watchlist: state.watchlist.filter((m) => m.id !== movie.id),
        })),
    }),
    {
      name: "watchlist-storage",
    },
  ),
);

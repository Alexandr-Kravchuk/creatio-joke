"use client"

import { create } from "zustand"

interface JokeDialogStore {
  isOpen: boolean
  showJokeDialog: () => void
  closeJokeDialog: () => void
}

export const useJokeDialog = create<JokeDialogStore>((set) => ({
  isOpen: false,
  showJokeDialog: () => set({ isOpen: true }),
  closeJokeDialog: () => set({ isOpen: false }),
}))


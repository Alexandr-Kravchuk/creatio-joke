"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useJokeDialog } from "@/hooks/use-joke-dialog"

export default function JokeDialog() {
  const { isOpen, closeJokeDialog } = useJokeDialog()

  // Close dialog when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeJokeDialog()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [closeJokeDialog])

  return (
    <Dialog open={isOpen} onOpenChange={closeJokeDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Joke!</DialogTitle>
          <DialogDescription className="text-lg pt-2">
            You clicked a link, but this is just a demo site!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}


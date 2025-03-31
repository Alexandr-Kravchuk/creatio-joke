"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useJokeDialog } from "@/hooks/use-joke-dialog"

export default function HeroSection() {
  const { showJokeDialog } = useJokeDialog()

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showJokeDialog()
  }

  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1A365D] mb-6 max-w-4xl mx-auto leading-tight">
          AI-Native Platform to Automate CRM and Workflows with No-Code
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button className="bg-[#FF5733] hover:bg-[#E04B2A] text-white px-8 py-6 text-lg" onClick={handleButtonClick}>
            GET A DEMO
          </Button>
          <Button
            variant="outline"
            className="border-[#1A365D] text-[#1A365D] hover:bg-[#1A365D] hover:text-white px-8 py-6 text-lg"
            onClick={handleButtonClick}
          >
            TRY IT FREE
          </Button>
        </div>
      </div>
    </section>
  )
}


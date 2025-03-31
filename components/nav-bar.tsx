"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useJokeDialog } from "@/hooks/use-joke-dialog"

export default function NavBar() {
  const { showJokeDialog } = useJokeDialog()

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showJokeDialog()
  }

  return (
    <header className="w-full py-3 px-4 md:px-8 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="#" onClick={handleLinkClick} className="flex items-center">
            <Image
              src="https://www.creatio.com/sites/default/files/marketing/logo_creatio.svg"
              alt="Creatio Logo"
              width={104}
              height={32}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <Link href="#" onClick={handleLinkClick} className="flex items-center gap-1 font-medium">
                PRODUCTS
                <span className="text-xs">▼</span>
              </Link>
            </div>
            <div className="relative group">
              <Link href="#" onClick={handleLinkClick} className="flex items-center gap-1 font-medium">
                NO-CODE
                <span className="text-xs">▼</span>
              </Link>
            </div>
            <div className="relative group">
              <Link href="#" onClick={handleLinkClick} className="flex items-center gap-1 font-medium">
                PARTNERS
                <span className="text-xs">▼</span>
              </Link>
            </div>
            <div className="relative group">
              <Link href="#" onClick={handleLinkClick} className="flex items-center gap-1 font-medium">
                ABOUT
                <span className="text-xs">▼</span>
              </Link>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={handleLinkClick} className="hidden md:flex items-center">
            <Search className="h-5 w-5" />
          </button>
          <Link href="#" onClick={handleLinkClick} className="hidden md:block text-sm">
            Community
          </Link>
          <Link href="#" onClick={handleLinkClick} className="hidden md:block text-sm">
            Academy
          </Link>
          <Link href="#" onClick={handleLinkClick} className="hidden md:block text-sm">
            Marketplace
          </Link>
          <Link href="#" onClick={handleLinkClick} className="hidden md:block text-sm">
            Log in
          </Link>
          <div className="hidden md:block text-sm">
            <span>English</span>
            <span className="text-xs ml-1">▼</span>
          </div>
          <Button
            variant="outline"
            className="hidden md:block border-[#0078FF] text-[#0078FF] hover:bg-[#0078FF] hover:text-white"
            onClick={handleLinkClick}
          >
            GET A DEMO
          </Button>
          <Button className="bg-[#0078FF] hover:bg-[#0066DD]" onClick={handleLinkClick}>
            TRY IT FREE
          </Button>
        </div>
      </div>
    </header>
  )
}


import JokeDialog from "@/components/joke-dialog"
import NavBar from "@/components/nav-bar"
import HeroSection from "@/components/hero-section"
import DashboardImage from "@/components/dashboard-image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <DashboardImage />
      <JokeDialog />
    </main>
  )
}


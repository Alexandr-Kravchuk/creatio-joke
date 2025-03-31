import Image from "next/image"

export default function DashboardImage() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl border">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sNUTIWNSUIT96sD2gJiO9SM6m8Q3B8.png"
          alt="Creatio Dashboard"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}


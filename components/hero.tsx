"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Donate Blood, Save Lives",
    description: "Your donation can save up to 3 lives. Be a hero today.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Every Drop Counts",
    description: "Join our community of donors and make a difference.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Emergency Blood Needed",
    description: "Help us maintain our blood supply for emergencies.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">{slide.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/register">Become a Donor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/search">Request Blood</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

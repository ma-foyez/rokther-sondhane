import MainLayout from "@/components/layouts/main-layout"
import Hero from "@/components/hero"
import SearchBlood from "@/components/search-blood"
import HealthTips from "@/components/health-tips"
import EmergencyServices from "@/components/emergency-services"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <MainLayout>
      <main className="min-h-screen">
        <Hero />
        <SearchBlood />
        <HealthTips />
        <EmergencyServices />
        <ContactSection />
      </main>
    </MainLayout>
  )
}

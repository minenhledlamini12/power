import { Hero } from "@/components/hero"
//import Hero from "@/components/hero"

import { Navigation } from "@/components/navigation"
import { MarketOverview } from "@/components/market-overview"
import { RegulatoryFramework } from "@/components/regulatory-framework"
import { PolicyEvolution } from "@/components/policy-evolution"
import { Procurement } from "@/components/Procurement"
import { EnergySavingTips } from "@/components/EnergySavingTips"
import { MEPSGuide } from "@/components/MEPSGuide"
import { SwitchSmartProject } from "@/components/switch-smart-project"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <MarketOverview />
        <RegulatoryFramework />
        <PolicyEvolution />
        <Procurement />
        <EnergySavingTips />
        <MEPSGuide />
      </main>
      <Footer />
    </div>
  )
}


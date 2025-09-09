"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export function EnergySavingTips() {
  const tips = [
    { category: "Lighting", advice: "Switch to LED bulbs and use natural light where possible" },
    { category: "Heating & Cooling", advice: "Use programmable thermostats and insulate your home" },
    { category: "Appliances", advice: "Unplug devices when not in use and choose energy-efficient models" },
    { category: "Water Heating", advice: "Install solar water heaters or use low-flow showerheads" },
    { category: "Behavioral", advice: "Encourage switching off lights, fans, and electronics when not needed" },
  ]

  return (
    <section id="energy-tips" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <Lightbulb className="h-8 w-8 text-yellow-500" /> Energy-Saving Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple practices households and businesses can adopt to reduce electricity consumption and save money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{tip.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tip.advice}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ShoppingCart } from "lucide-react"

export function Procurement() {
  const challenges = [
    "Limited financing options for large-scale renewable projects",
    "High upfront cost of importing modern energy technologies",
    "Supply chain disruptions and dependence on foreign equipment",
    "Lengthy procurement processes within government institutions",
    "Low participation of local contractors in energy projects",
  ]

  const opportunities = [
    "Public-private partnerships for renewable investments",
    "Regional procurement platforms (SAPP, SADC)",
    "Capacity building for local contractors & suppliers",
    "Adoption of digital procurement systems for transparency",
    "Incentives for green technology suppliers",
  ]

  return (
    <section id="procurement" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Procurement Challenges & Opportunities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding barriers and exploring opportunities in energy sector procurement to improve access,
            efficiency, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-6 w-6" /> Challenges
              </CardTitle>
              <CardDescription>Key barriers in procurement of energy technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {challenges.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <ShoppingCart className="h-6 w-6" /> Opportunities
              </CardTitle>
              <CardDescription>Strategies to improve procurement and investment</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {opportunities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

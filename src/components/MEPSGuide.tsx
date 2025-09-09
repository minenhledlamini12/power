"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tag } from "lucide-react"

export function MEPSGuide() {
  const standards = [
    {
      title: "Minimum Energy Performance Standards (MEPS)",
      description:
        "MEPS define the minimum efficiency level appliances must meet before being sold. They prevent inefficient products from entering the market.",
    },
    {
      title: "Appliance Labeling",
      description:
        "Labels provide consumers with information about the energy consumption and efficiency of appliances, helping them make informed decisions.",
    },
    {
      title: "Consumer Benefits",
      description:
        "Lower energy bills, access to better performing appliances, and contribution to national energy savings.",
    },
    {
      title: "Market Impact",
      description:
        "Encourages manufacturers to innovate and promotes fair competition based on efficiency and quality.",
    },
  ]

  return (
    <section id="meps" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <Tag className="h-7 w-7 text-blue-600" /> MEPS & Appliance Labeling
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A guide to understanding energy standards and labels, empowering consumers to choose efficient appliances
            while supporting national energy goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

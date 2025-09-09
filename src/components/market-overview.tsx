"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Building2, Home, Leaf } from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

export function MarketOverview() {
  const powerSupplyData = [
    {
      name: "Electricity Imports",
      value: 75,
      color: "#3b82f6", // blue
      description: "From Eskom (RSA), EDM (Mozambique), SAPP",
    },
    {
      name: "Local Generation",
      value: 25,
      color: "#10b981", // green
      description: "Hydro, Solar, Biomass, and Emergency Diesel",
    },
  ]

  const localGenerationData = [
    { name: "Ezulwini Hydro", capacity: 20.2, type: "Hydro", color: "#3b82f6" },
    { name: "Maguga Hydro", capacity: 19.5, type: "Hydro", color: "#3b82f6" },
    { name: "Edwaleni Hydro", capacity: 15.0, type: "Hydro", color: "#3b82f6" },
    { name: "RES Biomass", capacity: 65.5, type: "Biomass", color: "#10b981" },
    { name: "Ubombo Biomass", capacity: 41.5, type: "Biomass", color: "#10b981" },
    { name: "Solar PV Plant", capacity: 10.0, type: "Solar", color: "#f59e0b" },
  ]

  const additionalMetrics = [
    {
      title: "Residential Access",
      description: "Household electricity coverage",
      percentage: 85,
      icon: Home,
    },
    {
      title: "Renewable Energy",
      description: "Share of clean energy sources",
      percentage: 60,
      icon: Leaf,
    },
  ]

  return (
    <section id="market" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eswatini Electricity Market Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the current structure of Eswatini's electricity supply, from imports and local generation to
            distribution and customer segments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-accent" />
                Power Supply Breakdown
              </CardTitle>
              <CardDescription>Sources of electricity in Eswatini's power market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={powerSupplyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {powerSupplyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Share"]} labelFormatter={(label) => label} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-3">
                {powerSupplyData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <div className="font-semibold text-sm">
                        {item.name} ({item.value}%)
                      </div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Modified additionalMetrics section */}
          <div className="space-y-6">
            {additionalMetrics.map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    {/* Icon bold black */}
                    <item.icon className="h-6 w-6 text-black font-bold" />
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="text-sm">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {/* Percentage bold black */}
                    <div className="text-3xl font-extrabold text-black">{item.percentage}%</div>
                    <Progress value={item.percentage} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Local Generation Capacity</CardTitle>
              <CardDescription>Current operational power plants in Eswatini</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {localGenerationData.map((plant, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{plant.name}</span>
                    <span className="font-semibold">{plant.capacity} MW</span>
                  </div>
                ))}
              </div>

              <div className="h-80 mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={localGenerationData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} fontSize={12} />
                    <YAxis label={{ value: "Capacity (MW)", angle: -90, position: "insideLeft" }} />
                    <Tooltip
                      formatter={(value, name) => [`${value} MW`, "Capacity"]}
                      labelFormatter={(label) => label}
                    />
                    <Bar dataKey="capacity" fill={(entry) => entry.color} radius={[4, 4, 0, 0]}>
                      {localGenerationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Market Structure</CardTitle>
              <CardDescription>Key players in Eswatini's electricity sector</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Generation</h4>
                  <p className="text-sm text-muted-foreground">EEC (Utility), Independent Power Producers (IPPs)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Transmission</h4>
                  <p className="text-sm text-muted-foreground">Eswatini Electricity Company (EEC)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Distribution</h4>
                  <p className="text-sm text-muted-foreground">EEC and private providers</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Regulation</h4>
                  <p className="text-sm text-muted-foreground">Eswatini Energy Regulatory Authority (ESERA)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

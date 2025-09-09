import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Settings, Users } from "lucide-react"

export function RegulatoryFramework() {
  const frameworks = [
    {
      title: "Legislative Foundation",
      icon: Scale,
      items: ["Electricity Act, 2007", "Energy Regulatory Act, 2007", "Swaziland Electricity Company Act, 2007"],
    },
    {
      title: "Regulatory Instruments",
      icon: FileText,
      items: [
        "Electricity Licensing By-laws",
        "Grid Code & Technical Standards",
        "Tariff Methodologies",
        "Quality of Supply & Service Guidelines",
      ],
    },
    {
      title: "Market Participants",
      icon: Users,
      items: [
        "Eswatini Electricity Company (EEC)",
        "Independent Power Producers (IPPs)",
        "Distributors & Customers",
        "Energy Department & Renewable Energy Unit",
      ],
    },
    {
      title: "Regulatory Authority",
      icon: Settings,
      items: [
        "Eswatini Energy Regulatory Authority (ESERA)",
        "Licensing & Compliance",
        "Tariff Regulation",
        "Market Oversight",
      ],
    },
  ]

  const regulatoryIndex = [
    { category: "Regulatory Governance", score: 0.6, year: "2021" },
    { category: "Regulatory Substance", score: 0.82, year: "2021" },
    { category: "Regulatory Outcome", score: 0.595, year: "2021" },
    { category: "Overall Index", score: 0.621, year: "2024" },
  ]

  return (
    <section id="regulatory" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Regulatory Framework</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The institutional and regulatory structure governing Eswatini's electricity sector, ensuring fair market
            practices and sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {frameworks.map((framework, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <framework.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-center text-lg">{framework.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {framework.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Electricity Regulatory Index</CardTitle>
            <CardDescription>
              Performance metrics measuring regulatory effectiveness in Eswatini's electricity sector
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regulatoryIndex.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.score.toFixed(3)}</div>
                  <div className="text-sm font-medium text-foreground mb-2">{metric.category}</div>
                  <Badge variant="outline" className="text-xs">
                    {metric.year}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

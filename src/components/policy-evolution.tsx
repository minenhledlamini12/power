import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Target, Lightbulb, TrendingUp } from "lucide-react"

export function PolicyEvolution() {
  const policies = [
    {
      year: "2003",
      title: "Energy Policy 2003",
      vision:
        "Ensuring that the development goals of the country are met through the sustainable supply and use of energy for the benefit of all citizens",
      objectives: [
        "Ensuring access to energy for all",
        "Enhancing employment creation",
        "Ensuring security of supply",
        "Stimulating economic growth and development",
        "Ensuring environmental and health sustainability",
      ],
      keyPriorities: [
        "Developing effective means of ensuring adequate access to energy services",
        "Establishing new electricity and regulatory legislation",
        "Actively participating in the Southern African Power Pool (SAPP)",
        "Liberalizing the Electricity Supply Industry",
        "Establishing an Energy Regulatory Authority (ERA)",
      ],
    },
    {
      year: "2018",
      title: "Energy Policy 2018",
      vision:
        "To meet the energy needs of the country in a sustainable manner that contributes to economic growth and wellbeing of the population",
      objectives: [
        "Ensuring access to available and affordable energy for all",
        "Enhancing employment creation",
        "Ensuring security of supply",
        "Stimulating economic growth and development",
        "Ensuring environmental and health sustainability",
      ],
      keyPriorities: [
        "Security of Supply - Reduce reliance on electricity imports",
        "Universal Access - Expand electricity access to all citizens by 2030",
        "Market Reform - Transition to competitive electricity market",
        "Renewable Energy Development - Prioritize solar, hydro, biomass, wind",
        "Energy Efficiency and Demand-Side Management",
        "Cost-Reflective Tariffs",
        "Private Sector Participation",
        "Regulatory Strengthening",
        "Regional Integration",
      ],
    },
  ]

  const ippPolicy = {
    goal: "Establishment of an enabling environment to promote sustainable renewable energy and IPP generation sources",
    objectives: [
      "Increase utilization of local renewable energy resources",
      "Promote IPP capacity deployment",
      "Facilitate access to various funding sources",
      "Contribute to environmental sustainability",
      "Enable embedded generation and mini-grid solutions",
    ],
    positions: [
      "Non-exclusive Central Buyer market structure",
      "Definition of eligibility criteria for Contestable Customers",
      "Development of long term integrated resource plan (IRP)",
      "Competitive procurement and feed-in tariffs",
      "Regional harmonization of policy instruments",
      "Fast-track minigrid and embedded generation deployment",
      "Unbundling of tariffs and utility business areas",
    ],
  }

  return (
    <section id="policy" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Policy Evolution & Key Transitions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tracing the development of Eswatini's energy policies from 2003 to 2018, highlighting regulatory transitions
            and the Independent Power Producer framework.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {policies.map((policy, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-accent/5">
                <div className="flex items-center gap-4">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    {policy.year}
                  </div>
                  <CardTitle className="text-xl">{policy.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold">Vision</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 italic">"{policy.vision}"</p>

                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold">Objectives</h4>
                    </div>
                    <ul className="space-y-2">
                      {policy.objectives.map((objective, objIndex) => (
                        <li key={objIndex} className="text-sm text-muted-foreground">
                          • {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold">Key Priorities</h4>
                    </div>
                    <ul className="space-y-2">
                      {policy.keyPriorities.map((priority, priIndex) => (
                        <li key={priIndex} className="text-sm text-muted-foreground">
                          • {priority}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="bg-secondary/5">
            <CardTitle className="flex items-center gap-2">
              <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">IPP Policy</div>
              Independent Power Producer Policy
            </CardTitle>
            <CardDescription>Framework for promoting renewable energy and private sector participation</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-secondary">Overarching Goal</h4>
                <p className="text-sm text-muted-foreground italic">"{ippPolicy.goal}"</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-secondary">Key Objectives</h4>
                <ul className="space-y-2">
                  {ippPolicy.objectives.map((objective, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {objective}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-secondary">Policy Positions</h4>
                <ul className="space-y-2">
                  {ippPolicy.positions.map((position, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {position}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

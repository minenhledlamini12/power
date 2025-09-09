import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Users, Calendar, TrendingUp, ExternalLink, CheckCircle, Clock } from "lucide-react"

export function SwitchSmartProject() {
  const projectTimeline = [
    { date: "5-10 Sept", task: "Research procurement data; develop and test web app", status: "completed" },
    { date: "11-15 Sept", task: "Draft and finalize article", status: "completed" },
    { date: "16 Sept", task: "Publish article and share link online", status: "completed" },
    { date: "18 Sept", task: "Host awareness session", status: "completed" },
    { date: "20-30 Sept", task: "Collect survey responses and compile reflections", status: "in-progress" },
  ]

  const expectedOutcomes = [
    { metric: "Web App Visits", target: "100+", description: "visits in first two weeks" },
    { metric: "Community Awareness", target: "High", description: "of procurement challenges" },
    { metric: "MEPS Recognition", target: "Increased", description: "in consumer choices" },
    { metric: "Energy Pledges", target: "Multiple", description: "commitments to efficiency" },
  ]

  return (
    <section id="switch-smart" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary/10 p-4 rounded-full">
              <Lightbulb className="h-12 w-12 text-secondary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Switch Smart Eswatini Initiative</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A community awareness project focused on power procurement strategies and energy efficiency, helping reduce
            Eswatini's reliance on electricity imports through smart consumption.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-secondary" />
                Project Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Eswatini currently imports a significant portion of its electricity from Eskom, EDM, and the SAPP
                Day-ahead Market due to limited local generation capacity. This project aims to raise awareness about
                power procurement challenges and promote energy efficiency.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm">Raise awareness on power procurement challenges</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm">Explain how energy efficiency supports procurement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm">Develop digital awareness platform</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm">Publish educational article</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                Target Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Who Benefits</h4>
                  <p className="text-sm text-muted-foreground">
                    Households, small businesses, regulators, and the general public
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How They Benefit</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Better understanding of electricity procurement</li>
                    <li>• Clear guidance on efficient energy use</li>
                    <li>• Reduced household costs through smart consumption</li>
                    <li>• Contribution to national energy security</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                Expected Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expectedOutcomes.map((outcome, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">{outcome.metric}</div>
                      <div className="text-xs text-muted-foreground">{outcome.description}</div>
                    </div>
                    <Badge variant="secondary">{outcome.target}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-secondary/5 border-secondary/20">
          <CardHeader>
            <CardTitle className="text-secondary">Personal Reflection & Learning Goals</CardTitle>
            <CardDescription>By Temalangeni Minenhle Dlamini - Capstone Project</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              This project places power procurement at the center of Eswatini's energy debate while linking it with
              practical demand-side measures like efficiency. It enables me to translate technical issues into
              community-friendly tools and discussions. This learning experience will sharpen my ability to design
              impactful energy solutions, bridging engineering, policy, and community awareness to support Eswatini's
              sustainable energy journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary hover:bg-secondary/90">
                View Project Details
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Download Research Paper</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

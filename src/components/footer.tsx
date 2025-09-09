import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, FileText, Users } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { label: "Market Overview", href: "#market" },
    { label: "Regulatory Framework", href: "#regulatory" },
    { label: "Policy Evolution", href: "#policy" },
    { label: "Switch Smart Initiative", href: "#switch-smart" },
  ]

  const resources = [
    { label: "Energy Policy 2003", href: "#" },
    { label: "Energy Policy 2018", href: "#" },
    { label: "IPP Policy Framework", href: "#" },
    { label: "Regulatory Index Report", href: "#" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Eswatini Power Market</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Comprehensive resource on Eswatini's electricity sector evolution, regulatory framework, and energy
              efficiency initiatives.
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors flex items-center gap-1"
                  >
                    {resource.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Key Organizations</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Ministry of Natural Resources and Energy (MNRE)</li>
              <li>Eswatini Energy Regulatory Authority (ESERA)</li>
              <li>Eswatini Electricity Company (EEC)</li>
              <li>Southern African Power Pool (SAPP)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Eswatini Power Market Evolution. Educational resource for policy awareness.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <span>Last updated: August 2025</span>
              <span>•</span>
              <span>Switch Smart Eswatini Initiative</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

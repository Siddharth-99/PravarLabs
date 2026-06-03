import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    image: "/images/features/rag-technology.jpg",
    title: "RAG Systems",
    description: "Advanced retrieval-augmented generation that combines enterprise data with AI for smarter answers.",
    tag: "Services",
  },
  {
    image: "/images/features/ai-copilot.jpg",
    title: "AI Copilots",
    description: "Intelligent copilots that help teams automate workflows and act on data instantly.",
    tag: "Services",
  },
  {
    image: "/images/features/enterprise-automation.jpg",
    title: "Enterprise AI",
    description: "Scalable AI solutions designed for enterprise operations and cross-team automation.",
    tag: "Services",
  },
  {
    image: "/images/features/data-integration.jpg",
    title: "Data Integration",
    description: "Unified data pipelines that connect systems and provide the foundation for AI-driven insights.",
    tag: "Services",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 mb-4">
            Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl text-balance">
            AI-Powered Services for Modern Enterprises
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Explore our core AI services, from RAG systems to enterprise automation and data integration.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((solution) => (
            <Card 
              key={solution.title} 
              className="group border-border/50 bg-background hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary">
                    {solution.tag}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  {solution.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

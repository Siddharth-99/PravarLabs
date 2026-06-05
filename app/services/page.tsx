import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "RAG Systems",
    description: "Build knowledge-aware AI systems that combine your enterprise data with powerful language models.",
    href: "/services/rag-system",
    image: "/images/features/rag-technology.jpg",
  },
  {
    title: "AI Copilots",
    description: "Deploy intelligent copilots to automate workflows, boost productivity, and support your team in real time.",
    href: "/services/ai-copilots",
    image: "/images/features/ai-copilot.jpg",
  },
  {
    title: "Enterprise AI",
    description: "Scale AI across your organization with secure, reliable enterprise-grade automation and insights.",
    href: "/services/enterprise-ai",
    image: "/images/features/enterprise-automation.jpg",
  },
  {
    title: "Data Integration",
    description: "Connect your systems and unify your data to create a strong foundation for AI and analytics.",
    href: "/services/data-integration",
    image: "/images/features/data-integration.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 mb-6">
              Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Explore PravarAiLabs Services
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-8">
              Select one of our core service offerings to learn more about how we bring enterprise AI, RAG, copilots, and data integration to your business.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="group overflow-hidden rounded-[2rem] border border-border/50 bg-white shadow-lg transition hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-8">
                  <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Button size="lg" variant="outline" asChild>
                    <Link href={service.href || "#"} className="inline-flex items-center gap-2">
                      View {service.title}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

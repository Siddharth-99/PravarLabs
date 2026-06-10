import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DataIntegrationPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
               <span className="text-[#003135] text-bold"> Data Integration</span>
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
               <span className="text-[#003135]">Unify and prepare your data for smarter AI and analytics.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-8">
                Our Data Integration service unifies your sources, cleanses data, and prepares a single source of truth for smarter AI and analytics.
              </p>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                <li>• Seamless connectors across tools and systems</li>
                <li>• Secure data pipelines and synchronization</li>
                <li>• Unified data for AI and reporting workflows</li>
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/services" className="inline-flex items-center gap-2">
                    Back to services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/auth/sign-up">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-border/50 bg-white shadow-xl">
              <div className="relative h-96">
                <Image
                  src="/images/features/data-integration.jpg"
                  alt="Data Integration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

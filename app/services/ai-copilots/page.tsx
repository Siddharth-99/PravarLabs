import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AICopilotsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
                AI Copilots
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Give your team a modern AI copilot.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-8">
                Our AI Copilot service delivers intelligent automation, context-aware assistance, and workflow acceleration for every department in your organization.
              </p>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                <li>• Task automation and meeting support</li>
                <li>• Intelligent recommendations based on your data</li>
                <li>• Personalized user experiences across tools</li>
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
                  src="/images/features/ai-copilot.jpg"
                  alt="AI Copilots"
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

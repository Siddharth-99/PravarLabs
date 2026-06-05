import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(86,189,200,0.18),transparent)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
              <Sparkles className="h-4 w-4 " />
              <span style={{ color: "#964734" }}>
                Enterprise AI Solutions</span>
            </div>

            {/* <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span>
                Pravar<span className="text-[#7d3b11]">Ai</span>Lab
              </span>
            </div> */}

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
              <span className="text-[#003135]">
                Transform Data Into{" "}
              </span>
              <span className="text-[#0FA4AF] relative">
                Intelligent
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/40"/>
                </svg>
              </span>{" "}
              <span className="text-[#003135]">Decisions</span> 
            </h1>
            {/* Subheadline */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              PravarAI Labs builds advanced RAG systems, AI copilots, and enterprise automation that help organizations unlock the true value of their data.
            </p>

            {/* Quick benefits */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm">
              {["99.9% Uptime", "Enterprise Security", "24/7 Support"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" className="gap-2 px-6 h-12 text-base" asChild>
                <Link href="/auth/sign-up">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 px-6 h-12 text-base" asChild>
                <Link href="/demo">
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:ml-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
              <Image
                src="/images/hero-illustration.jpg"
                alt="AI-powered data visualization"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Floating stats cards */}
              <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border/50">
                <div className="text-xs text-muted-foreground">Response Time</div>
                <div className="text-lg font-bold text-primary">48ms</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border/50">
                <div className="text-xs text-muted-foreground">Accuracy Rate</div>
                <div className="text-lg font-bold text-primary">98.5%</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by innovative companies transforming their data operations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              { name: "TechCorp", size: "text-xl",  },
              { name: "DataFlow", size: "text-lg" },
              { name: "CloudBase", size: "text-xl" },
              { name: "AIVentures", size: "text-lg" },
              { name: "NextGen", size: "text-xl" },
            ].map((company) => (
              <span 
                key={company.name} 
                className={`${company.size} font-semibold text-foreground/40 hover:text-[#964734] transition-colors`}
              >
                {company.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#069494] px-6 py-16 sm:px-16 sm:py-24 lg:py-28">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl text-center relative">
            <div className="inline-flex justify-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 border border-white/20 mb-6">
             <span style={{ color: "#003135", fontWeight: "bold" }}>
              Get Started
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 text-pretty">
              Let&apos;s discuss how Pravar AI Labs can help you unlock the full potential of your data and accelerate your AI journey.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2 px-8 h-12 text-base bg-white text-primary hover:bg-[#0FA4AF] hover:text-foreground transition-colors"
                asChild
              >
                <Link href="/demo">
                  <Calendar className="h-4 w-4" />
                 <span> Schedule a Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 px-8 h-12 text-base border-white/30 text-primary-foreground hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="mailto:contact@pravarai.com">
                  <Mail className="h-4 w-4" />
                  Contact Sales
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-primary-foreground/60">
             <span style={{ color: "#003135", fontWeight: "bold" }}>Free 14-day trial. No credit card required.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

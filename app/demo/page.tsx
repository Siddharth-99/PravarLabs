"use client"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Loader2, CheckCircle2, Play, ArrowLeft } from "lucide-react"

export default function DemoPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const supabase = createClient()
    
    const { error } = await supabase.from("demo_requests").insert({
      full_name: fullName,
      email: email,
      company: company,
      phone: phone || null,
      message: message || null,
    })

    if (error) {
      setError("Something went wrong. Please try again.")
      setIsLoading(false)
      return
    }

    setSuccess(true)
    setIsLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-md text-center space-y-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <Logo width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-semibold text-foreground">PravarAi Labs</span>
          </Link>

          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-primary">Demo Request Received</h1>
            <p className="text-muted-foreground">
              Thank you for your interest in PravarAi Labs! Our team will contact you within 24 hours to schedule your personalized demo.
            </p>
          </div>

          <Button asChild className="w-full">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/10 via-primary/5 to-background items-center justify-center p-12">
        <div className="max-w-lg space-y-8">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Play className="w-10 h-10 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">See AI in Action</h2>
            <p className="text-lg text-muted-foreground">
              Get a personalized walkthrough of how PravarAi Labs can transform your organization&apos;s data operations.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">In your demo, you&apos;ll discover:</h3>
            {[
              "How RAG technology retrieves accurate insights from your data",
              "Custom AI copilot configurations for your use case",
              "Integration capabilities with your existing tech stack",
              "Enterprise security and compliance features",
              "ROI projections based on your industry",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            {/* <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <Logo width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-semibold text-foreground">PravarAi Labs</span>
            </Link> */}
            <h1 className="text-3xl font-bold text-primary">Request a Demo</h1>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and we&apos;ll be in touch shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex items-center gap-2 p-4 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Acme Inc."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">How can we help? (optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your use case or specific requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Schedule Demo"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            <Link href="/" className="text-primary hover:underline">
              <ArrowLeft className="inline h-3 w-3 mr-1" />
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

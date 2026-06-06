"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { auth } from "@/lib/firebase/client"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"
import { AlertCircle, Eye, EyeOff, Loader2 } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/dashboard")
    } catch (loginError: any) {
      setError(loginError?.message || "Unable to sign in. Please check your credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            {/* <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <Logo width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-semibold text-foreground">PravarAi Labs</span>
            </Link> */}
            <h1 className="text-3xl font-bold text-primary">Welcome back</h1>
            <p className="mt-2 text-muted-foreground">
              Sign in to access your AI dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="flex items-center gap-2 p-4 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  <span className="">Forgot password?</span>
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <p className="text-center text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up" className="text-primary font-medium hover:underline">
              Get started
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/10 via-primary/5 to-background items-center justify-center p-12">
        <div className="max-w-lg text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Unlock AI-Powered Insights</h2>
          <p className="text-muted-foreground">
            Access your personalized dashboard to manage AI copilots, explore data analytics, and automate enterprise workflows.
          </p>
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50ms</div>
              <div className="text-sm text-muted-foreground">Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">256-bit</div>
              <div className="text-sm text-muted-foreground">Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

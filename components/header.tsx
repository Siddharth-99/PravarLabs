"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { auth } from "@/lib/firebase/client"
import { onAuthStateChanged, signOut as firebaseSignOut, type User } from "firebase/auth"
import { Menu, X, LogOut, LayoutDashboard, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const servicesMenu = [
  {
    name: "RAG Systems",
    href: "/services/rag-system",
    description: "Build knowledge-aware AI agents with your enterprise data.",
  },
  {
    name: "AI Copilots",
    href: "/services/ai-copilots",
    description: "Deploy intelligent copilots that boost team productivity.",
  },
  {
    name: "Enterprise AI",
    href: "/services/enterprise-ai",
    description: "Scale AI across workflows and business operations.",
  },
  {
    name: "Data Integration",
    href: "/services/data-integration",
    description: "Connect all your systems and unify data for smarter AI.",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const currentUser = auth.currentUser
    setUser(currentUser)
    setLoading(false)

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const handleSignOut = async () => {
    await firebaseSignOut(auth)
    router.push("/")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-12 w-auto object-contain" />
          <span className="text-lg font-semibold text-foreground">
            <span className="text-[#0FA4AF]">PravarAILab</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <div className="relative group">
            <button
              type="button"
              className="inline-flex h-9 items-center gap-2 rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-[300px] space-y-2 rounded-3xl border border-border/50 bg-background p-4 shadow-2xl transition duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-2">
              {servicesMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className="block rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-primary/10 transition-colors"
                >
                  <div className="font-semibold">{item.name}</div>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href || "#"}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          {!loading && (
            <>
              {user ? (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/auth/login">Sign In</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/auth/sign-up">Get Started</Link>
                  </Button>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/services"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            {servicesMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href || "#"}
                className="block pl-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href || "#"}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              {!loading && (
                <>
                  {user ? (
                    <>
                      <Button variant="ghost" size="sm" className="justify-start" asChild>
                        <Link href="/dashboard">
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          Dashboard
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleSignOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" size="sm" className="justify-start" asChild>
                        <Link href="/auth/login">Sign In</Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="/auth/sign-up">Get Started</Link>
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

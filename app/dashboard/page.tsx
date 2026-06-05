"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { auth } from "@/lib/firebase/client"
import { onAuthStateChanged, signOut as firebaseSignOut, type User } from "firebase/auth"
import {
  LayoutDashboard,
  Bot,
  Database,
  BarChart3,
  Settings,
  LogOut,
  Zap,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser)
      setIsLoading(false)
      if (!authUser) {
        router.replace("/auth/login")
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleSignOut = async () => {
    await firebaseSignOut(auth)
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-base text-muted-foreground">Loading your dashboard…</p>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const stats = [
    { label: "AI Queries Today", value: "1,247", change: "+12%", icon: Zap },
    { label: "Avg Response Time", value: "48ms", change: "-8%", icon: Clock },
    { label: "Accuracy Rate", value: "98.5%", change: "+2%", icon: TrendingUp },
    { label: "Active Users", value: "156", change: "+23%", icon: Users },
  ]

  const quickActions = [
    { title: "AI Copilot", description: "Chat with your enterprise AI assistant", icon: Bot, href: "#" },
    { title: "Data Sources", description: "Manage connected databases and APIs", icon: Database, href: "#" },
    { title: "Analytics", description: "View insights and performance metrics", icon: BarChart3, href: "#" },
    { title: "Settings", description: "Configure your workspace preferences", icon: Settings, href: "#" },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Logo width={32} height={32} />
              <span className="text-lg font-semibold text-foreground">PravarAi Labs</span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">{user.email}</span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back{user.displayName ? `, ${user.displayName}` : ""}
          </h1>
          <p className="text-muted-foreground mt-1">Here&apos;s an overview of your AI platform activity</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-1">{stat.change} from yesterday</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Card key={action.title} className="hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <action.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest interactions with the AI platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Queried sales data analysis", time: "2 minutes ago" },
                { action: "Updated data source connection", time: "1 hour ago" },
                { action: "Generated quarterly report", time: "3 hours ago" },
                { action: "Added new team member", time: "Yesterday" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{activity.action}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

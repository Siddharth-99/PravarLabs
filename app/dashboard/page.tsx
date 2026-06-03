import { redirect } from "next/navigation"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Users
} from "lucide-react"

async function signOut() {
  "use server"
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/")
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
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
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Logo width={32} height={32} />
              <span className="text-lg font-semibold text-foreground">PravarAi Labs</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user.email}
              </span>
              <form action={signOut}>
                <Button variant="ghost" size="sm" type="submit">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back{user.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}
          </h1>
          <p className="text-muted-foreground mt-1">
            Here&apos;s an overview of your AI platform activity
          </p>
        </div>

        {/* Stats Grid */}
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

        {/* Quick Actions */}
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

        {/* Recent Activity */}
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
                { action: "Queried sales data analysis", time: "2 minutes ago", type: "query" },
                { action: "Updated data source connection", time: "1 hour ago", type: "config" },
                { action: "Generated quarterly report", time: "3 hours ago", type: "report" },
                { action: "Added new team member", time: "Yesterday", type: "team" },
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

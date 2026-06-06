import { Target, Lightbulb, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower organizations with practical AI solutions that drive productivity, foster innovation, and support smarter decision-making.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "A world where every business can harness the power of AI to unlock insights, automate processes, and achieve unprecedented growth.",
  },
  {
    icon: Users,
    title: "Our Approach",
    description: "We partner closely with our clients, understanding their unique challenges to deliver tailored AI solutions that create real business value.",
  },
]

const stats = [
  { value: "50+", label: "Enterprise Clients", icon: Users },
  { value: "10M+", label: "Daily Queries", icon: Zap },
  { value: "99.9%", label: "Uptime SLA", icon: Target },
  { value: "40%", label: "Productivity Gain", icon: Lightbulb },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 mb-4">
            <span style={{ color: "#003135", fontWeight: "bold" }}>About</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl text-balance">
           <span style={{ color: "#003135" }}> Transforming Businesses Through AI</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            At PravarAi Labs, we design scalable AI systems that integrate seamlessly with existing business tools, databases, and workflows.
          </p>
        </div>

        {/* Values */}
        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                <span style={{ color: "#024950", fontWeight: "bold" }}>
                  {value.title}
                </span>
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="rounded-3xl bg-[#069494] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                    <stat.icon className="h-5 w-5 text-primary group-hover:bg-[#0FA4AF] group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <p className="text-3xl font-bold text-background sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-background/70">{stat.label}</p> 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

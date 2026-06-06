import Image from "next/image"
import { Check } from "lucide-react"

const features = [
 {
  image: "/images/features/scalable-architecture.jpg",
  title: "Scalable Architecture",
  description:
    "Our AI systems are designed to scale with your business, handling millions of queries without compromising performance.",
  highlights: [
    "Auto-scaling infrastructure",
    "99.9% uptime guarantee",
    "Global edge deployment",
  ],
},
  {
    image: "/images/features/seamless-integration.jpg",
    title: "Seamless Integration",
    description: "Connect with your existing business tools, databases, and workflows without disrupting your operations.",
    highlights: [
      "200+ pre-built integrations",
      "Custom API support",
      "Real-time sync capabilities",
    ],
  },
  {
    image: "/images/features/enterprise-security.jpg",
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your sensitive data and ensure compliance with industry standards.",
    highlights: [
      "SOC 2 Type II certified",
      "End-to-end encryption",
      "Role-based access control",
    ],
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 mb-4">
            <span style={{ color: "#003135", fontWeight: "bold" }}>Features</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl text-balance">
            <span style={{ color: "#003135" }}>Built for Enterprise Scale</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need to deploy AI solutions at scale, with the security and reliability your business demands.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-16 lg:gap-20">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-primary/5 border border-border/50 group">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    <span style={{ color: "#024950", fontWeight: "bold" }}>
                      {feature.title}
                    </span>
                  </h3>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

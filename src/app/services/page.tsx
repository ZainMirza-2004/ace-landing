const serviceCategories = [
  {
    id: "ai",
    title: "AI & Data Innovation",
    services: [
      {
        name: "AI Agents",
        desc: "Autonomous systems that learn, decide, and execute within your business workflows.",
        deliverables: [
          "Conversational AI",
          "Autonomous task agents",
          "Multi-agent orchestration",
          "Human-in-the-loop systems",
        ],
      },
      {
        name: "GenAI Consulting",
        desc: "Strategic guidance on integrating generative AI into products and operations.",
        deliverables: [
          "GenAI readiness assessment",
          "Use case identification",
          "Architecture design",
          "Vendor evaluation",
        ],
      },
      {
        name: "Machine Learning Systems",
        desc: "End-to-end ML pipelines from data preparation to production deployment.",
        deliverables: [
          "Model development",
          "Feature engineering",
          "Training infrastructure",
          "Model serving",
        ],
      },
      {
        name: "Data Engineering",
        desc: "Scalable data platforms that turn raw data into actionable intelligence.",
        deliverables: [
          "Data pipelines",
          "Warehousing",
          "ETL/ELT",
          "Real-time streaming",
          "Data governance",
        ],
      },
      {
        name: "MLOps",
        desc: "Operationalize machine learning with automated, reproducible pipelines.",
        deliverables: [
          "Model versioning",
          "CI/CD for ML",
          "Monitoring & drift detection",
          "Automated retraining",
        ],
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    services: [
      {
        name: "Product Development",
        desc: "Full-cycle digital product creation from concept to market launch.",
        deliverables: [
          "Product strategy",
          "UX/UI design",
          "MVP development",
          "Iterative scaling",
        ],
      },
      {
        name: "Application Development",
        desc: "Custom web, mobile, and enterprise applications built for performance.",
        deliverables: [
          "Web applications",
          "Mobile apps",
          "API development",
          "System integrations",
        ],
      },
      {
        name: "Modernization",
        desc: "Transform legacy systems into modern, maintainable architectures.",
        deliverables: [
          "Legacy assessment",
          "Re-architecture",
          "Migration planning",
          "Incremental modernization",
        ],
      },
      {
        name: "Full-Stack Engineering",
        desc: "Versatile engineering teams delivering across the entire technology stack.",
        deliverables: [
          "Frontend engineering",
          "Backend systems",
          "Database design",
          "Infrastructure",
        ],
      },
      {
        name: "Quality Assurance",
        desc: "Comprehensive testing strategies ensuring reliability at every release.",
        deliverables: [
          "Test automation",
          "Performance testing",
          "Security testing",
          "QA strategy",
        ],
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Security",
    services: [
      {
        name: "Cloud Architecture",
        desc: "Design resilient, cost-efficient cloud infrastructure across providers.",
        deliverables: [
          "Architecture design",
          "Multi-cloud strategy",
          "Serverless solutions",
          "Containerization",
        ],
      },
      {
        name: "Migration",
        desc: "Seamless migration to cloud with zero downtime and minimal risk.",
        deliverables: [
          "Migration assessment",
          "Lift & shift",
          "Re-platforming",
          "Hybrid cloud",
        ],
      },
      {
        name: "DevOps",
        desc: "Streamlined delivery pipelines for velocity, reliability, and observability.",
        deliverables: [
          "CI/CD pipelines",
          "Infrastructure as code",
          "Monitoring",
          "Incident response",
        ],
      },
      {
        name: "Cybersecurity Consulting",
        desc: "Comprehensive security strategies protecting your digital assets.",
        deliverables: [
          "Security architecture",
          "Threat modeling",
          "Incident response planning",
          "Security training",
        ],
      },
      {
        name: "Penetration Testing",
        desc: "Identify vulnerabilities before they become breaches.",
        deliverables: [
          "Network penetration testing",
          "Web app testing",
          "Social engineering",
          "Red team exercises",
        ],
      },
      {
        name: "Compliance",
        desc: "Navigate regulatory landscapes with confidence and clarity.",
        deliverables: ["GDPR", "SOC 2", "ISO 27001", "HIPAA", "PCI DSS"],
      },
    ],
  },
  {
    id: "advisory",
    title: "Advisory & Optimization",
    services: [
      {
        name: "Software Audits",
        desc: "Comprehensive code and architecture reviews for quality and scalability.",
        deliverables: [
          "Code quality review",
          "Architecture assessment",
          "Technical debt analysis",
          "Performance audit",
        ],
      },
      {
        name: "FinOps",
        desc: "Optimize cloud spend without compromising performance.",
        deliverables: [
          "Cost analysis",
          "Resource optimization",
          "Reserved capacity planning",
          "Billing governance",
        ],
      },
      {
        name: "UX Audits",
        desc: "Evaluate and improve user experiences with data-driven insights.",
        deliverables: [
          "Usability analysis",
          "Conversion optimization",
          "Accessibility review",
          "Design system audit",
        ],
      },
      {
        name: "Process Automation",
        desc: "Eliminate manual bottlenecks with intelligent workflow automation.",
        deliverables: [
          "Workflow mapping",
          "RPA implementation",
          "Integration automation",
          "Process monitoring",
        ],
      },
      {
        name: "Support & Maintenance",
        desc: "Ongoing operational support to keep systems healthy and evolving.",
        deliverables: [
          "24/7 monitoring",
          "Bug fixes",
          "Performance tuning",
          "Feature enhancements",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-[#0f1012] pt-32 pb-24 text-center text-white md:pt-40 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <h1 className="mx-auto max-w-[760px] text-4xl leading-[0.95] font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Everything you need to build, scale, and secure.
          </h1>
          <p className="mx-auto mt-8 max-w-[540px] text-lg leading-relaxed text-white/45 md:text-xl">
            End-to-end technology services designed for ambitious organizations.
          </p>
        </div>
      </section>

      {serviceCategories.map((category, catIdx) => {
        const dark = catIdx % 2 === 1;

        return (
          <section
            key={category.id}
            className={dark ? "bg-[#0f1012] text-white" : "bg-background"}
          >
            <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
              <h2 className="mb-16 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                {category.title}
              </h2>

              <div>
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className={`border-t py-10 ${
                      dark ? "border-white/12" : "border-zinc-950/12"
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
                      <div className="lg:col-span-4">
                        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                          {service.name}
                        </h3>
                      </div>
                      <div className="lg:col-span-5">
                        <p
                          className={`text-base leading-relaxed ${
                            dark ? "text-white/52" : "text-muted-foreground"
                          }`}
                        >
                          {service.desc}
                        </p>
                      </div>
                      <div className="lg:col-span-3">
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((deliverable) => (
                            <span
                              key={deliverable}
                              className={`rounded-full px-3 py-1.5 text-xs tracking-wide ${
                                dark
                                  ? "bg-white/7 text-white/62"
                                  : "bg-zinc-950/5 text-zinc-950/62"
                              }`}
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

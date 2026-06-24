const experiences = [
  {
    company: "Indian Institute of Space Science and Technology",
    location: "Thiruvananthapuram",
    role: "Cybersecurity Intern",
    period: "July 2024",
    bullets: [
      "Studied common spoofing techniques including IP spoofing and email spoofing in real network environments.",
      "Gained foundational knowledge of threat detection strategies and basic prevention mechanisms.",
      "Completed focused internship on cybersecurity and network threat awareness at a premier research institution.",
    ],
    tags: ["Cybersecurity", "Network Security", "Threat Analysis"],
    accent: "indigo",
  },
  {
    company: "Tecfuge Business Solutions",
    location: "",
    role: "ERP Intern",
    period: "June 2025",
    bullets: [
      "Learned functional workflows of key Odoo ERP modules including Sales, Purchase, and Inventory.",
      "Gained understanding of ERP customization and database-supported automation.",
      "Assisted in ERP implementation concepts across real business process scenarios.",
    ],
    tags: ["Odoo ERP", "Database Automation", "Business Workflows"],
    accent: "violet",
  },
];

const accentMap = {
  indigo: {
    dot: "bg-indigo-500",
    tag: "bg-indigo-50 text-indigo-700",
    border: "border-indigo-200",
    line: "bg-indigo-100",
  },
  violet: {
    dot: "bg-violet-500",
    tag: "bg-violet-50 text-violet-700",
    border: "border-violet-200",
    line: "bg-violet-100",
  },
};

function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-indigo-50 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Experience</h2>
        <p className="text-center text-gray-500 mb-14">
          Where I've learned and contributed
        </p>

        <div className="relative flex flex-col gap-10">
          {/* Timeline line */}
          <div className="absolute left-3.5 top-2 bottom-2 w-px bg-gray-200" />

          {experiences.map((exp) => {
            const c = accentMap[exp.accent];
            return (
              <div key={exp.company} className="pl-10 relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-7 h-7 rounded-full ${c.dot} flex items-center justify-center`}
                >
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>

                <div
                  className={`bg-white border ${c.border} rounded-2xl p-6 flex flex-col gap-3`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                      <p className="text-indigo-600 font-medium text-sm">{exp.role}</p>
                      {exp.location && (
                        <p className="text-gray-400 text-xs mt-0.5">{exp.location}</p>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-1.5 mt-1">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed"
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${c.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
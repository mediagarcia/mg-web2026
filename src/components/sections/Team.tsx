"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Garcia",
    role: "Founder & CEO",
    bio: "15+ years in marketing automation and HubSpot strategy.",
    initials: "AG",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    name: "Maria Santos",
    role: "Director of Strategy",
    bio: "Former HubSpot employee, RevOps expert.",
    initials: "MS",
    gradient: "from-neon-purple-500 to-neon-purple-600",
  },
  {
    name: "James Chen",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in HubSpot integrations.",
    initials: "JC",
    gradient: "from-orange-red-500 to-orange-red-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Consultant",
    bio: "HubSpot certified expert with 200+ implementations.",
    initials: "ER",
    gradient: "from-teal-500 to-neon-purple-500",
  },
];

const values = [
  {
    title: "Keep Your Word",
    description: "Trust is built in follow-through. If we say it, it shows up in the system.",
  },
  {
    title: "Think in Outcomes",
    description: "We focus on results, not busywork. The goal is improvement you can feel.",
  },
  {
    title: "Have Fun",
    description: "Great work happens when teams enjoy what they do together.",
  },
  {
    title: "Act Like an Owner",
    description: "We treat your organization as if it were our own.",
  },
  {
    title: "Raise the Bar",
    description: "We hold ourselves to high standards and deliver work that lasts.",
  },
];

export function Team() {
  return (
    <section id="about" className="py-[var(--spacing-section)] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6"
          >
            The experts behind your growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/60 leading-relaxed"
          >
            A team of certified HubSpot professionals dedicated to transforming how businesses grow.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              {/* Avatar */}
              <div className={`w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-2xl lg:text-3xl font-bold text-white">{member.initials}</span>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-black mb-1">{member.name}</h3>
              <p className="text-sm text-teal-500 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-black/50 hidden lg:block">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black rounded-3xl p-8 lg:p-16"
        >
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Values
            </span>
            <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black leading-tight text-white">
              How we work with you
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

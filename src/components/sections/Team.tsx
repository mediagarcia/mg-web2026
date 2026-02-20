"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Louis Garcia",
    role: "CEO & Founder",
    bio: "15+ years building revenue systems. Personally involved in every engagement.",
    initials: "LG",
    image: "/images/team/team-member-1.jpg",
    gradient: "from-teal-500 to-teal-600",
    linkedin: "https://www.linkedin.com/in/louisgarcia/",
  },
  {
    name: "Andrew",
    role: "COO",
    bio: "Operations leader ensuring seamless delivery across every client engagement.",
    initials: "AO",
    image: "/images/team/team-member-2.jpg",
    gradient: "from-neon-purple-500 to-neon-purple-600",
  },
  {
    name: "Expert Network",
    role: "Certified Specialists",
    bio: "A curated team of certified HubSpot, Salesforce, and RevOps specialists.",
    initials: "MG",
    image: "/images/logos/mg-mark-black.png",
    gradient: "from-orange-red-500 to-orange-red-600",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
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
              <div className={`relative w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 ring-4 ring-white shadow-lg`}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-black mb-1">{member.name}</h3>
              <p className="text-sm text-teal-500 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-black/50 hidden lg:block">{member.bio}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-black/40 hover:text-teal-500 transition-colors mt-2"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
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

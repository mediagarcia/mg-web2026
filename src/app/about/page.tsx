import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner, Values } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Media Garcia | HubSpot Solutions Partner",
  description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with. Meet the team behind Media Garcia.",
};

const team = [
  {
    name: "Louis Garcia",
    role: "CEO & Founder",
    bio: "Louis founded Media Garcia with a vision to help technology companies grow through strategic HubSpot implementations. With 15+ years in digital marketing and sales operations, he leads the company's strategic direction.",
    initials: "LG",
  },
  {
    name: "Rochelle Schmidt",
    role: "Account Manager",
    bio: "Rochelle ensures every client project delivers exceptional results. She brings deep expertise in project management and client success to ensure smooth implementations.",
    initials: "RS",
  },
];

const stats = [
  { value: "200+", label: "HubSpot Implementations" },
  { value: "98%", label: "Client Retention" },
  { value: "10+", label: "Countries Served" },
  { value: "15+", label: "Years Experience" },
];

const values = [
  { title: "Keep Your Word", description: "Trust is built in follow-through. If we say it, it shows up in the system." },
  { title: "Think in Outcomes", description: "We focus on results, not busywork. The goal is improvement you can feel." },
  { title: "Have Fun", description: "Great work happens when teams enjoy what they do together." },
  { title: "Act Like an Owner", description: "We treat your organization as if it were our own." },
  { title: "Raise the Bar", description: "We hold ourselves to high standards and deliver work that lasts." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="We build digital platforms that drive growth"
        description="Media Garcia is a HubSpot Solutions Partner helping technology companies streamline operations, accelerate sales, and scale efficiently."
        breadcrumbs={[
          { label: "About", href: "/about" },
        ]}
      />

      {/* Mission */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">Our Mission</h2>
              <p className="text-xl text-black/60 leading-relaxed mb-6">
                We build and run digital platforms that keep companies lean, growing, and easy to do business with.
              </p>
              <p className="text-black/60 leading-relaxed">
                Founded with a focus on technology companies, Media Garcia brings deep expertise in HubSpot implementation, marketing automation, and revenue operations. We understand the unique challenges of selling technology—complex sales cycles, technical buyers, and the need for scalable systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-black text-teal-500">{stat.value}</p>
                  <p className="text-sm text-black/60 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Meet the Team</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 flex gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-neon-purple-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">{member.name}</h3>
                  <p className="text-teal-500 font-medium mb-3">{member.role}</p>
                  <p className="text-black/60 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">Global Reach, Local Touch</h2>
              <p className="text-black/60 leading-relaxed mb-6">
                Headquartered in Saint Paul, Minnesota, we serve clients across 10+ countries while maintaining the responsiveness and care of a boutique partner.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-black">428 Minnesota Street, Suite 500</p>
                    <p className="text-black/60">Saint Paul, MN 55101</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-bold text-black">+1 888-612-4250</p>
                    <p className="text-black/60">US & Canada toll-free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-4">Countries We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {["United States", "Canada", "United Kingdom", "Australia", "New Zealand", "India", "Sweden", "Spain", "Colombia", "Mexico"].map((country) => (
                  <span key={country} className="px-4 py-2 bg-white rounded-full text-sm text-black/70">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

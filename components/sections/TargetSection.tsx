"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, BookOpen, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TARGET_GROUPS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Briefcase,
  Rocket,
  BookOpen,
};

const colorMap: Record<string, { border: string; icon: string; bg: string; check: string }> = {
  indigo: {
    border: "hover:border-indigo-500/50",
    icon: "text-indigo-400",
    bg: "bg-indigo-400/10",
    check: "text-indigo-400",
  },
  violet: {
    border: "hover:border-violet-500/50",
    icon: "text-violet-400",
    bg: "bg-violet-400/10",
    check: "text-violet-400",
  },
  pink: {
    border: "hover:border-pink-500/50",
    icon: "text-pink-400",
    bg: "bg-pink-400/10",
    check: "text-pink-400",
  },
  emerald: {
    border: "hover:border-emerald-500/50",
    icon: "text-emerald-400",
    bg: "bg-emerald-400/10",
    check: "text-emerald-400",
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TargetSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#0D0D18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            label="대상"
            title="이런 분들을 위한 프로그램입니다"
            subtitle="입학처부터 취업, 창업, 교직원까지 — 웹 산출물이 필요한 모든 분께 맞춤 제공합니다."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TARGET_GROUPS.map((group, i) => {
            const Icon = iconMap[group.icon];
            const colors = colorMap[group.color];
            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white/5 border border-white/10 ${colors.border} rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{group.title}</h3>
                <p className="text-gray-400 text-sm mb-5">{group.description}</p>
                <ul className="space-y-2">
                  {group.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${colors.check}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

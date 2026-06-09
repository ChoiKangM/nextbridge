"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Link2, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

const values = [
  {
    icon: Globe,
    title: "독점적 차별화",
    description:
      "PDF나 PPT는 누구나 만든다. 나만의 웹사이트는 즉시 당신을 차별화합니다.",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
  {
    icon: Link2,
    title: "즉시 공유 가능",
    description:
      "링크 하나로 채용담당자, 교수님, 투자자에게 전달. 스마트폰으로 바로 확인 가능합니다.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Sparkles,
    title: "AI 코딩으로 실현 가능",
    description:
      "코딩 경험이 전혀 없어도 AI와 함께라면 4주 안에 실제 웹사이트를 만들 수 있습니다.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ValueSection() {
  return (
    <section id="program" className="py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            label="왜 웹 산출물인가"
            title="웹사이트가 만들어내는 차이"
            subtitle="같은 스펙, 같은 경험이라도 어떻게 보여주느냐에 따라 결과가 달라집니다."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-white/10"
        >
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { OUTCOMES, OUTCOME_TYPE_COLORS } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-24 bg-[#0D0D18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            label="결과물"
            title="수강생이 만든 실제 결과물"
            subtitle="코딩 경험 없이도 4주 만에 이런 웹사이트를 만들 수 있습니다."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map((outcome, i) => (
            <motion.div
              key={outcome.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Placeholder visual */}
              <div
                className={`h-44 bg-gradient-to-br ${outcome.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative text-white text-center px-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-2 backdrop-blur-sm" />
                  <p className="text-xs text-white/70">{outcome.university}</p>
                </div>
              </div>

              <div className="p-5">
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${
                    OUTCOME_TYPE_COLORS[outcome.type] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {outcome.type}
                </span>
                <h3 className="font-semibold text-white mb-1">{outcome.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{outcome.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          * 실제 수강생 결과물로 업데이트됩니다
        </motion.p>
      </div>
    </section>
  );
}

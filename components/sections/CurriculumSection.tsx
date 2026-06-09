"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, Target, Package } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CURRICULUM_WEEKS } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CurriculumSection() {
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            label="커리큘럼"
            title="4주 완성 프로그램"
            subtitle="처음부터 배포까지, 4주 안에 실제 웹사이트를 완성합니다."
            light
          />
        </motion.div>

        <div className="space-y-4">
          {CURRICULUM_WEEKS.map((week, i) => (
            <motion.div
              key={week.week}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenWeek(openWeek === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center text-sm font-bold shrink-0">
                    {week.week}주
                  </span>
                  <span className="font-semibold text-gray-900">{week.title}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openWeek === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openWeek === i && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-600 text-sm mt-4 leading-relaxed mb-5">{week.goal}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        주요 내용
                      </p>
                      <ul className="space-y-1.5">
                        {week.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-indigo-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="w-4 h-4 text-indigo-600" />
                        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                          이번 주 산출물
                        </p>
                      </div>
                      <p className="text-sm font-medium text-indigo-800">{week.deliverable}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 text-center">
            사용 도구
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Claude Code", "Cursor", "v0.dev", "Vercel", "GitHub"].map((tool) => (
              <span
                key={tool}
                className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

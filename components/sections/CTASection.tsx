"use client";

import { motion, type Variants } from "framer-motion";
import QRCode from "react-qr-code";
import { SITE_URL } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-[#0A0A0F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600 animate-gradient p-10 sm:p-14"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Text content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                지금 바로 시작하세요
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-md leading-relaxed">
                바이브코딩으로 만든 웹사이트 하나가<br />
                당신의 커리어를 완전히 바꿉니다.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <a
                  href="mailto:contact@nextbridge.kr"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  무료 상담 신청하기
                </a>
                <a
                  href="mailto:contact@nextbridge.kr?subject=단체신청"
                  className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:border-white hover:bg-white/10 transition-colors"
                >
                  단체·기관 문의
                </a>
              </div>
            </div>

            {/* QR Code */}
            <div className="shrink-0">
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow-xl">
                <QRCode value={SITE_URL} size={140} />
                <p className="text-xs text-gray-500 font-medium text-center">
                  스마트폰으로 바로 접속
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

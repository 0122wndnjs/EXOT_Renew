import React from "react";
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen overflow-hidden text-white bg-gradient-to-b from-[#1a0f00] via-[#2c1400] to-[#4b1a00] flex items-center"
    >
      {/* ==== 배경 이미지 ==== */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/heroimage.png')" }}
        initial={{ opacity: 0, scale: 1.1, y: 40 }}
        animate={{ opacity: 0.8, scale: 1, y: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />

      {/* ==== 중앙 컨테이너 (헤더처럼 75% 폭 고정) ==== */}
      <div className="w-full md:max-w-[75%] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* ==== 좌측 텍스트 ==== */}
        <div className="flex-1 max-w-2xl text-left py-16 md:py-0">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-500 drop-shadow-[0_0_25px_rgba(255,165,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Bridging Science
            <br />
            and Investment
          </motion.h1>

          <motion.p
            className="mt-6 text-base md:text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            EXOT was built to solve biotech’s greatest challenge — the{" "}
            <span className="text-orange-400 font-semibold">“Valley of Death.”</span>{" "}
            By combining <span className="text-yellow-300 font-semibold">DeSci transparency</span>{" "}
            with <span className="text-yellow-300 font-semibold">RWA-backed stability</span>, EXOT
            transforms early-stage biotech investment into a{" "}
            <span className="text-orange-400 font-semibold">new digital asset class.</span>
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#what-is-exot"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-medium shadow-lg hover:opacity-90 transition"
            >
              Read Whitepaper
            </a>
            <a
              href="#token"
              className="px-8 py-3 rounded-xl border border-orange-400/60 text-orange-300 font-medium hover:bg-orange-500/10 transition"
            >
              Token Model
            </a>
          </motion.div>
        </div>

        {/* ==== 우측 이미지 ==== */}
        <motion.div
          className="flex-1 w-full md:w-[45%] h-[300px] md:h-[500px] mt-12 md:mt-0 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="/images/exot_visual.webp"
            alt="EXOT Visual"
            className="w-[90%] md:w-full object-contain drop-shadow-[0_0_35px_rgba(255,140,0,0.25)]"
          />
        </motion.div>
      </div>

      {/* ==== 하단 빛나는 라인 ==== */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      />
    </section>
  );
};

export default Intro;

import React from "react";
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen overflow-hidden text-white bg-gradient-to-r from-[#FF8C1A] via-[#E65C1C] to-[#DC3E1C] flex items-center"
    >
      {/* ==== 배경 이미지 ==== */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/bgmain2.png')" }}
        initial={{ opacity: 0, scale: 1.1, y: 40 }}
        animate={{ opacity: 1.0, scale: 1, y: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-black/20"></div>

      {/* ==== 중앙 컨테이너 ==== */}
      <div className="w-full md:max-w-[75%] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* ==== 좌측 텍스트 ==== */}
        <div className="flex-1 max-w-2xl text-left py-16 md:py-0">
          {/* 메인 타이틀 */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-amber-200 drop-shadow-[0_0_25px_rgba(255,165,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The EXOT Protocol
          </motion.h1>

          {/* 부제 */}
          <motion.h2
            className="mt-4 text-lg md:text-2xl font-semibold text-amber-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            A Hybrid DeSci and RWA Investment Platform
          </motion.h2>

          {/* 설명문 */}
          <motion.p
            className="mt-6 text-base md:text-lg text-white leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            An innovative investment platform that combines the transparency of{" "}
            <span className="text-yellow-200 font-semibold">
              Decentralized Science (DeSci)
            </span>{" "}
            with the stability of{" "}
            <span className="text-amber-200 font-semibold">
              Real-World Assets (RWA)
            </span>
          </motion.p>

          {/* ✅ 버튼 (모바일에서 중앙 정렬) */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="https://exot.gitbook.io/exot-whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 
                text-black font-medium shadow-lg hover:opacity-90 transition 
                w-full sm:w-auto text-center mx-auto sm:mx-0
              "
            >
              WHITEPAPER
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

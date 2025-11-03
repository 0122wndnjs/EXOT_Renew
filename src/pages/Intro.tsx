import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const logos = [
  "/exot_logo.webp",
  "/partner1_logo.webp",
  "/partner2_logo.webp",
  "/partner3_logo.webp",
  "/partner4_logo.webp",
  "/partner5_logo.webp",
];

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

      {/* ==== 중앙 컨테이너 ==== */}
      <div className="w-full md:max-w-[75%] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* ==== 좌측 텍스트 ==== */}
        <div className="flex-1 max-w-2xl text-left py-16 md:py-0">
          {/* 메인 타이틀 */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-500 drop-shadow-[0_0_25px_rgba(255,165,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The EXOT Protocol
          </motion.h1>

          {/* 부제 */}
          <motion.h2
            className="mt-4 text-lg md:text-2xl font-semibold text-yellow-300/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            A Hybrid DeSci and RWA Investment Platform
          </motion.h2>

          {/* 설명문 */}
          <motion.p
            className="mt-6 text-base md:text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            An innovative investment platform that combines the transparency of{" "}
            <span className="text-yellow-300 font-semibold">
              Decentralized Science (DeSci)
            </span>{" "}
            with the stability of{" "}
            <span className="text-orange-400 font-semibold">
              Real-World Assets (RWA)
            </span>
          </motion.p>

          {/* 버튼 */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="https://exot.gitbook.io/exot-whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-medium shadow-lg hover:opacity-90 transition"
            >
              WHITEPAPER
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

      {/* ==== 하단 라인 ==== */}
      <motion.div
        className="absolute bottom-[80px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      />

      {/* ==== 하단 Marquee ==== */}
      <div className="absolute bottom-2 left-0 w-full h-[60px] bg-transparent flex items-center">
        <Marquee gradient={false} speed={60} pauseOnHover className="w-full">
          {logos.concat(logos).map((src, i) => (
            <div key={i} className="flex items-center justify-center mx-12">
              <img
                src={src}
                alt={`Partner ${i}`}
                className="h-[40px] md:h-[45px] object-contain opacity-85 transition-all duration-500 hover:opacity-100 hover:scale-105
                           filter grayscale sepia-[0.6] hue-rotate-[30deg] saturate-[1.8] brightness-[1.25]
                           hover:grayscale-0 hover:sepia-0 hover:hue-rotate-0 hover:saturate-100 hover:brightness-100"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Intro;

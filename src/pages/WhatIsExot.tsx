import { FiSearch, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import { GiMicroscope } from "react-icons/gi";
import { motion } from "framer-motion";

const WhatIsExot = () => {
  const steps = [
    {
      icon: (
        <FiSearch className="text-orange-400 text-5xl drop-shadow-[0_0_12px_rgba(255,200,100,0.4)]" />
      ),
      step: "Deal Sourcing",
      activity:
        "Receiving investment proposals from promising biotech startups worldwide",
      entity: "-",
    },
    {
      icon: (
        <GiMicroscope className="text-orange-400 text-5xl drop-shadow-[0_0_12px_rgba(255,200,100,0.4)]" />
      ),
      step: "In-Depth Due Diligence",
      activity: "Technical evaluation, data analysis, hypothesis testing",
      entity: "Scientific Advisory Board (SAB), EXOT Agents (AI Tool)",
    },
    {
      icon: (
        <FiCheckCircle className="text-orange-400 text-5xl drop-shadow-[0_0_12px_rgba(255,200,100,0.4)]" />
      ),
      step: "Final Decision",
      activity: "On-chain governance voting based on the due diligence report",
      entity: "EXOT Token Holders (DAO Community)",
    },
    {
      icon: (
        <FiTrendingUp className="text-orange-400 text-5xl drop-shadow-[0_0_12px_rgba(255,200,100,0.4)]" />
      ),
      step: "Growth Support",
      activity: "Supporting investee growth and monitoring milestones",
      entity: "EXOT (Strategic Investor), On-chain Record System",
    },
  ];

  return (
    <section className="relative w-full min-h-screen text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C1A] via-[#E65C1C] to-[#DC3E1C]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08),_transparent_70%)]" />

      <div className="relative w-full lg:max-w-[75%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-20 z-10">
        {/* ===== 왼쪽: MISSION ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 lg:w-1/2 flex flex-col justify-center text-left max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#fff5e0] to-[#ffe2a0] drop-shadow-[0_0_25px_rgba(255,220,120,0.4)]">
            MISSION
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            "To create a world where all innovative ideas that contribute to the
            advancement of human health can be realized, free from the barriers
            of capital."
          </p>
        </motion.div>

        {/* ===== 오른쪽: 영상 + 단계 프로세스 ===== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 lg:w-1/2 flex flex-col items-center gap-10 w-full max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full aspect-video bg-black/40 rounded-2xl overflow-hidden border border-yellow-300/30 shadow-[0_0_25px_rgba(255,200,120,0.2)]"
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/_Jg6AVNqh1U?rel=0"
              title="EXOT Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </motion.div>

          {/* 섹션 타이틀 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full text-center mt-4 mb-2"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5e0] to-[#ffe2a0] drop-shadow-[0_0_15px_rgba(255,210,100,0.3)]">
              EXOT Platform Operation Process
            </h3>
            <p className="text-white/80 mt-2 text-base md:text-lg italic">
              Innovative Biotech Investment Journey
            </p>
          </motion.div>

          {/* ✅ 단계 리스트 (노란 그라데이션 카드로 변경) */}
          <div className="flex flex-col gap-6 w-full">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 * i }}
                viewport={{ once: true }}
                className="
                  flex items-start gap-6 
                  rounded-2xl p-8 
                  bg-gradient-to-br from-[#FFF4C2]/80 via-[#FFE08A]/70 to-[#FFCA61]/70
                  border border-yellow-300/30 
                  backdrop-blur-sm
                  shadow-[0_0_20px_rgba(255,220,150,0.2)]
                  hover:shadow-[0_0_40px_rgba(255,230,160,0.45)]
                  transition-all duration-300
                "
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  {item.icon}
                </motion.div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-[#7a3b00] mb-3">
                    {item.step}
                  </h3>
                  <p className="text-[#4a2a00]/90 text-base leading-relaxed mb-3">
                    {item.activity}
                  </p>
                  <p className="text-[#7a4a00]/80 text-sm font-medium">
                    {item.entity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsExot;

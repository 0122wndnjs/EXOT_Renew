import { motion } from "framer-motion";

const Exosome = () => {
  const areas = [
    {
      title: "Oncology (Cancer Treatment)",
      weight: "35%",
      desc: "Targeted anti-cancer drug delivery system, significantly reducing side effects and maximizing efficacy compared to chemotherapy.",
    },
    {
      title: "Regenerative Medicine",
      weight: "28%",
      desc: "Exosomes derived from stem cells accelerate tissue regeneration and wound healing (Anti-aging applications included).",
    },
    {
      title: "Neurological Disorders",
      weight: "22%",
      desc: "Unique ability to cross the Blood-Brain Barrier (BBB), enabling treatments for brain diseases (Alzheimer's, Parkinson's).",
    },
    {
      title: "Diagnostic Tools",
      weight: "15%",
      desc: "Liquid Biopsy technology analyzing exosomes for early disease detection and recurrence monitoring.",
    },
  ];

  return (
    <section className="relative w-full min-h-[100vh] bg-[#120a00] text-white flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#2c1400] to-[#120a00] opacity-90"></div>

      {/* 제목 */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_25px_rgba(255,150,50,0.3)] mb-4">
          Exosome Technology
        </h2>
        <p className="text-white/80 text-base md:text-lg">
          Key Investment Areas in Advanced Biotech Applications
        </p>
      </div>

      {/* 2x2 카드 + 중앙 원 */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-16 md:gap-x-60 md:gap-y-32 max-w-6xl">
        {areas.map((area, i) => {
          // 카드별 등장 방향 설정 (왼쪽/오른쪽에서 슬라이드)
          const isLeft = i % 2 === 0; // 짝수 index는 왼쪽, 홀수는 오른쪽
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="bg-[#1f1200]/90 border border-orange-400/30 rounded-2xl p-6 md:p-8 shadow-[0_0_25px_rgba(255,180,80,0.2)] hover:shadow-[0_0_40px_rgba(255,180,80,0.4)] transition-all duration-300 text-center"
            >
              <h3 className="text-lg md:text-xl font-semibold text-orange-300 mb-1">
                {area.title}
              </h3>
              <p className="text-yellow-400 font-semibold mb-2">{area.weight}</p>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          );
        })}

        {/* 중앙 원 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-black font-extrabold text-center text-lg md:text-2xl shadow-[0_0_50px_rgba(255,180,80,0.5)]"
        >
          Exosome
          <br />
          Technology
        </motion.div>
      </div>
    </section>
  );
};

export default Exosome;

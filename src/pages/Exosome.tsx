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
    <section className="relative w-full py-24 px-6 bg-gradient-to-r from-[#FF8C1A] via-[#E65C1C] to-[#DC3E1C] text-white overflow-hidden">

      {/* 라이트 효과 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />

      {/* 제목 */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5e0] to-[#ffe2a0] drop-shadow-[0_0_25px_rgba(255,220,120,0.4)]">
          Exosome Technology
        </h2>
        <p className="mt-4 text-white/90 text-base md:text-lg">
          Key Investment Areas in Advanced Biotech Applications
        </p>
      </div>

      {/* ✅ 카드 레이아웃 (단순 & 깔끔) */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {areas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="
              rounded-2xl p-6 text-center 
              bg-gradient-to-br from-[#FFF4C2]/80 via-[#FFE08A]/70 to-[#FFCA61]/70
              border border-yellow-300/30 backdrop-blur-sm 
              shadow-[0_0_25px_rgba(255,220,150,0.25)]
              hover:shadow-[0_0_45px_rgba(255,230,160,0.55)]
              transition-all duration-300
            "
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#7a3b00]">
              {area.title}
            </h3>

            <p className="text-[#8a4a00] font-semibold mt-2">
              {area.weight}
            </p>

            <p className="text-[#4a2a00]/90 text-sm md:text-base mt-3 leading-relaxed">
              {area.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Exosome;

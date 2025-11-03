import { motion } from "framer-motion";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1 (Q4 2025 - Q2 2026)",
      subtitle: "Foundation Building",
      description:
        "Establish the EXOT Foundation, secure seed funding, and set up tokenomics and governance structure.",
    },
    {
      title: "Phase 2 (Q3 2026 - Q1 2027)",
      subtitle: "MVP Development & First Investment",
      description:
        "Develop MVP and execute the first investment in a biotech (exosome) company.",
    },
    {
      title: "Phase 3 (Q2 2027 - Q4 2027)",
      subtitle: "Mainnet Launch & Token Generation Event (TGE)",
      description:
        "Launch EXOT mainnet, execute TGE, and list on top-tier exchanges.",
    },
    {
      title: "Phase 4 (2028 - 2029)",
      subtitle: "Ecosystem Expansion",
      description:
        "Diversify portfolio and expand partnerships across biotech and DeSci sectors.",
    },
    {
      title: "Phase 5 (2030 and Beyond)",
      subtitle: "Full Decentralization",
      description:
        "Transition EXOT governance to a fully autonomous DAO and launch the decentralized data marketplace.",
    },
  ];

  return (
    <section className="relative w-full bg-[#120a00] text-white py-24 px-6 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#2c1400] to-[#120a00] opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* ===== 좌측 영역 (텍스트) ===== */}
        <div className="md:w-1/3 text-center md:text-left flex flex-col justify-start">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_25px_rgba(255,150,50,0.3)] mb-4">
            Roadmap
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
            The EXOT roadmap outlines our phased journey — from foundation to
            full decentralization — combining biotech innovation with blockchain
            transparency.
          </p>
          <p className="text-yellow-400 text-sm md:text-base italic">
            “Building the decentralized future of biotechnology.”
          </p>
        </div>

        {/* ===== 우측 영역 (타임라인) ===== */}
        <div className="md:w-2/3 relative flex flex-col items-start">
          {/* 중앙 세로 라인 */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 to-yellow-400 opacity-40"></div>

          <div className="relative flex flex-col gap-16 md:gap-24 w-full">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* ✅ 타임라인 점 (정중앙 완벽 정렬) */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-5 rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 shadow-[0_0_25px_rgba(255,200,100,0.8)] z-10"
                ></div>

                {/* 카드 */}
                <div className="bg-[#1f1200]/90 border border-orange-400/30 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(255,160,60,0.15)] hover:shadow-[0_0_40px_rgba(255,180,80,0.3)] transition-all duration-500">
                  <h3 className="text-lg md:text-xl font-bold text-orange-300 mb-1">
                    {phase.title}
                  </h3>
                  <h4 className="text-base md:text-lg text-yellow-400 font-semibold mb-3">
                    {phase.subtitle}
                  </h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

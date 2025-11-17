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
    <section className="relative w-full text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C1A] via-[#E65C1C] to-[#DC3E1C] opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08),_transparent_70%)]" />

      <img
        src="/images/roadmap_flow.png"
        alt="Roadmap Flow Decoration"
        className="
          hidden md:block
          absolute
          bottom-[-40px]
          left-[-60px]
          w-[1050px]
          opacity-20
          invert
          brightness-200
          pointer-events-none
          select-none
          z-0
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3 text-center md:text-left flex flex-col justify-start">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5e0] to-[#ffe2a0] drop-shadow-[0_0_25px_rgba(255,220,120,0.4)] mb-4">
            Roadmap
          </h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
            The EXOT roadmap outlines our phased journey — from foundation to
            full decentralization — combining biotech innovation with blockchain
            transparency.
          </p>
          <p className="text-yellow-100 text-sm md:text-base italic">
            “Building the decentralized future of biotechnology.”
          </p>
        </div>

        <div className="md:w-2/3 relative flex flex-col items-start">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-300 via-orange-300 to-yellow-100 opacity-60"></div>

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
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-5 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 z-10"></div>

                <div className="
                  bg-gradient-to-br from-[#FFF4C2]/80 via-[#FFE08A]/70 to-[#FFCA61]/70
                  backdrop-blur-sm 
                  border border-yellow-300/30 
                  rounded-2xl 
                  p-6 md:p-8 
                  shadow-[0_0_25px_rgba(255,220,150,0.25)]
                ">
                  <h3 className="text-lg md:text-xl font-bold text-[#7a3b00] mb-1">
                    {phase.title}
                  </h3>
                  <h4 className="text-base md:text-lg text-[#8a4a00] font-semibold mb-3">
                    {phase.subtitle}
                  </h4>
                  <p className="text-[#4a2a00] text-sm md:text-base leading-relaxed">
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

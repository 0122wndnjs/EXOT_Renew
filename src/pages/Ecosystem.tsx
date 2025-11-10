import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiTrendingUp,
  FiDollarSign,
  FiDatabase,
  FiShield,
} from "react-icons/fi";

const Ecosystem = () => {
  const participants = [
    {
      icon: (
        <FiUsers className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />
      ),
      stakeholder: "Bio Company",
      role: "Develop innovative drug technologies, core value creators for the ecosystem.",
      incentive:
        "Stable capital funding, global feedback & support, and business development assistance via the EXOT network.",
    },
    {
      icon: (
        <FiDollarSign className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />
      ),
      stakeholder: "Investor / RWA Holder",
      role: "Supply capital to the platform and share risk/reward from company growth.",
      incentive:
        "Access to promising early-stage biotech investments, high capital gain potential, flexible liquidity via tokenized equity.",
    },
    {
      icon: (
        <FiTrendingUp className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />
      ),
      stakeholder: "EXOT Holder / DAO Member",
      role: "Stake EXOT tokens and participate in governance (investment, policy, etc.).",
      incentive:
        "Staking rewards from platform revenue and token appreciation through ecosystem growth.",
    },
    {
      icon: (
        <FiDatabase className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />
      ),
      stakeholder: "Scientific Advisory Board (SAB)",
      role: "Verify technical validity of candidates and prepare due diligence reports.",
      incentive:
        "Professional fees, recognition from successful commercialization, and success fees via stock options.",
    },
    {
      icon: (
        <FiShield className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />
      ),
      stakeholder: "EXOT Foundation",
      role: "Ensure protocol operation, partnerships, and transition to DAO governance.",
      incentive:
        "Non-profit organization focusing on sustainable ecosystem growth and mission fulfillment.",
    },
  ];

  const revenues = [
    {
      title: "Platform Fee",
      desc: "Charged to bio companies upon successful funding",
      rate: "5–7%",
      feature: "Competitive with traditional IB fees.",
    },
    {
      title: "Carried Interest",
      desc: "Charged on returns exceeding the principal",
      rate: "15–20%",
      feature: "Core income for DAO Treasury.",
    },
    {
      title: "Secondary Trading Fee",
      desc: "Fee for authorized RWA token trading",
      rate: "0.1–0.25%",
      feature: "Provides continuous cash flow.",
    },
    {
      title: "Buy-Back",
      desc: "Used for EXOT token buy-back",
      rate: "10–50%",
      feature: "Supports long-term value growth.",
    },
    {
      title: "Data Service",
      desc: "Sale of anonymized clinical & investment data",
      rate: "-",
      feature: "Potential long-term revenue stream.",
    },
  ];

  const [flipped, setFlipped] = useState(Array(participants.length).fill(false));

  const handleFlip = (i: number) =>
    setFlipped((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section className="relative w-full text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C1A] via-[#E65C1C] to-[#DC3E1C] opacity-95"></div>

      {/* ===== Participants Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full md:max-w-[75%] mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5e0] to-[#ffe2a0] mb-10 drop-shadow-[0_0_25px_rgba(255,220,120,0.4)]"
        >
          EXOT Ecosystem Participants
        </motion.h2>

        {/* Participants Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 justify-center">
          {participants.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => handleFlip(i)}
              className="relative mx-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative w-80 h-52 md:w-64 md:h-80 preserve-3d transition-transform duration-100"
                animate={{ rotateY: flipped[i] ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center 
                  rounded-2xl p-6 shadow-lg backface-hidden
                  bg-gradient-to-br from-[#FFF4C2]/80 via-[#FFE08A]/70 to-[#FFCA61]/70 
                  border border-yellow-300/30 backdrop-blur-sm"
                >
                  {item.icon}
                  <h3 className="text-lg sm:text-xl font-bold text-[#7a3b00] mt-4 mb-2">
                    {item.stakeholder}
                  </h3>
                  <p className="text-[#4a2a00]/90 text-xs sm:text-sm px-1 leading-relaxed">
                    {item.role}
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center
                  bg-gradient-to-b from-[#FFD580]/90 to-[#FF9F40]/80 
                  border border-yellow-300/30 rounded-2xl p-6 text-black shadow-lg 
                  rotate-y-180 backface-hidden"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#7a3b00] mb-3">
                    Incentives
                  </h3>
                  <p className="text-[#402000] text-xs sm:text-sm leading-relaxed px-1">
                    {item.incentive}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== Business Model ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full md:max-w-[90%] mx-auto text-center mt-32"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5e0] to-[#ffe2a0] mb-6">
          Business Model
        </h2>

        <p className="text-white/90 max-w-4xl mx-auto mb-16">
          The EXOT platform utilizes a diversified revenue model designed to continuously
          strengthen ecosystem growth and long-term sustainability.
        </p>

        {/* DAO Treasury */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto mb-20 bg-gradient-to-b from-yellow-300 to-orange-300
          text-black p-10 rounded-3xl shadow-[0_0_60px_rgba(255,220,150,0.7)]"
        >
          <h3 className="text-3xl font-extrabold">DAO Treasury</h3>
          <p className="mt-3 text-black/80 font-medium leading-relaxed">
            All ecosystem revenue flows into the DAO Treasury
            for reinvestment, growth, and long-term reinforcement.
          </p>
        </motion.div>

        {/* Revenue Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {revenues.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="
                rounded-2xl p-8 text-center 
                bg-gradient-to-br from-[#FFF4C2]/80 via-[#FFE08A]/70 to-[#FFCA61]/70
                border border-yellow-300/30 backdrop-blur-sm 
                shadow-[0_0_25px_rgba(255,220,150,0.25)]
                hover:shadow-[0_0_45px_rgba(255,230,160,0.55)]
                transition-all duration-300
              "
            >
              <h4 className="text-[#7a3b00] font-semibold text-lg mb-3">
                {rev.title}
              </h4>
              <p className="text-[#4a2a00]/90 text-sm mb-2">{rev.desc}</p>
              <p className="text-[#8a4a00] text-sm font-semibold mb-2">
                Rate: {rev.rate}
              </p>
              <p className="text-[#4a2a00]/80 text-xs italic leading-relaxed">
                {rev.feature}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Ecosystem;

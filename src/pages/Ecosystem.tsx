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
      icon: <FiUsers className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />,
      stakeholder: "Bio Company",
      role: "Develop innovative drug technologies, core value creators for the ecosystem.",
      incentive:
        "Stable capital funding, global feedback & support, and business development assistance via the EXOT network.",
    },
    {
      icon: <FiDollarSign className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />,
      stakeholder: "Investor / RWA Holder",
      role: "Supply capital to the platform and share risk/reward from company growth.",
      incentive:
        "Access to promising early-stage biotech investments, high capital gain potential, flexible liquidity via tokenized equity.",
    },
    {
      icon: <FiTrendingUp className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />,
      stakeholder: "EXOT Holder / DAO Member",
      role: "Stake EXOT tokens and participate in governance.",
      incentive:
        "Staking rewards from platform revenue and token appreciation.",
    },
    {
      icon: <FiDatabase className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />,
      stakeholder: "Scientific Advisory Board (SAB)",
      role: "Verify technical validity and prepare due diligence reports.",
      incentive:
        "Professional fees and recognition from successful commercialization.",
    },
    {
      icon: <FiShield className="text-yellow-200 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,220,100,0.4)]" />,
      stakeholder: "EXOT Foundation",
      role: "Ensure protocol operation, partnerships, and DAO transition.",
      incentive:
        "Focus on sustainable ecosystem growth.",
    },
  ];

  return (
    <section className="relative w-full text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C1A] via-[#E65C1C] to-[#DC3E1C] opacity-95"></div>

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
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5e0] to-[#ffe2a0] mb-10"
        >
          EXOT Ecosystem Participants
        </motion.h2>

        {/* ✅ 플립 대신 단일 카드 구조 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 justify-center">
          {participants.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="
                w-80 md:w-64 
                bg-gradient-to-br from-[#FFF4C2]/80 via-[#FFE08A]/70 to-[#FFCA61]/70
                border border-yellow-300/30 backdrop-blur-sm 
                rounded-2xl shadow-lg 
                p-6 mx-auto cursor-default
                hover:shadow-[0_0_45px_rgba(255,230,160,0.5)]
                transition-all duration-300
              "
            >
              {/* 아이콘 */}
              <div className="flex justify-center mb-4">{item.icon}</div>

              {/* 타이틀 */}
              <h3 className="text-lg sm:text-xl font-bold text-[#7a3b00] mb-2">
                {item.stakeholder}
              </h3>

              {/* 주요 역할 */}
              <p className="text-[#4a2a00]/90 text-xs sm:text-sm leading-relaxed mb-4">
                {item.role}
              </p>

              {/* 구분선 */}
              <div className="w-full h-px bg-yellow-300/40 my-3"></div>

              {/* Incentive 섹션 */}
              <h4 className="text-sm font-semibold text-[#7a3b00] mb-1">
                Incentives
              </h4>
              <p className="text-[#402000] text-xs sm:text-sm leading-relaxed">
                {item.incentive}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Ecosystem;

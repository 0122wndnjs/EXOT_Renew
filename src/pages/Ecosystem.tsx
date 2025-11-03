import { useState, useRef, useEffect } from "react";
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
        <FiUsers className="text-orange-400 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />
      ),
      stakeholder: "Bio Company",
      role: "Develop innovative drug technologies, core value creators for the ecosystem.",
      incentive:
        "Stable capital funding, global feedback & support, and business development assistance via the EXOT network.",
    },
    {
      icon: (
        <FiDollarSign className="text-orange-400 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />
      ),
      stakeholder: "Investor / RWA Holder",
      role: "Supply capital to the platform and share risk/reward from company growth.",
      incentive:
        "Access to promising early-stage biotech investments, high capital gain potential, flexible liquidity via tokenized equity.",
    },
    {
      icon: (
        <FiTrendingUp className="text-orange-400 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />
      ),
      stakeholder: "EXOT Holder / DAO Member",
      role: "Stake EXOT tokens and participate in governance (investment, policy, etc.).",
      incentive:
        "Staking rewards from platform revenue and token appreciation through ecosystem growth.",
    },
    {
      icon: (
        <FiDatabase className="text-orange-400 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />
      ),
      stakeholder: "Scientific Advisory Board (SAB)",
      role: "Verify technical validity of candidates and prepare due diligence reports.",
      incentive:
        "Professional fees, recognition from successful commercialization, and success fees via stock options.",
    },
    {
      icon: (
        <FiShield className="text-orange-400 text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />
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
      rate: "5–7% of total funding amount",
      feature:
        "Competitive with traditional IB fees; covers deal sourcing, due diligence, and support",
    },
    {
      title: "Carried Interest",
      desc: "Charged on returns exceeding the principal when portfolio companies exit (Exit)",
      rate: "15–20% of the excess return",
      feature: "Lower than VC fees (20–25%), core income for DAO Treasury",
    },
    {
      title: "Secondary Trading Fee",
      desc: "Charged on RWA token transactions in authorized secondary exchanges",
      rate: "0.1–0.25% of transaction value",
      feature: "Provides continuous cash flow to the platform",
    },
    {
      title: "Buy-Back",
      desc: "Executed on returns exceeding the principal from portfolio success",
      rate: "10–50% of the excess return",
      feature: "EXOT token buy-back supports stability & long-term growth",
    },
    {
      title: "Data Service",
      desc: "Subscription-based sale of anonymized clinical and investment data",
      rate: "-",
      feature:
        "Potential long-term revenue stream (Pharma, research, asset managers)",
    },
  ];

  const [flipped, setFlipped] = useState(
    Array(participants.length).fill(false)
  );
  const handleFlip = (i: number) =>
    setFlipped((prev) => prev.map((f, idx) => (idx === i ? !f : f)));

  const circleRef = useRef<SVGCircleElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!circleRef.current) return;
    const circle = circleRef.current;
    const length = circle.getTotalLength();
    const step = length / revenues.length;
    const pts = revenues.map((_, i) => circle.getPointAtLength(i * step));
    setPositions(pts.map((p) => ({ x: p.x, y: p.y })));
  }, []);

  return (
    <section className="relative w-full bg-[#120a00] text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#2c1400] to-[#120a00] opacity-90"></div>
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
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-6 sm:mb-10"
        >
          EXOT Ecosystem Participants
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white/70 text-sm sm:text-base md:text-lg italic mb-12 sm:mb-16"
        >
          Roles and Incentives across the EXOT ecosystem
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 sm:gap-8 justify-center">
          {participants.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.15 * i, // 카드 하나씩 순차적으로 등장
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative mx-auto cursor-pointer"
              onClick={() => handleFlip(i)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative w-80 h-52 md:w-64 md:h-80 preserve-3d transition-transform duration-100"
                animate={{ rotateY: flipped[i] ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1f1200]/90 border border-orange-400/30 rounded-2xl p-6 shadow-md backface-hidden hover:shadow-[0_0_25px_rgba(255,150,50,0.3)] transition-all">
                  {item.icon}
                  <h3 className="text-lg sm:text-xl font-bold text-orange-300 mt-3 sm:mt-4 mb-1 sm:mb-2">
                    {item.stakeholder}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed px-1">
                    {item.role}
                  </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#2a1800] to-[#1f1200] border border-orange-400/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,150,50,0.2)] rotate-y-180 backface-hidden">
                  <h3 className="text-base sm:text-lg font-semibold text-yellow-300 mb-2 sm:mb-3">
                    Incentives
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    {item.incentive}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* === Business Model === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full md:max-w-[90%] mx-auto text-center mt-32"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-6">
          Business Model:
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-200 mb-6">
          A Sustainable Revenue Generation Structure
        </h3>
        <p className="text-white max-w-7xl mx-auto mb-12 md:mb-32">
          The EXOT platform has designed a diversified revenue model to
          continuously enhance the growth and value of the ecosystem.
        </p>

        {/* 중앙 원형 구조 (PC에서만 활성화) */}
        <div className="relative hidden md:block w-[800px] h-[800px] mx-auto">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
          >
            <circle ref={circleRef} cx="400" cy="400" r="360" fill="none" />
          </svg>

          {/* 중앙 DAO Treasury */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-64 h-64 rounded-full -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-yellow-400 text-black font-bold shadow-[0_0_80px_rgba(255,200,80,0.7)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-extrabold mb-2">DAO Treasury</h3>
            <p className="text-sm text-black/80 font-medium px-6 text-center leading-snug">
              All Revenue Returns Here
              <br />
              for Ecosystem Reinvestment
            </p>
          </motion.div>

          {/* 외곽 카드 5개 */}
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-[#1f1200] border border-orange-400/30 p-5 rounded-2xl shadow-[0_0_25px_rgba(255,180,80,0.3)] hover:bg-[#2a1800]/90 hover:border-orange-400 hover:shadow-[0_0_40px_rgba(255,180,80,0.6)] flex flex-col justify-center items-center text-center transition-all -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
            >
              <h4 className="text-orange-300 font-semibold text-lg mb-2">
                {revenues[i].title}
              </h4>
              <p className="text-white/80 text-xs mb-2">{revenues[i].desc}</p>
              <p className="text-yellow-300 text-xs font-semibold mb-1">
                Rate: {revenues[i].rate}
              </p>
              <p className="text-white/70 text-xs italic">
                {revenues[i].feature}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 모바일 버전: 세로 정렬 */}
        <div className="flex flex-col md:hidden gap-6 items-center justify-center">
          <motion.div
            className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400 text-black font-bold shadow-[0_0_50px_rgba(255,200,80,0.6)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-lg font-extrabold mb-2">DAO Treasury</h3>
            <p className="text-xs text-black/80 text-center leading-snug">
              All Revenue Returns Here
              <br />
              for Ecosystem Reinvestment
            </p>
          </motion.div>

          {revenues.map((rev, i) => (
            <motion.div
              key={i}
              className="bg-[#1f1200]/90 border border-orange-400/30 p-5 rounded-2xl shadow-[0_0_25px_rgba(255,180,80,0.3)] w-full max-w-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h4 className="text-orange-300 font-semibold text-lg mb-2">
                {rev.title}
              </h4>
              <p className="text-white/80 text-xs mb-2">{rev.desc}</p>
              <p className="text-yellow-300 text-xs font-semibold mb-1">
                Rate: {rev.rate}
              </p>
              <p className="text-white/70 text-xs italic">{rev.feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Ecosystem;

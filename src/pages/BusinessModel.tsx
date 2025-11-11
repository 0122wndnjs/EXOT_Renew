// ✅ BusinessModel.tsx (LatestUpdates 테마 적용 버전)
import { motion } from "framer-motion";

const BusinessModel = () => {
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

  return (
    <section className="relative w-full bg-[#1a0f00] text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c1400] via-[#1a0f00] to-[#120a00] opacity-90"></div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full md:max-w-[90%] mx-auto text-center mt-10"
      >
        {/* ✅ LatestUpdates 스타일 제목 */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_20px_rgba(255,150,50,0.3)] mb-6">
          Business Model
        </h2>

        <p className="text-white/80 max-w-4xl mx-auto mb-16 text-base md:text-lg leading-relaxed">
          The EXOT platform utilizes a diversified revenue model designed to continuously
          strengthen ecosystem growth and long-term sustainability.
        </p>

        {/* ✅ DAO Treasury – LatestUpdates 버튼 스타일 조합 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto mb-20 bg-gradient-to-b from-orange-400 to-yellow-400 
          text-black p-10 rounded-3xl shadow-[0_0_40px_rgba(255,180,80,0.45)]"
        >
          <h3 className="text-3xl font-extrabold">DAO Treasury</h3>
          <p className="mt-3 text-black/80 font-medium leading-relaxed">
            All ecosystem revenue flows into the DAO Treasury
            for reinvestment, growth, and long-term reinforcement.
          </p>
        </motion.div>

        {/* ✅ Revenue Cards – LatestUpdates 카드 색 스타일 적용 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {revenues.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="
                rounded-2xl p-8 text-center 
                bg-[#1f1200]/90 
                border border-orange-400/20 
                shadow-[0_0_25px_rgba(255,150,50,0.18)]
                hover:border-orange-400/40 
                hover:shadow-[0_0_45px_rgba(255,180,80,0.35)]
                transition-all duration-300
              "
            >
              <h4 className="text-orange-300 font-semibold text-lg mb-3">
                {rev.title}
              </h4>

              <p className="text-white/80 text-sm mb-2">{rev.desc}</p>

              <p className="text-yellow-400 text-sm font-semibold mb-2">
                Rate: {rev.rate}
              </p>

              <p className="text-white/70 text-xs italic leading-relaxed">
                {rev.feature}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessModel;

import {
  FiSearch,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";
import { GiMicroscope } from "react-icons/gi";
import { motion } from "framer-motion";

const WhatIsExot = () => {
  const steps = [
    {
      icon: <FiSearch className="text-orange-400 text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />,
      step: "Deal Sourcing",
      activity:
        "Receiving investment proposals from promising biotech startups worldwide",
      entity: "-",
    },
    {
      icon: <GiMicroscope className="text-orange-400 text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />,
      step: "In-Depth Due Diligence",
      activity: "Technical evaluation, data analysis, hypothesis testing",
      entity: "Scientific Advisory Board (SAB), EXOT Agents (AI Tool)",
    },
    {
      icon: <FiCheckCircle className="text-orange-400 text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />,
      step: "Final Decision",
      activity:
        "On-chain governance voting based on the due diligence report",
      entity: "EXOT Token Holders (DAO Community)",
    },
    {
      icon: <FiTrendingUp className="text-orange-400 text-5xl drop-shadow-[0_0_10px_rgba(255,150,50,0.3)]" />,
      step: "Growth Support",
      activity:
        "Supporting investee growth and monitoring milestones",
      entity: "EXOT (Strategic Investor), On-chain Record System",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#120a00] text-white py-20 px-6">
      <div className="w-full md:max-w-[75%] mx-auto flex flex-col md:flex-row items-start justify-between gap-12 md:px-0">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center text-left max-w-xl"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_20px_rgba(255,165,0,0.25)]">
            MISSION
          </h2>
          <p className="text-white/85 text-xl leading-relaxed">
            "To create a world where all innovative ideas that contribute to the
            advancement of human health can be realized, free from the barriers
            of capital."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center gap-10 w-full max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full aspect-video bg-black/50 rounded-2xl overflow-hidden border border-orange-400/30 shadow-[0_0_20px_rgba(255,150,50,0.2)]"
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="EXOT Introduction"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full text-center mt-4 mb-2"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_15px_rgba(255,150,50,0.3)]">
              EXOT Platform Operation Process
            </h3>
            <p className="text-white/70 mt-2 text-base md:text-lg italic">
              Innovative Biotech Investment Journey
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 w-full">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2 * i,
                }}
                viewport={{ once: true }}
                className="flex items-start gap-6  border border-orange-400/20 rounded-2xl p-8 hover:bg-[#2a1800]/90 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,150,50,0.2)]"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  {item.icon}
                </motion.div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-orange-300 mb-3">
                    {item.step}
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed mb-3">
                    {item.activity}
                  </p>
                  <p className="text-yellow-300/80 text-sm font-medium">
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

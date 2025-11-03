import { motion, useAnimation, useInView } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useRef, useState } from "react";

const Token = () => {
  const data = [
    { name: "Team", value: 10, color: "#f97316" }, // Orange
    { name: "Advisors", value: 3, color: "#ec4899" }, // Pink
    { name: "Foundation / Operations", value: 10, color: "#eab308" }, // Amber
    { name: "R&D", value: 17, color: "#22d3ee" }, // Cyan
    { name: "Marketing", value: 7.5, color: "#8b5cf6" }, // Violet
    { name: "DAO Treasury", value: 20, color: "#f59e0b" }, // Gold
    { name: "Investors - Seed", value: 15, color: "#10b981" }, // Emerald
    { name: "Investors - Institutional", value: 10, color: "#6366f1" }, // Indigo
    { name: "Community & Liquidity", value: 7.5, color: "#ef4444" }, // Red
  ];

  const totalSupply = 1_000_000_000;
  const ref = useRef(null);
  const inView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = totalSupply;
      const duration = 2000;
      const stepTime = 20;
      const increment = end / (duration / stepTime);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, stepTime);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#120a00] text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#2c1400] to-[#120a00] opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_25px_rgba(255,150,50,0.3)] mb-6">
            Token Supply & Distribution
          </h2>

          <div className="space-y-4 text-white/80 text-base md:text-lg mb-8">
            <p>
              <span className="text-yellow-400 font-semibold">Token Name:</span>{" "}
              EXOT Foundation (EXOT)
            </p>
            <p>
              <span className="text-yellow-400 font-semibold">Chain:</span>{" "}
              Binance Smart Chain (BSC)
            </p>
          </div>

          {/* 숫자 카운팅 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-lg md:text-xl text-white/70 mb-2">Total Supply</p>
            <h3 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 drop-shadow-[0_0_30px_rgba(255,180,80,0.4)]">
              {count.toLocaleString()} EXOT
            </h3>
          </motion.div>
        </motion.div>

        {/* === 우측: 파이 차트 === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center"
        >
          {/* ===== 파이차트 컨테이너 ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          >
            {/* ===== 파이차트 ===== */}
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  dataKey="value"
                  stroke="none"
                  isAnimationActive={false}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{
                        filter: `drop-shadow(0px 0px 8px ${entry.color}80)`,
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(255,180,80,0.4)",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* ===== 범례 ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 mt-8 text-sm text-white/80"
          >
            {data.map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 8px ${item.color}`,
                  }}
                ></div>
                <span>{item.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Token;

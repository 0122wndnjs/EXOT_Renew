import { motion, useInView } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="15"
      fontWeight="bold"
      style={{ textShadow: "0 0 6px rgba(0,0,0,0.6)" }}
    >
      {(percent * 100).toFixed(1)}%
    </text>
  );
};

const Token = () => {
  const data = [
    { name: "Team", value: 10, color: "#f97316" },
    { name: "Advisors", value: 3, color: "#ec4899" },
    { name: "Foundation / Operations", value: 10, color: "#eab308" },
    { name: "R&D", value: 17, color: "#22d3ee" },
    { name: "Marketing", value: 7.5, color: "#8b5cf6" },
    { name: "DAO Treasury", value: 20, color: "#f59e0b" },
    { name: "Investors - Seed", value: 15, color: "#10b981" },
    { name: "Investors - Institutional", value: 10, color: "#6366f1" },
    { name: "Community & Liquidity", value: 7.5, color: "#ef4444" },
  ];

  const totalSupply = 1_000_000_000;
  const ref = useRef(null);
  const inView = useInView(ref);
  const [count, setCount] = useState(0);

  const contractAddress = "0x598b027c5DA72d7F31534F4f81FDd5bD9D2FFEC4";

  const copyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract copied!", {
      style: {
        background: "#2b1800",
        color: "#fff3d2",
        border: "1px solid rgba(255,185,80,0.4)",
        fontWeight: 600,
      },
      iconTheme: {
        primary: "#ffb347",
        secondary: "#1f1200",
      },
    });
  };

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
      className="relative w-full text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C1A] via-[#E65C1C] to-[#DC3E1C] opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08),_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5e0] to-[#ffe2a0] mb-6 drop-shadow-[0_0_25px_rgba(255,220,120,0.4)]">
            Token Supply & Distribution
          </h2>

          <div className="space-y-3 text-white/90 text-base md:text-lg mb-8">
            <p>
              <span className="text-yellow-200 font-semibold">Token Name:</span>{" "}
              EXOT Foundation (EXOT)
            </p>
            <p>
              <span className="text-yellow-200 font-semibold">Chain:</span>{" "}
              Binance Smart Chain (BSC)
            </p>

            <p className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
              <span className="text-yellow-200 font-semibold">Contract:</span>
              <span
                onClick={copyContract}
                className="cursor-pointer underline hover:text-yellow-300 transition 
               break-all text-sm md:text-base leading-relaxed"
              >
                {contractAddress}
              </span>
            </p>

            <p>
              <span className="text-yellow-200 font-semibold">
                Block Explorer:
              </span>{" "}
              <a
                href="https://bscscan.com/token/0x598b027c5DA72d7F31534F4f81FDd5bD9D2FFEC4#balances"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-300 transition"
              >
                View on BscScan
              </a>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-lg md:text-xl text-white mb-2">Total Supply</p>
            <h3 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              {count.toLocaleString()} EXOT
            </h3>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[430px] aspect-square"
          >
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
                  label={renderLabel}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.color}
                      style={{
                        filter: `drop-shadow(0px 0px 10px ${entry.color}90)`,
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(255,230,150,0.4)",
                    color: "#000",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    boxShadow: "0 0 10px rgba(255,230,150,0.3)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 mt-8 text-sm text-white/90"
          >
            {data.map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 8px ${item.color}`,
                  }}
                />
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

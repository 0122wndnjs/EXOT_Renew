import { motion } from "framer-motion";

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1a0f00] via-[#120800] to-[#0a0400] text-white px-6 relative overflow-hidden">

      {/* 🔥 은은한 Glow Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 drop-shadow-[0_0_35px_rgba(255,200,120,0.3)] mb-6"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-white/70 text-lg md:text-xl mb-8"
      >
        This page is currently under preparation.
      </motion.p>

      {/* ✅ Coming Soon Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400/20 to-yellow-300/20 border border-orange-300/30 backdrop-blur-sm text-orange-200 font-semibold shadow-[0_0_20px_rgba(255,180,100,0.2)]"
      >
        Coming Soon
      </motion.div>

    </section>
  );
};

export default ComingSoon;

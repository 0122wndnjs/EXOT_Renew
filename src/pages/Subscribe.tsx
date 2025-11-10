import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section className="relative w-full bg-[#1a0f00] text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c1400] via-[#1a0f00] to-[#120a00] opacity-90"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-[700px] mx-auto text-center flex flex-col items-center gap-8"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_20px_rgba(255,150,50,0.3)]">
            Get the latest updates from the Bio ecosystem
          </h2>
          <p className="text-white/70 mt-3 text-base md:text-lg">
            Subscribe to receive exclusive news, project insights, and
            announcements.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full mt-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 w-full px-5 py-3 rounded-xl text-black text-lg border-2 border-orange-500 focus:ring-2 focus:ring-orange-400 transition placeholder:text-gray-500"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold text-lg shadow-lg hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </motion.form>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </section>
  );
};

export default Subscribe;

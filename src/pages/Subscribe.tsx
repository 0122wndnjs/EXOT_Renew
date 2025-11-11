import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyjAKn-DzhAcmQHFLAtH4MJKhZBvJPsuTY0N3FdZpadGM0uU_vOcl-3ABdZlY6n2-wl/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ email }),
        }
      );

      toast.success("Subscription successful! ✅");
      setEmail("");
    } catch (err) {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full bg-[#1a0f00] text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c1400] via-[#1a0f00] to-[#120a00] opacity-90"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-[700px] mx-auto text-center flex flex-col items-center gap-8"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            Get the latest updates from the Bio ecosystem
          </h2>
          <p className="text-white/70 mt-3 text-base md:text-lg">
            Subscribe to receive exclusive news, project insights, and announcements.
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-4 w-full mt-6"
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 w-full px-5 py-3 rounded-xl text-white text-lg border-2 border-orange-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold text-lg shadow-lg hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Subscribe;

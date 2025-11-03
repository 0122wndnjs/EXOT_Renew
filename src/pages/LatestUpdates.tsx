import { motion } from "framer-motion";

const LatestUpdates = () => {
  const post = {
    image: "/images/x_image.png",
    title: "EXOT’s Hybrid Strategy: Fusing DeSci with RWA",
    description:
      "Discover how EXOT merges Decentralized Science (DeSci) innovation with the stability of Real-World Asset (RWA) tokenization.",
    link: "https://twitter.com/ExotProject/status/1974713225024507914",
  };

  return (
    <section className="relative w-full bg-[#1a0f00] text-white py-24 px-6 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c1400] via-[#1a0f00] to-[#120a00] opacity-90"></div>

      {/* 제목 */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_20px_rgba(255,150,50,0.3)] mb-4">
          Latest Updates
        </h2>
        <p className="text-white/70 text-base md:text-lg">
          The most recent highlights and announcements from the EXOT ecosystem.
        </p>
      </div>

      {/* 카드 + 버튼 영역 */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl mx-auto px-6">
        {/* 게시글 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 max-w-[480px] bg-[#1f1200]/90 border border-orange-400/20 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,150,50,0.15)] hover:border-orange-400/40 hover:shadow-[0_0_35px_rgba(255,180,80,0.3)] transition-all duration-300"
        >
          <div className="h-56 md:h-64 w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="p-6 flex flex-col justify-between h-[230px] items-center text-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-orange-300 mb-2">
                {post.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {post.description}
              </p>
            </div>

            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-1/2 text-center inline-block px-4 py-2 text-sm font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 text-black rounded-full hover:scale-105 shadow-[0_0_15px_rgba(255,180,80,0.4)] transition-transform duration-300"
            >
              View Post →
            </a>
          </div>
        </motion.div>

        {/* 오른쪽 View More 박스 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center md:items-center text-center md:text-center space-y-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-orange-300">
            Follow EXOT on X
          </h3>
          <p className="text-white/80 max-w-sm">
            Stay up to date with the latest news, announcements, and insights
            from the EXOT team.
          </p>

          <a
            href="https://twitter.com/ExotProject"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,200,80,0.4)] hover:shadow-[0_0_25px_rgba(255,200,80,0.6)] hover:scale-105 transition-transform duration-300"
          >
            View More Posts →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestUpdates;

import { motion } from "framer-motion";
import { FaTelegramPlane, FaDiscord, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

const Community = () => {
  const linktreeUrl = "https://linktr.ee/EXOTPROJECT";
  const telegramCommunityUrl = "https://t.me/+zWZ6ePklw8E4M2M1";
  const telegramAnnouncementUrl = "https://t.me/+46EeoseO6zxkMjg1";

  const links = [
    {
      title: "Follow on X",
      desc: "Get the latest updates and insights.",
      icon: <FaXTwitter className="text-4xl text-[#E7E9EA]" />,
      href: "https://x.com/ExotProject",
    },
    {
      title: "Read on Medium",
      desc: "Deep-dive articles and announcements.",
      icon: <FaMedium className="text-4xl text-white" />,
      href: "https://medium.com/@exotproject",
    },
    {
      title: "Join Discord",
      desc: "Talk with the team, developers, and ambassadors.",
      icon: <FaDiscord className="text-4xl text-white" />,
      href: "https://discord.com/invite/PFMuvRNBjP",
    },
    {
      title: "Zealy Questboard",
      desc: "Earn rewards by completing quests.",
      icon: (
        <div className="text-white text-4xl font-extrabold drop-shadow-[0_0_10px_rgba(200,100,255,0.6)]">
          Z
        </div>
      ),
      href: "https://zealy.io/cw/exotproject/questboard?invitationId=ln9KysWiZjeZoLIKwY11h",
    },
  ];

  return (
    <section className="relative w-full bg-[#120a00] text-white py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#2c1400] to-[#120a00] opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_30px_rgba(255,180,50,0.4)]">
            Join Our Community
          </h2>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our whitepaper and join all official EXOT communities.
          </p>
        </div>

        <motion.a
          href={linktreeUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group block rounded-3xl bg-[#1f1200]/90 border border-orange-400/30 shadow-[0_0_40px_rgba(255,180,80,0.25)] hover:shadow-[0_0_90px_rgba(255,200,100,0.5)] hover:border-orange-400 hover:-translate-y-2 transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-14">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center w-24 h-24 rounded-2xl bg-[#7ED957] border border-[#6CC84E]"
            >
              <SiLinktree className="text-5xl text-black" />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-300">
                Explore EXOT Links
              </h3>
              <p className="mt-3 text-white/80 text-lg">
                Access whitepaper, socials, documents and more through Linktree.
              </p>
            </div>

            <motion.span
              whileHover={{
                backgroundPosition: "200% center",
                scale: 1.08,
              }}
              transition={{ duration: 0.4 }}
              className="inline-block px-8 py-4 rounded-full font-semibold text-black 
                 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 
                 bg-[length:200%_auto] text-lg transition-all"
            >
              Open →
            </motion.span>
          </div>
        </motion.a>

        {/* ✅ Telegram (합쳐진 단일 카드) */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group rounded-3xl bg-[#1f1200]/90 border border-orange-400/30 p-14 
                       shadow-[0_0_40px_rgba(255,180,80,0.25)] hover:border-orange-400 
                       hover:shadow-[0_0_90px_rgba(255,200,100,0.45)] hover:-translate-y-2 
                       transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="flex items-center justify-center w-24 h-24 rounded-2xl bg-[#0f1320]"
              >
                <FaTelegramPlane className="text-5xl text-[#2AABEE]" />
              </motion.div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-3xl md:text-4xl font-bold text-orange-300">
                  Telegram Channels
                </h4>
                <p className="text-white/70 mt-3 text-lg max-w-xl">
                  Join our global community or follow official announcements.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4">
                <motion.a
                  href={telegramCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    backgroundPosition: "200% center",
                    scale: 1.06,
                  }}
                  transition={{ duration: 0.4 }}
                  className="px-8 py-3 rounded-full font-semibold text-black text-lg
                             bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 
                             bg-[length:200%_auto] transition-all text-center"
                >
                  Join Community →
                </motion.a>

                <motion.a
                  href={telegramAnnouncementUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    backgroundPosition: "200% center",
                    scale: 1.06,
                  }}
                  transition={{ duration: 0.4 }}
                  className="px-8 py-3 rounded-full font-semibold text-black text-lg
                             bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 
                             bg-[length:200%_auto] transition-all text-center"
                >
                  Announcement Channel →
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {links.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group rounded-3xl bg-[#1f1200]/90 border border-orange-400/30 p-12 
                         shadow-[0_0_30px_rgba(255,180,80,0.2)] hover:border-orange-400 
                         hover:shadow-[0_0_70px_rgba(255,200,100,0.4)] hover:-translate-y-2 
                         transition-all duration-500"
            >
              <div className="flex items-center gap-8">
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 220 }}
                  className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#0f1320]"
                >
                  {item.icon}
                </motion.div>

                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-orange-300">
                    {item.title}
                  </h4>
                  <p className="text-white/70 mt-2 text-lg">{item.desc}</p>
                </div>

                <motion.span
                  whileHover={{
                    backgroundPosition: "200% center",
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.4 }}
                  className="hidden md:inline-block px-6 py-3 rounded-full font-semibold text-black 
                             bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 
                             bg-[length:200%_auto] text-base transition-all"
                >
                  Visit →
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;

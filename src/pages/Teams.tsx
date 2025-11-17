import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Teams = () => {
  const teamMembers = [
    {
      name: "Hakan K",
      role: "CEO",
      image: "/images/team/hakan.jpg",
      linkedin: "https://www.linkedin.com/in/hakan-k-066999396/",
    },
    {
      name: "Toni Hyun",
      role: "COO",
      image: "/images/team/toni.jpg",
      linkedin:
        "https://www.linkedin.com/in/toni-h-bb1718390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ethan Cole",
      role: "CTO",
      image: "/images/team/ethan.jpg",
      linkedin:
        "https://www.linkedin.com/in/ethan-cole-4a79bb391/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Aisha Rahman",
      role: "Head of Bio Research Integration",
      image: "/images/team/aisha.jpeg",
      linkedin: "https://www.linkedin.com/in/aisha-rahman-0887b4394",
    },
    {
      name: "David Liu",
      role: "Lead Smart Contract Engineer",
      image: "/images/team/david.jpg",
      linkedin: "https://www.linkedin.com/in/david-liu-6686b7390/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sofia Martins",
      role: "Creative Director",
      image: "/images/team/sofia.png",
      linkedin:
        "https://www.linkedin.com/in/sofia-martins-2767b5394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Carlos Fernandez",
      role: "Marketing & Community Director",
      image: "/images/team/carlos.jpeg",
      linkedin: "https://www.linkedin.com/in/carlos-fernandez-338b74394",
    },
    {
      name: "Nora Kim",
      role: "Product Development Manager",
      image: "/images/team/nora.jpg",
      linkedin: "https://www.linkedin.com/in/nora-kim-74288b398/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Kenji Ito",
      role: "Partnership & Operations Manager",
      image: "/images/team/kenji.jpeg",
      linkedin: "https://www.linkedin.com/in/kenji-lito-567224324",
    },
    {
      name: "Emma Blake",
      role: "Public Relations & Community Manager",
      image: "/images/team/emma.jpg",
      linkedin: "https://www.linkedin.com/in/emma-blake-41b006399/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const advisors = [
    {
      name: "Dr. Aaron Blake",
      role: "Web3 Growth & Tokenomics Expert",
      image: "/images/team/aaron.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-aaron-blake-a3b410396/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Lisa Florentina",
      role: "Strategic Partnership Advisor",
      image: "/images/team/lisa.jpeg",
      linkedin: "https://www.linkedin.com/in/lisa-florentina-616420396/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Michael Rossi",
      role: "Financial & Compliance Advisor",
      image: "/images/team/michael.png",
      linkedin: "https://www.linkedin.com/in/michael-rossi-59b27b399/?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Hana Sato",
      role: "Brand & PR Advisor",
      image: "/images/team/hana.png",
      linkedin: "https://www.linkedin.com/in/hana-sato-437144399/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const partners = [
    {
      name: "Crypto Arena Co.",
      category: "Marketing & KOL Partner",
      logo: "/images/partners/cryptoarena.png",
      description:
        "Leading Web3 marketing agency for Binance Live AMAs, influencer campaigns & community growth.",
    },
    {
      name: "Blockchain Express",
      category: "Media & Research Partner",
      logo: "/images/partners/blockchainexpress.png",
      description:
        "Global blockchain media hub providing research, project insights, and industry coverage.",
    },
    {
      name: "MetaWhale Global",
      category: "Metaverse & Web3 Partner",
      logo: "/images/partners/metawhale.png",
      description:
        "Focused on metaverse innovation, NFT integration, and community engagement.",
    },
    {
      name: "WorldKOLs Network",
      category: "Global KOL Alliance Partner",
      logo: "/images/partners/worldkols.png",
      description:
        "International network uniting verified KOLs to expand Web3 visibility and trust.",
    },
  ];

  return (
    <section className="relative w-full bg-[#120a00] text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#2c1400] to-[#120a00] opacity-90"></div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_0_20px_rgba(255,150,50,0.3)] mb-4">
          Meet Our Team
        </h2>
        <p className="text-white/70 text-base md:text-lg">
          Passionate professionals building the future of decentralized biotech.
        </p>
      </div>

      {/* === Core Team === */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-8 text-center">
          Core Team
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-orange-400 shadow-[0_0_20px_rgba(255,180,80,0.3)] mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-lg font-bold text-orange-300">
                {member.name}
              </h4>
              <p className="text-sm text-white/70 mb-2">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* === Advisors === */}
        <h3 className="text-2xl md:text-3xl font-semibold text-yellow-300 mt-20 mb-8 text-center">
          Advisors
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {advisors.map((advisor, i) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-orange-400 shadow-[0_0_20px_rgba(255,180,80,0.3)] mb-4">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-lg font-bold text-orange-300">
                {advisor.name}
              </h4>
              <p className="text-sm text-white/70 mb-2">{advisor.role}</p>
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* === Partners === */}
        <h3 className="text-2xl md:text-3xl font-semibold text-yellow-300 mt-24 mb-10 text-center">
          Our Partners
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 mb-4 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h4 className="text-lg font-bold text-orange-300 mb-1">
                {partner.name}
              </h4>
              <p className="text-sm text-yellow-300 mb-2">{partner.category}</p>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;

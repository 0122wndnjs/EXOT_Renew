import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#120a00] text-white pt-16 pb-10 px-6 border-t border-white/20">
      {/* 배경 그라데이션 은은하게 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f00]/40 to-[#0d0900] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* 로고 or 프로젝트명 */}
        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-3">
          EXOT Foundation
        </h3>
        <p className="text-white/70 mb-8">
          Empowering decentralized biotech innovation through blockchain.
        </p>

        {/* 소셜 아이콘 */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <a
            href="https://x.com/ExotProject"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-orange-400 transition-all duration-300 text-2xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://t.me/yourTelegramChannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-orange-400 transition-all duration-300 text-2xl"
          >
            <FaTelegramPlane />
          </a>
        </div>

        {/* 구분선 */}
        <div className="w-full h-px bg-white/20 mb-6" />

        {/* 저작권 */}
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} EXOT Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

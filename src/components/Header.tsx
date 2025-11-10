import { useState, useEffect } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "intro", label: "Intro" },
    { id: "what-is-exot", label: "What is EXOT" },
    { id: "ecosystem", label: "Ecosystem" },
    { id: "exosome", label: "Exosome" },
    { id: "token", label: "Token" },
    { id: "team", label: "Team & Partner" },
    { id: "roadmap", label: "Roadmap" },
  ];

  // ✅ Scroll Spy (성능 최적화)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = "";
          sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 150 && rect.bottom >= 150) current = section.id;
            }
          });
          setActiveSection(current);
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetY = element.getBoundingClientRect().top + window.scrollY - 60;
    const controls = animate(window.scrollY, targetY, {
      duration: 0.8,
      ease: "easeInOut",
      onUpdate: (value) => window.scrollTo(0, value),
    });

    setMenuOpen(false);
    return () => controls.stop();
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-black/30" : "bg-transparent"
      }`}
    >
      <div className="w-full xl:max-w-[75%] mx-auto px-6 py-5 xl:px-0 flex items-center justify-between">
        {/* ===== 로고 ===== */}
        <button
          onClick={() => scrollToSection("intro")}
          className="flex items-center focus:outline-none"
          aria-label="Go to Intro section"
        >
          <img
            src="/exot_logo.webp"
            alt="EXOT Logo"
            className="h-12 w-auto object-contain"
          />
        </button>

        {/* =========================================================
            ✅ 데스크탑 메뉴는 xl 이상에서만 보이도록 변경
        ========================================================== */}
        <nav
          className="hidden xl:flex space-x-8 justify-center mx-auto"
          aria-label="Main Navigation"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-base xl:text-lg transition-all duration-300 pb-1 border-b-2 ${
                activeSection === section.id
                  ? "text-yellow-300 border-yellow-300"
                  : "text-gray-200 border-transparent hover:text-yellow-200"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* ✅ 데스크탑 SNS 아이콘도 xl 이상에서만 보여줌 */}
        <div className="hidden xl:flex space-x-6">
          <a
            href={import.meta.env.VITE_TWITTER_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-all"
            aria-label="Twitter"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            href={import.meta.env.VITE_TELEGRAM_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-all"
            aria-label="Telegram"
          >
            <FaTelegramPlane size={22} />
          </a>
        </div>

        {/* =========================================================
            ✅ 모바일/태블릿(md)~중형 화면(lg)~xl 미만 → 햄버거
        ========================================================== */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="xl:hidden text-3xl text-white ml-auto focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ===== 모바일 메뉴 ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-black/90 backdrop-blur-md border-t border-white/20"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-yellow-300"
                      : "text-gray-200 hover:text-yellow-200"
                  }`}
                >
                  {section.label}
                </button>
              ))}

              <div className="flex justify-center space-x-6 pt-4 border-t border-white/10 mt-4">
                <a
                  href={import.meta.env.VITE_TWITTER_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-all"
                >
                  <FaXTwitter size={22} />
                </a>
                <a
                  href={import.meta.env.VITE_TELEGRAM_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-all"
                >
                  <FaTelegramPlane size={22} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

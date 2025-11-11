import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, animate } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tokenDropdown, setTokenDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /** ✅ 스크롤 이벤트 */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** ✅ 메인 페이지 스크롤 이동 */
  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const targetY = el.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }, 50);
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const targetY =
      section.getBoundingClientRect().top + window.scrollY - 60;

    animate(window.scrollY, targetY, {
      duration: 0.8,
      ease: "easeInOut",
      onUpdate: (value) => window.scrollTo(0, value),
    });

    setMenuOpen(false);
  };

  /** ✅ EXOT Token 드롭다운 데이터 */
  const exotTokenMenu = [
    { label: "Intro", id: "intro" },
    { label: "What is EXOT", id: "what-is-exot" },
    { label: "Ecosystem", id: "ecosystem" },
    { label: "Exosome", id: "exosome" },
    { label: "Token", id: "token" },
    { label: "Team & Partner", id: "team" },
    { label: "Roadmap", id: "roadmap" },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-black/30" : "bg-transparent"
      }`}
    >
      <div className="w-full xl:max-w-[75%] mx-auto px-6 py-5 xl:px-0 flex items-center justify-between">
        
        {/* ✅ 로고 */}
        <button
          onClick={() => scrollToSection("intro")}
          className="flex items-center"
        >
          <img src="/exot_logo.webp" className="h-12" />
        </button>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-8">

          {/* ✅ EXOT Token — Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTokenDropdown(true)}
            onMouseLeave={() => setTokenDropdown(false)}
          >
            <button
              className={`flex items-center space-x-1 transition ${
                location.pathname === "/" ? "text-yellow-300" : "text-white"
              }`}
            >
              <span>EXOT Token</span>
              <FiChevronDown />
            </button>

            <AnimatePresence>
              {tokenDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute mt-3 w-48 bg-black/90 border border-white/10 rounded-xl shadow-xl backdrop-blur-lg"
                >
                  {exotTokenMenu.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-white/10 hover:text-yellow-300 transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ✅ Other Menu Items */}
          <Link
            to="/dao"
            className={`transition ${
              isActiveRoute("/dao") ? "text-yellow-300" : "text-white"
            }`}
          >
            EXOT DAO
          </Link>

          <Link
            to="/staking"
            className={`transition ${
              isActiveRoute("/staking") ? "text-yellow-300" : "text-white"
            }`}
          >
            EXOT Staking
          </Link>

          <Link
            to="/onboarding"
            className={`transition ${
              isActiveRoute("/onboarding") ? "text-yellow-300" : "text-white"
            }`}
          >
            Onboarding
          </Link>

          <a
            href="https://exot.gitbook.io/exot-whitepaper"
            target="_blank"
            className="text-white hover:text-yellow-200"
          >
            Docs
          </a>

          <Link
            to="/get-exot"
            className={`transition ${
              isActiveRoute("/get-exot") ? "text-yellow-300" : "text-white"
            }`}
          >
            Get EXOT
          </Link>

          <a
            href="https://medium.com/@exotproject"
            target="_blank"
            className="text-white hover:text-yellow-200"
          >
            Medium
          </a>
        </nav>

        {/* ✅ Desktop SNS */}
        <div className="hidden xl:flex space-x-5">
          <a href="https://linktr.ee/EXOTPROJECT" target="_blank" className="text-white hover:text-green-300">
            <SiLinktree size={22} />
          </a>
          <a href="https://x.com/ExotProject" target="_blank" className="text-white hover:text-gray-400">
            <FaXTwitter size={22} />
          </a>
        </div>

        {/* ✅ Mobile Toggle */}
        <button
          className="xl:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden bg-black/90 border-t border-white/10"
          >
            <nav className="flex flex-col py-5">

              {/* ✅ EXOT Token Dropdown (Click on Mobile) */}
              <button
                onClick={() => setTokenDropdown(!tokenDropdown)}
                className="flex items-center justify-between px-6 py-3 text-white border-b border-white/10"
              >
                EXOT Token
                <FiChevronDown />
              </button>

              <AnimatePresence>
                {tokenDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-2 px-6"
                  >
                    {exotTokenMenu.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left py-2 text-gray-300 hover:text-yellow-300"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ✅ Single Links */}
              <Link to="/dao" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white border-b border-white/10 hover:text-yellow-200">
                EXOT DAO
              </Link>

              <Link to="/staking" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white border-b border-white/10 hover:text-yellow-200">
                EXOT Staking
              </Link>

              <Link to="/onboarding" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white border-b border-white/10 hover:text-yellow-200">
                Onboarding EXOT
              </Link>

              <Link to="/get-exot" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white border-b border-white/10 hover:text-yellow-200">
                Get EXOT
              </Link>

              <a href="https://linktr.ee/EXOTPROJECT" target="_blank" className="px-6 py-3 text-white hover:text-yellow-200">
                Docs
              </a>

              <a href="https://medium.com/@exotproject" target="_blank" className="px-6 py-3 text-white hover:text-yellow-200">
                Medium
              </a>

              {/* ✅ SNS */}
              <div className="flex justify-center space-x-6 py-4 border-t border-white/10 mt-4">
                <a href="https://linktr.ee/EXOTPROJECT" target="_blank" className="text-white hover:text-green-300">
                  <SiLinktree size={22} />
                </a>
                <a href="https://x.com/ExotProject" target="_blank" className="text-white hover:text-gray-300">
                  <FaXTwitter size={22} />
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

import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import QuickStart from "../components/QuickStart";
import Community from "../components/Community";
import Footer from "../components/Footer";

const Index = () => {
  // Smooth scroll to sections when clicking on nav links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top:
                targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: "smooth",
            });

            // Update URL but without scrolling
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Handle hash changes and initial hash
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        setTimeout(() => {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            window.scrollTo({
              top:
                targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    window.addEventListener("hashchange", scrollToHash);
    scrollToHash(); // Handle initial hash

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <QuickStart />

        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Element, Link as ScrollLink, scroller } from "react-scroll";

export default function Home() {
  const containerClass =
    "flex h-screen flex-col items-center justify-center gap-10 px-12 py-16 animate-fade-in-medium";
  const headerClass = "tracking-tight text-[5rem] ";

  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const IntroContainer = () => (
    <Element name="intro" className="mb-64">
      <div className={containerClass}>
        <h1 className={headerClass}>
          We help you build <span className="text-yellow-400">Capital</span>
        </h1>
      </div>
    </Element>
  );

  const AboutContainer = () => (
    <Element name="about">
      <div className={containerClass}>
        <h1 className={headerClass}>About</h1>
        <div className="w-full bg-yellow-500 px-16 py-16 lg:w-2/3">
          <p className="text-xl text-black">
            Achka Capital specializes in value-add multifamily real estate,
            providing strong risk-adjusted returns through strategic
            acquisitions and initiatives. With over a decade of experience
            across diverse markets, including New York, Tennessee, Texas,
            Colorado, South Carolina, and North Carolina, our expertise covers
            market analysis, property evaluation, financing, and risk
            management.
            <br />
            <br />
            We prioritize inclusivity in investment opportunities, emphasizing
            trust and transparency for accessible real estate investments. Our
            strategy focuses on thriving markets with strong rental demand and
            favorable economic indicators. Through renovation and repositioning,
            we maximize cash flow and long-term appreciation.
          </p>
        </div>
      </div>
    </Element>
  );

  const PartnerContainer = () => {
    const partners = ["Jake & Gino", "Marco Barbaro", "Yosef Lee"];
    return (
      <Element name="partners">
        <div className={containerClass}>
          <h1 className={headerClass}>Partners</h1>
          <div className="grid w-full grid-cols-3 gap-4 sm:grid-cols-3 md:gap-12 lg:w-2/3">
            {partners.map((x, i) => (
              <div key={i} className="h-64 bg-blue-700">
                <h3 className="text-center text-2xl">{x}</h3>
              </div>
            ))}
          </div>
        </div>
      </Element>
    );
  };

  const PortfolioContainer = () => {
    const portfolio = {
      "The Retreat": "01-the-retreat.png",
      "Highland & Penn": "02-highland-and-penn.png",
      "Highland & Penn (Interior)": "03-highland-and-penn-interior.png",
      "Single Family Home - NY": "04-sfh-ny.png",
      "Multi Family Home - TX": "05-multi-family.png",
      "Multi Family Home - SC": "06-multi-family.png",
    };

    return (
      <Element name="portfolio">
        <div className={containerClass}>
          <h1 className={headerClass}>Portfolio</h1>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8 lg:w-2/3">
            {Object.entries(portfolio).map(([k, v], i) => (
              <div key={i} className="h-80">
                <Image
                  key={i}
                  src={`/homes/${v}`}
                  alt={`${k}`}
                  className="h-full w-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            ))}
          </div>
        </div>
      </Element>
    );
  };

  const ContactContainer = () => (
    <Element name="contact">
      <div className={containerClass}>
        <h1 className={headerClass}>Contact</h1>
        {/* This section is empty for now */}
      </div>
    </Element>
  );

  const links = {
    About: AboutContainer(),
    Partners: PartnerContainer(),
    Portfolio: PortfolioContainer(),
    Contact: null,
  };

  return (
    <>
      <Head>
        {/* Head Content */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#1e40aff1] to-[#15162c] opacity-95">
        {/* Navigation */}
        <div className="fixed z-50 w-full">
          <div className="mx-8 my-8 flex flex-row justify-between space-x-4">
            {/* Logo */}
            <div>
              <ScrollLink
                className="cursor-pointer"
                to="intro"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => scrollToSection("intro")}
              >
                <h1 className="text-4xl">
                  Achka <span className="bg-rose-600">Capital</span>
                </h1>
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block cursor-pointer text-4xl lg:hidden"
              onClick={toggleMobileMenu}
            >
              &#9776; {/* Hamburger icon */}
            </button>

            {/* Navigation Links (Hidden on Mobile) */}
            <div className="z-50 hidden space-x-8 text-xl lg:flex">
              {Object.keys(links).map((x, i) => (
                <ScrollLink
                  className={`cursor-pointer ${
                    activeSection === x.toLowerCase().replace(" ", "-")
                      ? "text-rose-600"
                      : "hover:text-rose-600"
                  }`}
                  to={x.toLowerCase().replace(" ", "-")}
                  key={i}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  onClick={() =>
                    scrollToSection(x.toLowerCase().replace(" ", "-"))
                  }
                >
                  {x}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="z-50 space-y-20 bg-gray-900 py-8 text-white lg:hidden">
              {Object.keys(links).map((x, i) => (
                <ScrollLink
                  className={`flex cursor-pointer justify-center text-2xl ${
                    activeSection === x.toLowerCase().replace(" ", "-")
                      ? "text-rose-600"
                      : "hover:text-rose-600"
                  }`}
                  to={x.toLowerCase().replace(" ", "-")}
                  key={i}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  onClick={() => {
                    scrollToSection(x.toLowerCase().replace(" ", "-"));
                    toggleMobileMenu();
                  }}
                >
                  {x}
                </ScrollLink>
              ))}
            </div>
          )}
        </div>

        {/* Sections */}
        <IntroContainer />
        <AboutContainer />
        <PartnerContainer />
        <PortfolioContainer />
        <ContactContainer />
      </main>
    </>
  );
}

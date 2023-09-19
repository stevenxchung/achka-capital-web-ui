import Head from "next/head";
import Image from "next/image";
import { Element, Link as ScrollLink, scroller } from "react-scroll";

export default function Home() {
  const containerClass =
    "flex h-screen flex-col items-center justify-center gap-10 px-12 py-16";
  const headerClass = "tracking-tight text-[5rem]";

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const IntroContainer = () => (
    <Element name="Intro">
      <div className={containerClass}>
        <h1 className={headerClass}>
          We help you build <span className="text-yellow-400">Capital</span>
        </h1>
      </div>
    </Element>
  );

  const AboutContainer = () => (
    <div className="w-full bg-yellow-500 px-16 py-16 lg:w-2/3">
      <p className="text-xl text-blue-800">
        Achka Capital specializes in value-add multifamily real estate,
        providing strong risk-adjusted returns through strategic acquisitions
        and initiatives. With over a decade of experience across diverse
        markets, including New York, Tennessee, Texas, Colorado, South Carolina,
        and North Carolina, our expertise covers market analysis, property
        evaluation, financing, and risk management.
        <br />
        <br />
        We prioritize inclusivity in investment opportunities, emphasizing trust
        and transparency for accessible real estate investments. Our strategy
        focuses on thriving markets with strong rental demand and favorable
        economic indicators. Through renovation and repositioning, we maximize
        cash flow and long-term appreciation.
      </p>
    </div>
  );

  const PartnerContainer = () => {
    const partners = ["Jake & Gino", "Marco Barbaro", "Yosef Lee"];
    return (
      <div className="grid w-full grid-cols-3 gap-4 sm:grid-cols-3 md:gap-12 lg:w-2/3">
        {partners.map((x, i) => (
          <div key={i} className="h-64 bg-blue-700">
            <h3 className="text-center text-2xl">{x}</h3>
          </div>
        ))}
      </div>
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
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8 lg:w-2/3">
        {Object.entries(portfolio).map(([k, v], i) => (
          <div key={i} className="h-80 bg-rose-600">
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
    );
  };

  const links = {
    About: AboutContainer(),
    Partners: PartnerContainer(),
    Portfolio: PortfolioContainer(),
    Contact: null,
  };

  return (
    <>
      <Head>
        {/* Head content */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#1e40aff1] to-[#15162c] opacity-95">
        {/* Navigation */}
        <div className="fixed w-full">
          <div className="mx-8 my-8 flex flex-row justify-between space-x-4">
            {/* Logo */}
            <div>
              <ScrollLink
                className="cursor-pointer"
                to="Intro"
                smooth={true}
                offset={-70} // Adjust this value to your design
                duration={800}
                onClick={() => scrollToSection("Intro")}
              >
                <h1 className="text-4xl">
                  Achka <span className="bg-rose-600">Capital</span>
                </h1>
              </ScrollLink>
            </div>

            {/* Navigation Links */}
            <div className="space-x-8 text-xl">
              {Object.keys(links).map((x, i) => (
                <ScrollLink
                  className="cursor-pointer hover:text-rose-600"
                  to={x.toLowerCase().replace(" ", "-")}
                  key={i}
                  smooth={true}
                  offset={-70} // Adjust this value to your design
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
        </div>

        {/* Sections */}
        <IntroContainer />

        {Object.entries(links).map(([k, v], i) => (
          <Element name={k.toLowerCase().replace(" ", "-")} key={i}>
            <div className={containerClass}>
              <h1 className={headerClass}>{k}</h1>
              {v ? v : <div></div>}
            </div>
          </Element>
        ))}
      </main>
    </>
  );
}

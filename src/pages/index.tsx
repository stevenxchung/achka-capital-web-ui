import Head from "next/head";
import { Element, Link as ScrollLink, scroller } from "react-scroll";

export default function Home() {
  const links = ["About", "Partners", "Portfolio", "Contact Us"];

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Head>
        {/* Head content */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#02126d] to-[#15162c]">
        {/* Navigation */}
        <div className="fixed w-full">
          <div className=" mx-8 my-8 flex flex-row justify-between space-x-4">
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
                  Achka <span className="text-[hsl(0,100%,60%)]">Capital</span>
                </h1>
              </ScrollLink>
            </div>
            {/* Navigation Links */}
            <div className="space-x-8 text-xl">
              {links.map((x, i) => (
                <ScrollLink
                  className="cursor-pointer"
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

        <Element name="Intro">
          <div className="flex h-screen flex-col items-center justify-center gap-12 px-4 py-16">
            <h1 className="tracking-tight sm:text-[5rem]">
              We help you build{" "}
              <span className="text-[hsl(0,100%,60%)]">Capital</span>
            </h1>
          </div>
        </Element>

        {/* Sections */}
        {links.map((x, i) => (
          <Element name={x.toLowerCase().replace(" ", "-")} key={i}>
            <div className="flex h-screen flex-col items-center justify-center gap-12 px-4 py-16">
              <h1 className="tracking-tight sm:text-[5rem]">{x}</h1>
            </div>
          </Element>
        ))}
      </main>
    </>
  );
}

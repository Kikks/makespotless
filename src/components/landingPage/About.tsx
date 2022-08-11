import AboutImage from '../../assets/images/About.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="grid place-items-center bg-primary-main text-white lg:h-screen lg:max-h-[768px]"
    >
      <div className="container flex flex-col items-center justify-between gap-10 p-5 py-10 md:gap-20 md:px-20 md:py-20 lg:flex-row lg:gap-10 lg:px-5 lg:py-10">
        <div className="flex flex-1 flex-col items-center gap-2 lg:items-start">
          <span className="mb-7 bg-white p-3 text-xs uppercase text-primary-main lg:mb-0">
            About our company
          </span>

          <h2 className="font-cabinBold text-xl lg:max-w-[400px] lg:text-2xl">
            When it comes to cleaning, you want trusted professionals who will
            treat your facility like their own and deliver exceptional results.
          </h2>

          <p className="mt-5 text-white/70">
            By choosing Makespotless Global Services, you get the perks of a
            locally owned and operated franchise that is backed by a national
            network. Our expertly trained, fully dedicated professionals take
            pride in delivering the highest standards of clean and are
            guaranteed to treat your home, office or facility like their own.
          </p>

          <p className="mt-5 text-white/70">
            Our relentless passion for excellence and customer service means we
            continuously invest in improving our processes, our employees and
            our relationship with each and every business we serve.
          </p>

          <a
            href="#contact"
            className="group mt-10 flex w-full items-center justify-center gap-5 border border-white px-3 py-5 text-sm hover:bg-gray-800 md:w-auto md:px-5 md:text-base lg:w-auto"
          >
            <span>CONTACT THE MAKESPOTLESS TEAM</span>

            <span className="mr-3 group-hover:translate-x-2">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <figure className="aspect-[7/10] w-full lg:max-w-[400px]">
            <img
              src={AboutImage}
              alt="Man cleaning window"
              className="h-full w-full object-contain"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;

import Plants from '../../assets/images/Plants.jpg';

const MissionAndVision = () => {
  return (
    <section className="flex w-full items-center justify-center">
      <div className="container flex flex-col justify-between gap-10 p-5 py-20 md:p-20 lg:flex-row lg:py-20 lg:px-10">
        <div className="flex flex-1 flex-col gap-10 lg:max-w-[40vw]">
          <figure className="aspect-square w-full">
            <img
              src={Plants}
              alt="Plants"
              className="h-full w-full object-cover"
            />
          </figure>

          <div className="flex flex-col gap-1">
            <h3 className="font-cabinSemibold text-xl text-primary-main lg:text-2xl">
              Mission Statement
            </h3>
            <p className="text-makespotless-black/70">
              Our mission is to provide insightful solutions that take the
              tedious task of cleaning and disinfecting your space drive by
              allowing our clients have more time to focus on giving their
              business the time and focus it deserves to keep thriving.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-cabinSemibold text-xl text-primary-main lg:text-2xl">
              Vision Statement
            </h3>
            <p className="text-makespotless-black/70">
              We are trusted partners, collaborating with the best team to help
              provide the highest standard of cleaning in Nigeria.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5 self-stretch bg-primary-main p-10 text-white md:p-16 lg:max-w-[40vw] lg:gap-10">
          <h3 className="mb-5 font-cabinSemibold">OUR CORE VALUES</h3>

          <div className="flex flex-col gap-3">
            <h2 className="font-cabinSemibold text-xl lg:text-2xl">
              Excellent Service
            </h2>
            <p className="text-sm text-white/70">
              Our industry-certified technicians perform their jobs accurately
              and professionally.
            </p>
          </div>

          <hr className="border border-white" />

          <div className="flex flex-col gap-3">
            <h2 className="font-cabinSemibold text-xl lg:text-2xl">
              Integrity
            </h2>
            <p className="text-sm text-white/70">
              Our industry-certified technicians perform their jobs accurately
              and professionally.
            </p>
          </div>

          <hr className="border border-white" />

          <div className="flex flex-col gap-3">
            <h2 className="font-cabinSemibold text-xl lg:text-2xl">
              Leadership
            </h2>
            <p className="text-sm text-white/70">
              Our industry-certified technicians perform their jobs accurately
              and professionally.
            </p>
          </div>

          <hr className="border border-white" />

          <div className="flex flex-col gap-3">
            <h2 className="font-cabinSemibold text-xl lg:text-2xl">
              Innovation
            </h2>
            <p className="text-sm text-white/70">
              Our industry-certified technicians perform their jobs accurately
              and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;

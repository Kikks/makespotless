import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Corporate from '../../assets/images/Corporate.jpg';
import Medical from '../../assets/images/Medical.jpg';
import Event from '../../assets/images/Event.jpg';
import Construction from '../../assets/images/Construction.jpg';
import Restaurants from '../../assets/images/Restaurants.jpg';
import Hotels from '../../assets/images/Hotels.jpg';
import Schools from '../../assets/images/Schools.jpg';
import Fitness from '../../assets/images/Fitness.jpg';

const spaces = [
  {
    title: 'Corporate',
    image: Corporate,
  },
  {
    title: 'Medical',
    image: Medical,
  },
  {
    title: 'Event Centers',
    image: Event,
  },
  {
    title: 'Construction',
    image: Construction,
  },
  {
    title: 'Restaurants',
    image: Restaurants,
  },
  {
    title: 'Hotels',
    image: Hotels,
  },
  {
    title: 'Schools',
    image: Schools,
  },
  {
    title: 'Fitness',
    image: Fitness,
  },
];

const Spaces = () => {
  const handleSlideRight = () => {
    const vendroList = document.getElementById('scroll-list');

    if (vendroList) {
      vendroList.scrollLeft += 350;
    }
  };

  const handleSlideLeft = () => {
    const vendroList = document.getElementById('scroll-list');

    if (vendroList) {
      vendroList.scrollLeft += -350;
    }
  };

  return (
    <section className="flex w-full items-center justify-center">
      <div className="container flex flex-col gap-10 p-5 py-20 md:p-20 lg:py-20 lg:px-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase text-makespotless-black/70">
            Spaces
          </span>

          <h2 className="text-2xl lg:text-3xl">
            We work with different types of spaces
          </h2>
        </div>

        <div className="relative w-full overflow-x-hidden">
          <div
            id="scroll-list"
            className="no-scrollbar flex w-full gap-10 overflow-x-auto scroll-smooth"
          >
            {spaces.map((space, index) => (
              <div
                key={index}
                className="flex w-[20vw] min-w-[300px] max-w-[400px] flex-col gap-5"
              >
                <figure className="group aspect-[8/10] w-full overflow-hidden rounded-md">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="h-full w-full object-cover group-hover:-rotate-6 group-hover:scale-110"
                  />
                </figure>

                <span className="font-cabinSemibold text-lg lg:text-xl">
                  {space.title}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute left-5 top-[50%] hidden h-14 w-14 -translate-y-[50%] items-center justify-center rounded-full bg-white shadow-lg active:scale-90 md:flex">
            <MdChevronLeft onClick={handleSlideLeft} className="text-4xl" />
          </div>

          <div
            onClick={handleSlideRight}
            className="absolute right-5 top-[50%] hidden h-14 w-14 -translate-y-[50%] items-center justify-center rounded-full bg-white shadow-lg active:scale-90 md:flex"
          >
            <MdChevronRight className="text-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;

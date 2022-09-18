import Janitorial from '../../assets/images/Janitorial.jpg';
import PostConstruction from '../../assets/images/PostConstruction.jpg';
import Fumigation from '../../assets/images/Fumigation.jpg';
import Gardening from '../../assets/images/Gardening.jpg';
import WasteManagement from '../../assets/images/WasteManagement.jpg';
import Laundry from '../../assets/images/Laundry.jpg';
import InteriorCleaning from '../../assets/images/InteriorCleaning.jpg';
import CarWash from '../../assets/images/CarWash.jpg';

const services = [
  {
    title: 'Janitorial Services',
    image: Janitorial,
  },
  {
    title: 'Post Construction Cleaning',
    image: PostConstruction,
  },
  {
    title: 'Fumigation',
    image: Fumigation,
  },
  {
    title: 'Gardening Services',
    image: Gardening,
  },
  {
    title: 'Waste Management',
    image: WasteManagement,
  },
  {
    title: 'Laundry Services',
    image: Laundry,
  },
  {
    title: 'Interior & Exteriror Cleaning',
    image: InteriorCleaning,
  },
  {
    title: 'Car Wash',
    image: CarWash,
  },
];

const Services = () => {
  return (
    <section id="services" className="flex w-full items-center justify-center">
      <div className="container flex flex-col gap-10 p-5 py-20 md:p-20 lg:py-20 lg:px-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase text-makespotless-black/70">
            Cutting Edge
          </span>

          <h2 className="text-2xl lg:text-3xl">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 2xl:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="col-span-1 flex w-full flex-col gap-5">
              <figure className="group aspect-square w-full overflow-hidden rounded-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:-rotate-6 group-hover:scale-110"
                />
              </figure>

              <span className="font-cabinSemibold text-lg lg:text-xl">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

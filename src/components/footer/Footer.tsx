import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center">
      <div className="container flex flex-col">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-20 p-5 py-20 md:gap-20 md:p-20 lg:flex-row lg:gap-20 lg:py-20 lg:px-10">
          <Link to="/">
            <figure className="aspect-square w-[15vw] min-w-[120px] max-w-[150px]">
              <img src="/logo192.png" alt="Makespotless Logo" />
            </figure>
          </Link>

          <div className="flex flex-col items-center gap-20 text-center md:flex-row md:items-start md:gap-16 md:text-left lg:gap-20">
            <div className="grid max-w-[300px] gap-3">
              <h4 className="mb-2 font-cabinBold text-lg uppercase lg:text-xl">
                Pages
              </h4>

              <a href="#about" className="uppercase">
                About
              </a>
              <a href="#about" className="uppercase">
                Services
              </a>
              <a href="#about" className="uppercase">
                Contact Us
              </a>
            </div>

            <div className="grid w-full max-w-[300px] gap-7 md:w-auto md:gap-3">
              <h4 className="mb-2 font-cabinBold text-lg uppercase lg:text-xl">
                Reach Out
              </h4>

              <span>
                Asaba address:
                <br />
                NO. 6, Victor Anene Street, Opposite Cenotaph Behind Macdons,
                G.R.A, Asaba, Delta State, Nigeria.
              </span>

              <span>
                Lagos address:
                <br />9 Adenubi close, off Allen Avenue, Ikeja Lagos.
              </span>

              <span>
                Benin address:
                <br />
                23, Osasogie street off Sapele Road, Ekae, Benin city.
              </span>

              <div className="flex justify-center gap-3 md:justify-start">
                <a href="tel:+2348062154930">+2348062154930,</a>
                <a href="tel:+2348119131252">+2348119131252</a>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:flex-nowrap md:justify-start">
                <a href="mailto:info@makespotless.com">info@makespotless.com</a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex w-full items-center justify-center p-3">
          <span className="text-sm lg:text-base">
            Copyright © {new Date().getFullYear()} Makespotless
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

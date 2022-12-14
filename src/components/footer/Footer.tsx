import { Link } from 'react-router-dom';
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center">
      <div className="container flex flex-col">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-start p-5 py-20 text-center md:p-20 lg:py-20 lg:px-10 lg:text-left">
          <div className="flex w-full flex-col items-center justify-between gap-20 lg:flex-row lg:items-start lg:gap-5">
            <div className="grid gap-10 lg:min-w-[300px]">
              <Link to="/" className="justify-self-start">
                <figure className="aspect-square w-[15vw] min-w-[120px] max-w-[150px]">
                  <img src="/logo192.png" alt="Makespotless Logo" />
                </figure>
              </Link>

              <hr />

              <div className="flex flex-col gap-3">
                <h4 className="mb-2 font-cabinBold text-lg uppercase lg:text-xl">
                  Follow Us
                </h4>

                <div className="flex justify-center gap-3 lg:justify-start">
                  <a
                    href="https://www.facebook.com/109342778560619/posts/pfbid0fCSMzyr2bFSd2drCcGHPmFSgf1ydPDvYeMSqxtvfsYrrCEeuwwxUsrTHcHBXcxJRl/?sfnsn=scwspmo"
                    target="_blank"
                    rel="noreferrer"
                    className="duration-200 hover:-rotate-2 hover:scale-125"
                  >
                    <MdFacebook className="text-3xl text-primary-main" />
                  </a>

                  <a
                    href="https://www.instagram.com/invites/contact/?i=ht9qddex8i0h&utm_content=p4nn17c"
                    target="_blank"
                    rel="noreferrer"
                    className="duration-200 hover:-rotate-2 hover:scale-125"
                  >
                    <AiFillInstagram className="text-3xl text-primary-main" />
                  </a>
                </div>
              </div>

              <hr />

              <div className="flex flex-col gap-3">
                <h4 className="mb-2 font-cabinBold text-lg uppercase lg:text-xl">
                  Pages
                </h4>

                <a
                  href="#about"
                  className="hover:text-primary-main hover:underline"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-primary-main hover:underline"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="hover:text-primary-main hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="grid w-full max-w-[500px] flex-1 items-center gap-7 md:w-auto md:gap-5 lg:items-stretch">
              <h4 className="mb-2 font-cabinBold text-lg uppercase lg:text-xl">
                Reach Out
              </h4>

              <div className="flex flex-col gap-1">
                <h3 className="font-cabinBold text-lg">Asaba</h3>
                <span>
                  6, Victor Anene street, opposite Cenotaph behind Macdons,
                  G.R.A, Asaba, Delta State, Nigeria.
                </span>
                <div className="flex w-full justify-center gap-3 text-center lg:w-auto lg:justify-start">
                  <a href="tel:+2348062154930">+234 806 215 4930,</a>
                  <a href="tel:+2348119131252">+234 811 913 1252</a>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-cabinBold text-lg">Lagos</h3>
                <span>9 Adenubi close, off Allen Avenue, Ikeja Lagos</span>
                <a href="tel:+2348147910009">+234 814 791 0009</a>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-cabinBold text-lg">Benin</h3>
                <span>
                  23, Osasogie street off Sapele Road, Ekae, Benin city.
                </span>
                <a href="tel:+2349132019252 ">+234 913 201 9252</a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex w-full items-center justify-center p-3">
          <span className="text-sm lg:text-base">
            Copyright ?? {new Date().getFullYear()} Makespotless
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

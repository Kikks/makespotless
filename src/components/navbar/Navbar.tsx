import { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (open) {
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 27) {
          toggleOpen();
        }
      };

      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKeyDown);

      return () => {
        document.body.style.overflow = 'visible';
        document.removeEventListener('keydown', onKeyDown);
      };
    } else {
      return;
    }
  }, [open]);

  return (
    <>
      <nav className="static top-0 left-0 z-10 flex w-full items-center justify-center bg-white p-2 px-5 lg:sticky">
        <div className="mx-auto flex w-full max-w-[1000px] items-center justify-between">
          <Link to="/">
            <figure className="aspect-square w-[6.5vw] min-w-[50px] max-w-[100px]">
              <img src="/logo192.png" alt="Makespotless Logo" />
            </figure>
          </Link>

          <div className="hidden items-center gap-5 md:flex lg:gap-10">
            <a href="#about" className="tracking-wide text-primary-main">
              About Us
            </a>
            <a href="#services" className="tracking-wide text-primary-main">
              Our Services
            </a>
            <a href="#contact" className="tracking-wide text-primary-main">
              Contact Us
            </a>
          </div>

          <MdMenu
            className="cursor-pointer text-2xl text-primary-main md:hidden"
            onClick={toggleOpen}
          />
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 flex h-full min-h-[500px] w-full flex-col items-center justify-center gap-10 bg-white text-center md:hidden ${
          open ? 'translate-y-0' : '-translate-y-[100vh]'
        }`}
      >
        <MdClose
          className="absolute top-5 right-5 cursor-pointer text-2xl text-primary-main md:hidden"
          onClick={toggleOpen}
        />

        <a
          href="#about"
          className="tracking-wide text-primary-main"
          onClick={toggleOpen}
        >
          About Us
        </a>
        <a
          href="#services"
          className="tracking-wide text-primary-main"
          onClick={toggleOpen}
        >
          Our Services
        </a>
        <a
          href="#contact"
          className="tracking-wide text-primary-main"
          onClick={toggleOpen}
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Navbar;

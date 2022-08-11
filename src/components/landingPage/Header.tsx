const Header = () => {
  return (
    <header className="header flex h-[100vh] max-h-[800px] min-h-[500px] w-full items-center justify-center bg-black/50">
      <div className="container flex flex-col items-center justify-center gap-10 p-5 text-center">
        <h1 className="text-5xl text-white md:text-5xl lg:text-7xl">
          First Class <br /> Cleaning Service
        </h1>
        <h3 className="text-lg text-white md:max-w-[50ch]">
          We care deeply about the impression you make on others. We are
          dedicated to creating clean, safe, and healthy environments for both
          commercial and residential spaces in Nigeria.
        </h3>
      </div>
    </header>
  );
};

export default Header;

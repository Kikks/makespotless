const Contact = () => {
  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center bg-primary-main"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 p-5 py-20 md:p-20 lg:py-20 lg:px-10">
        <div className="flex flex-col gap-3 text-white">
          <span className="text-xs uppercase">Cutting Edge</span>

          <h2 className="text-2xl lg:text-3xl">Contact Us</h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-10 bg-white px-5 py-10 md:p-10 lg:flex-row lg:py-10 lg:px-20">
          <h2 className="flex-1 font-cabinBold text-3xl lg:max-w-[15ch] lg:text-5xl">
            Reach out to us today
          </h2>

          <div className="flex w-full max-w-[500px] flex-1 flex-col gap-7">
            <div className="grid w-full gap-1">
              <label className="font-cabinBold text-xs uppercase">Name</label>
              <input
                type="text"
                placeholder="Type in your name here"
                className="flex-1 border-none bg-gray-100 px-4 py-3 font-cabinRegular text-sm text-gray-600 focus:text-gray-900 focus:outline-none"
              />
            </div>

            <div className="grid w-full gap-1">
              <label className="font-cabinBold text-xs uppercase">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Type in your email here"
                className="flex-1 border-none bg-gray-100 px-4 py-3 font-cabinRegular text-sm text-gray-600 focus:text-gray-900 focus:outline-none"
              />
            </div>

            <div className="grid w-full gap-1">
              <label className="font-cabinBold text-xs uppercase">
                Email Address
              </label>
              <textarea
                placeholder="Tell me about what you want to create"
                rows={6}
                className="flex-1 resize-none border-none bg-gray-100 px-4 py-3 font-cabinRegular text-sm text-gray-600 focus:text-gray-900 focus:outline-none"
              />
            </div>

            <button className="flex w-full items-center justify-center bg-primary-main p-4 uppercase text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

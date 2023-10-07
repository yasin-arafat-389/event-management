const MainSlider = () => {
  return (
    <div>
      <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src="https://i.ibb.co/74K5347/pngtree-event-management-doodle-set-image-1435576.jpg"
            alt=""
          />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Event, Our Expertise
            </h2>
            <p className="mt-4 text-base text-gray-200">
              Transforming Ideas into Unforgettable Events with Precision,
              Creativity, and Dedication. Your Vision, Our Expertise, Every
              Celebration
            </p>
            <a
              href="#"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-6 hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
            >
              Contact Us
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSlider;

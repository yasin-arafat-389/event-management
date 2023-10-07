import { useLoaderData } from "react-router-dom";

const Services = () => {
  let data = useLoaderData();
  let myEvents = data.events;

  return (
    <section
      id="features"
      className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-15"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Our Services
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          From corporate gatherings to award ceremonies, our services cover it
          all. Immerse yourself in our expertise, creativity, and dedication to
          deliver events that leave lasting impressions.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:md:grid-cols-3">
        {myEvents?.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-xl hover:shadow-teal"
          >
            <figure>
              <img
                src={item.image}
                alt="Shoes"
                className="rounded-tl-xl rounded-tr-xl w-full h-[200px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.category}</h2>
              <p>{item.short_description}</p>
              <p className="font-bold ">
                <div className="badge badge-secondary text-[#fff]">Price:</div>{" "}
                {item.price}
              </p>
              <div className="card-actions">
                <button className="btn btn-primary bg-yellow-300 hover:bg-yellow-300 border-none text-[#000] rounded-xl">
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

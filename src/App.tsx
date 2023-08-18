interface IVehicle {
  type: string;
  imageSrc: string;
  heading: string;
  description: string;
  bgColor: string;
  btnTextColor: string;
}

const vehicleData: IVehicle[] = [
  {
    type: "sedans",
    imageSrc: "./icon-sedans.svg",
    heading: "SEDANS",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    bgColor: "bg-bright-orange",
    btnTextColor: "text-bright-orange",
  },
  {
    type: "suvs",
    imageSrc: "./icon-suvs.svg",
    heading: "SUVS",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    bgColor: "bg-dark-cyan",
    btnTextColor: "text-dark-cyan",
  },
  {
    type: "luxury",
    imageSrc: "./icon-luxury.svg",
    heading: "LUXURY",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bgColor: "bg-very-dark-cyan",
    btnTextColor: "text-very-dark-cyan",
  },
];

function VehicleBlock(props: IVehicle) {
  const { imageSrc, heading, description, bgColor, btnTextColor } = props;
  return (
    <section
      className={`flex flex-col p-12 ${bgColor} lg:h-[500px] lg:w-[308px] lg:p-8`}
    >
      <header>
        <img className="mb-10 w-16" src={imageSrc} alt={heading} />
        <h1 className="mb-10 font-big-shoulders text-4xl text-very-light-gray">
          {heading}
        </h1>
      </header>

      <p className="mb-6 font-Lexend-Deca text-transparent-white lg:mb-24 lg:max-w-[210px]">
        {description}
      </p>
      <button
        className={`w-fit rounded-3xl border bg-white px-8 py-3 font-Lexend-Deca ${btnTextColor} hover:border-white hover:${bgColor} hover:text-white`}
      >
        Learn More
      </button>
    </section>
  );
}

function App() {
  return (
    <article className="my-10 flex w-[88%] flex-col items-center overflow-hidden rounded-xl lg:my-0 lg:w-fit lg:flex-row">
      {vehicleData.map((vehicle) => (
        <VehicleBlock key={vehicle.type} {...vehicle} />
      ))}
    </article>
  );
}

export default App;

function App() {
  return (
    <div className=" my-10 flex w-[90%] flex-col overflow-hidden rounded-xl xl:my-0 xl:w-2/3 xl:flex-row">
      <div className=" flex flex-col bg-bright-orange p-14">
        <div className=" flex flex-col">
          <img className="mb-10 w-16" src="./icon-sedans.svg" alt="sedan" />
          <h1 className="mb-8 font-big-shoulders text-4xl text-very-light-gray">
            SEDANS
          </h1>
          <p className="mb-6 font-Lexend-Deca text-transparent-white xl:mb-20">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <a className="w-fit rounded-3xl border bg-white px-8 py-3 font-Lexend-Deca text-bright-orange hover:border-white hover:bg-bright-orange hover:text-white">
            Learn More
          </a>
        </div>
      </div>
      <div className=" flex flex-col bg-dark-cyan p-14">
        <div className=" flex flex-col">
          <img className="mb-10 w-16" src="./icon-suvs.svg" alt="SUVS" />
          <h1 className="mb-8 font-big-shoulders text-4xl text-very-light-gray">
            SUVS
          </h1>
          <p className="mb-6 font-Lexend-Deca text-transparent-white xl:mb-20">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <a className="w-fit rounded-3xl border bg-white px-8 py-3 font-Lexend-Deca text-dark-cyan  hover:border-white hover:bg-dark-cyan hover:text-white">
            Learn More
          </a>
        </div>
      </div>
      <div className=" flex flex-col bg-very-dark-cyan p-14">
        <div className=" flex flex-col">
          <img className="mb-10 w-16" src="./icon-luxury.svg" alt="LUXURY" />
          <h1 className="mb-8 font-big-shoulders text-4xl text-very-light-gray">
            LUXURY
          </h1>
          <p className="mb-6 font-Lexend-Deca text-transparent-white xl:mb-20">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <a className="w-fit rounded-3xl border bg-white px-8 py-3 font-Lexend-Deca text-very-dark-cyan hover:border-white hover:bg-very-dark-cyan hover:text-white">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

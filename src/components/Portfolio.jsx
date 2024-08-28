import portfolio from "../data/portfolio";

export default function Portfolio() {
  return (
    <div className="h-full snap-y snap-mandatory overflow-scroll scroll-smooth md:h-full md:overflow-visible">
      <div className="grid flex-none grid-flow-row grid-cols-1 grid-rows-3 gap-4 p-2 md:grid md:flex-1 md:grid-flow-col md:grid-cols-2 md:grid-rows-2">
        {portfolio.map((item) => (
          <PortfolioItem
            key={item.title}
            imgUrl={item.imgUrl}
            title={item.title}
            stack={item.stack}
            workUrl={item.workUrl}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
function PortfolioItem({ imgUrl, stack, title, workUrl, description }) {
  return (
    <a
      className="transistion-none grid touch-pan-y snap-center snap-always grid-flow-row grid-rows-2 bg-black bg-opacity-65 backdrop-blur-sm md:grid-flow-row md:grid-flow-col md:grid-cols-2 md:grid-rows-1 md:transition-transform md:duration-700 md:ease-in-out md:hover:z-20 md:hover:scale-125"
      href={workUrl}
      target="_blank"
    >
      <div>
        <img
          src={imgUrl}
          alt="portfolio"
          className="h-full w-full overflow-hidden object-cover object-center p-2"
        />
      </div>
      <div className="grid h-full w-full place-content-between p-4">
        <h3 className="text-start text-2xl font-medium text-white md:text-end md:text-lg">
          {title}
        </h3>
        <p className="text-md flex flex-row flex-wrap items-center justify-center gap-1 md:justify-end md:text-xs">
          {stack.map((item) => (
            <span className="inline-block border-2 border-white border-opacity-50 bg-darkCream bg-opacity-70 px-2 py-1 text-white">
              {item}
            </span>
          ))}
        </p>
        <p className="text-md text-start md:text-end md:text-xs">
          {description}
        </p>
      </div>
    </a>
  );
}

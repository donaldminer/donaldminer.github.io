import portfolio from "../data/portfolio";

export default function Portfolio() {
  return (
    <div className="h-full snap-y snap-mandatory overflow-scroll scroll-smooth sm:h-full sm:overflow-visible">
      <div className="grid flex-none touch-pan-y snap-center snap-always grid-flow-row grid-cols-1 grid-rows-3 gap-4 p-2 sm:grid sm:flex-1 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2">
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
      className="transistion-none grid grid-flow-row grid-rows-2 bg-black bg-opacity-65 backdrop-blur-sm sm:grid-flow-row sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-1 sm:transition-transform sm:duration-700 sm:ease-in-out sm:hover:z-20 sm:hover:scale-125"
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
        <h3 className="text-start text-2xl font-medium text-white sm:text-end sm:text-lg">
          {title}
        </h3>
        <p className="text-md flex flex-row flex-wrap items-center justify-center gap-1 sm:justify-end sm:text-xs">
          {stack.map((item) => (
            <span className="inline-block border-2 border-white border-opacity-50 bg-darkCream bg-opacity-70 px-2 py-1 text-white">
              {item}
            </span>
          ))}
        </p>
        <p className="text-md text-start sm:text-end sm:text-xs">
          {description}
        </p>
      </div>
    </a>
  );
}

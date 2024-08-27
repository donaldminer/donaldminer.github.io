import portfolio from "../data/portfolio";

export default function Portfolio() {
  return (
    <div className="h-full snap-y snap-mandatory overflow-scroll scroll-smooth sm:h-full sm:overflow-visible">
      <div className="grid flex-none touch-auto snap-center snap-always grid-flow-row grid-cols-1 grid-rows-3 gap-4 p-2 sm:grid sm:flex-1 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2">
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
      className="grid grid-flow-row bg-black bg-opacity-65 backdrop-blur-sm transition-transform duration-700 ease-in-out hover:z-20 hover:scale-125 hover:transform sm:grid-flow-row sm:grid-flow-col sm:grid-cols-2"
      href={workUrl}
      target="_blank"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="h-full w-full object-cover object-center p-2"
      />
      <div className="flex w-full flex-col place-content-between p-4 sm:h-full">
        <h3 className="text-start text-lg font-medium text-white sm:text-end">
          {title}
        </h3>
        <p className="flex flex-row flex-wrap items-center justify-end gap-1 text-xs">
          {stack.map((item) => (
            <span className="inline-block border-2 border-white border-opacity-50 bg-darkCream bg-opacity-70 px-2 py-1 text-white">
              {item}
            </span>
          ))}
        </p>
        <p className="text-end text-xs">{description}</p>
      </div>
    </a>
  );
}

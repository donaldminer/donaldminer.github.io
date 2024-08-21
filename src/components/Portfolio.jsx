import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <div className="col-span-10 row-span-10 p-2">
      <div className="grid flex-none grid-flow-row place-content-evenly gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <PortfolioItem
            key={item.title}
            imgUrl={item.imgUrl}
            title={item.title}
            stack={item.stack}
            workUrl={item.workUrl}
          />
        ))}
      </div>
    </div>
  );
}

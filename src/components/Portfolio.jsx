import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <div className="grid flex-1 grid-flow-col grid-cols-3 place-content-evenly gap-4 p-2 sm:grid-flow-row sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-2 lg:grid-cols-3">
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
  );
}

import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <div className="grid h-full flex-1 grid-flow-col grid-cols-1 grid-rows-4 gap-4 p-2 sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-2">
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
  );
}

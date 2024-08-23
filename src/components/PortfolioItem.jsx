export default function PortfolioItem({ imgUrl, stack, title, workUrl }) {
  return (
    <a
      className="overflow-hidden bg-black bg-opacity-65 backdrop-blur-sm"
      href={workUrl}
      target="_blank"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="sm:h-15 w-full justify-center object-cover md:h-20 lg:h-36"
      />
      <div className="w-full p-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-1 text-xs">
          {stack.map((item) => (
            <span className="inline-block border-2 border-white border-opacity-50 bg-darkCream bg-opacity-70 px-2 py-1 text-white">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

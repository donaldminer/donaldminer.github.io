export default function PortfolioItem({
  imgUrl,
  stack,
  title,
  workUrl,
  description,
}) {
  return (
    <a
      className="grid grid-flow-row grid-cols-2 overflow-hidden bg-black bg-opacity-65 backdrop-blur-sm transition-transform duration-700 ease-in-out hover:z-20 hover:scale-125 hover:transform"
      href={workUrl}
      target="_blank"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="h-full object-cover object-center p-2"
      />
      <div className="flex h-full flex-col place-content-between p-4">
        <h3 className="text-end text-lg font-medium text-white">{title}</h3>
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

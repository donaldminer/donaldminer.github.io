import { About, Portfolio, Timeline, Contact } from "./index.js";
import { useState } from "react";

export default function NavList() {
  const [activePane, setActivePane] = useState();
  const [fade, setFade] = useState(false);
  const items = [
    { id: 0, text: "Home", pane: <></> },
    { id: 1, text: "About", pane: <About /> },
    { id: 2, text: "Portfolio", pane: <Portfolio /> },
    { id: 3, text: "Timeline", pane: <Timeline /> },
    { id: 4, text: "Contact", pane: <Contact /> },
  ];
  const handleClick = (pane) => {
    setActivePane(pane);
    setFade(false);
  };
  return (
    <>
      <ul className="text-md md:text-md col-span-12 grid grid-flow-col place-content-stretch justify-between px-2 py-0 font-medium sm:col-span-2 sm:row-span-10 sm:grid-flow-row sm:place-content-start sm:px-4 sm:py-2 sm:text-sm md:py-4">
        {items.map((item) => (
          <li
            className="cursor-pointer py-0 hover:text-black sm:py-1.5"
            key={item.id}
            onMouseDown={() => handleClick(item.pane)}
            onMouseUp={() => setFade(true)}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <section
        className={`col-span-12 row-span-10 place-content-start px-4 transition-opacity ease-out sm:row-span-10 sm:pb-4 md:col-span-10 md:place-content-center ${fade ? "transition-delay-200 opacity-100 duration-700" : "opacity-0 duration-0"}`}
      >
        {activePane}
      </section>
    </>
  );
}

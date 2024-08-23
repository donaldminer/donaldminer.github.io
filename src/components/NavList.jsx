import { About, Portfolio, Timeline, Contact } from "./index.js";
import { useState } from "react";

export default function NavList() {
  const [activePane, setActivePane] = useState();

  const items = [
    { id: 1, text: "About", pane: <About /> },
    { id: 2, text: "Portfolio", pane: <Portfolio /> },
    { id: 3, text: "Timeline", pane: <Timeline /> },
    { id: 4, text: "Contact", pane: <Contact /> },
  ];
  const handleClick = (pane) => {
    setActivePane(pane);
  };
  return (
    <>
      <ul className="col-span-2 row-span-11 grid w-fit place-content-center p-2 text-sm font-medium">
        {items.map((item) => (
          <li
            className="cursor-pointer py-1.5 hover:text-black"
            key={item.id}
            onClick={() => handleClick(item.pane)}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <section className="col-span-9 row-span-10 grid-cols-6 grid-rows-6">
        <div className="flex-1 flex-row bg-black bg-opacity-65 backdrop-blur-sm">
          {activePane}
        </div>
      </section>
    </>
  );
}

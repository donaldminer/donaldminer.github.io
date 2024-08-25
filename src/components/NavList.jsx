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
      <ul className="col-span-3 row-span-11 grid w-fit place-content-start p-4 text-sm font-medium sm:col-span-2">
        {items.map((item) => (
          <li
            className="cursor-pointer py-1.5 hover:text-black"
            key={item.id}
            onMouseDown={() => handleClick(item.pane)}
            onMouseUp={() => setFade(true)}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <section
        className={`col-span-9 row-span-10 place-content-center transition-opacity ease-out ${fade ? "transition-delay-200 opacity-100 duration-700" : "opacity-0 duration-0"}`}
      >
        {activePane}
      </section>
    </>
  );
}

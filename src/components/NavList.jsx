import { useState } from "react";
import { About } from "./index.js";

export default function NavList() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <ul className="fixed w-10 py-[30vh] text-sm font-medium">
        <section>
          {isActive ? (
            <About />
          ) : (
            <li
              className="w-full py-1 hover:text-black cursor-pointer"
              onClick={() => setIsActive(true)}
            >
              About
            </li>
          )}
        </section>
        <li className="w-full py-1 hover:text-black cursor-pointer">
          Portfolio
        </li>
        <li className="w-full py-1 hover:text-black cursor-pointer">
          Timeline
        </li>
        <li className="w-full py-1 hover:text-black cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}

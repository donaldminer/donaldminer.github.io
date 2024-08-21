import { About, Portfolio, Timeline, Contact } from "./index.js";

export default function NavList() {
  const items = [
    { id: 1, text: "About", pane: About },
    { id: 2, text: "Portfolio", pane: Portfolio },
    { id: 3, text: "Timeline", pane: Timeline },
    { id: 4, text: "Contact", pane: Contact },
  ];
  return (
    <>
      <ul className="col-span-2 row-span-11 grid w-fit place-content-center p-2 text-sm font-medium">
        {items.map((item) => (
          <li className="cursor-pointer py-1.5 hover:text-black" key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      <Portfolio />
    </>
  );
}

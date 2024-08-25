import { NavList } from "@components/index.js";

function App() {
  return (
    /*
     * TODO: Add breakpoints for mobile and desktop.
     * Background, Frame, and Grid need to be resized and take search bar into account.
     */
    <div
      id="Page"
      className="h-screen overflow-hidden bg-mountain bg-cover bg-fixed bg-top bg-no-repeat bg-origin-padding"
    >
      <div
        id="Frame"
        className="absolute h-screen w-screen self-center overflow-hidden p-4"
      >
        <div className="mt-auto grid h-full w-full grid-flow-col grid-cols-12 grid-rows-12 self-center border-2 border-white text-white">
          <div
            id="Heading"
            className="col-span-12 text-nowrap px-4 py-2 text-3xl font-semibold"
          >
            Rowan Miner
          </div>
          <NavList />
        </div>
      </div>
    </div>
  );
}

export default App;

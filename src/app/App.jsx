import { NavList } from "@components/index.js";

function App() {
  return (
    <div
      id="Page"
      className="bg-origin-margin h-screen overflow-hidden bg-mountain bg-cover bg-fixed bg-top bg-no-repeat"
    >
      <div
        id="Frame"
        className="absolute h-dvh w-dvw self-center overflow-hidden p-4 sm:h-screen sm:w-screen"
      >
        <div className="grid h-full w-full grid-flow-col grid-cols-12 grid-rows-12 self-center border-2 border-white text-white">
          <div
            id="Heading"
            className="col-span-12 text-nowrap pl-2 pt-1 text-3xl font-semibold sm:pl-4 sm:pt-2"
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

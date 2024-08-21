import { About, NavList, Portfolio } from "@components/index.js";

export default function Home() {
  return (
    <div
      id="Page"
      className="h-screen overflow-hidden bg-mountain bg-cover bg-fixed bg-no-repeat bg-origin-padding"
    >
      <div
        id="Frame"
        className="absolute h-screen w-screen self-center overflow-hidden p-4"
      >
        <div className="grid h-full w-full grid-flow-col grid-cols-12 grid-rows-12 self-center border-2 border-white text-white">
          <div
            id="Heading"
            className="col-span-12 text-nowrap p-2 text-3xl font-semibold"
          >
            Rowan Miner
          </div>
          <NavList />
          {/* <Portfolio /> */}
          {/*<Contact />
        <Footer />
        <Timeline /> */}
        </div>
      </div>
    </div>
  );
}

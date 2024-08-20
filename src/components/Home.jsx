import { About, NavList } from "@components/index.js";

export default function Home() {
  return (
    <div
      id="Page"
      className="bg-cover h-screen bg-mountain bg-no-repeat bg-fixed bg-origin-padding overflow-hidden"
    >
      <div
        id="Frame"
        className="overflow-hidden p-4 w-screen h-screen absolute self-center"
      >
        <div className="self-center border-white border-2 w-full h-full" />
      </div>
      <section className="px-7 py-5 text-white flex flex-col">
        <div id="Heading" className="text-nowrap text-3xl font-semibold">
          Rowan Miner
        </div>
        <NavList />
        {/*<Portfolio />
        <Contact />
        <Footer />
        <Timeline /> */}
      </section>
    </div>
  );
}

import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import NavList from "../components/NavList";
function App() {
  return (
    <div className="bg-cover h-screen bg-mountain bg-no-repeat bg-fixed bg-origin-padding">
      <section className="text-white flex flex-col border-white w-[95vw] h-[95vh] border-solid border-2">
        <p className="px-4 py-4 text-nowrap text-3xl font-bold">Rowan Miner</p>
        <NavList />
        {/* <Intro />
        <Portfolio />
        <Contact />
        <Footer />
        <Timeline /> */}
      </section>
    </div>
  );
}

export default App;

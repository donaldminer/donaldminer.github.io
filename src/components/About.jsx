export default function About() {
  return (
    <div className="flex h-full flex-col text-pretty bg-black bg-opacity-75 backdrop-blur-sm">
      <h1 className="py-1 text-center text-2xl font-bold text-darkCream md:py-4 md:text-3xl">
        About Me
      </h1>
      <div className="appearance-none content-center overflow-y-scroll scroll-smooth p-4">
        <h2 className="text-xl font-semibold text-lightCream">Background:</h2>
        My name is Rowan Miner, I have received a Bachelor&apos;s of Science in
        Computer Science from the University of San Francisco in Fall of 2022.
        Throughout my undergraduate career I have worked on a range of projects
        including a full-stack multi-threaded search engine and web crawler,
        designing a CPU for ARMv7 architecture, and creating a VR port of a
        Way-finding application for the University of San Francisco’s Military
        Science program.
        <br />
        <br />
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="text-start">
            <h2 className="text-xl font-semibold text-lightCream">
              Language experience:
            </h2>
            <ul className="grid grid-cols-2">
              <img
                id="ARM"
                src="https://img.shields.io/badge/ARM_Assembly-316B7A?style=for-the-badge&logo=arm&logoColor=E2EBCE"
              />
              <img
                id="C"
                src="https://img.shields.io/badge/C-316B7A?style=for-the-badge&logo=c&logoColor=E2EBCE"
              />
              <img
                id="C++"
                src="https://img.shields.io/badge/C++-4F9AA7?style=for-the-badge&logo=c%2B%2B&logoColor=E2EBCE"
              />
              <img
                id="C#"
                src="https://img.shields.io/badge/C%23-4F9AA7?style=for-the-badge&logo=c-sharp&logoColor=E2EBCE"
              />
              <img
                id="CSS3"
                src="https://img.shields.io/badge/CSS3-C0BB79?style=for-the-badge&logo=css3&logoColor=E2EBCE"
              />
              <img
                id="HTML5"
                src="https://img.shields.io/badge/HTML5-C0BB79?style=for-the-badge&logo=html5&logoColor=E2EBCE"
              />
              <img
                id="JavaScript"
                src="https://img.shields.io/badge/JavaScript-9B9264?style=for-the-badge&logo=javascript&logoColor=E2EBCE"
              />
              <img
                id="Lua"
                src="https://img.shields.io/badge/Lua-9B9264?style=for-the-badge&logo=lua&logoColor=E2EBCE"
              />
              <img
                id="OCaml"
                src="https://img.shields.io/badge/OCaml-706244?style=for-the-badge&logo=ocaml&logoColor=E2EBCE"
              />
              <img
                id="OpenJDK"
                src="https://img.shields.io/badge/OpenJDK-706244?style=for-the-badge&logo=openjdk&logoColor=E2EBCE"
              />
              <img
                id="Prolog"
                src="https://img.shields.io/badge/Prolog-4D5A55?style=for-the-badge&logo=prolog&logoColor=E2EBCE"
              />
              <img
                id="Python"
                src="https://img.shields.io/badge/Python-4D5A55?style=for-the-badge&logo=python&logoColor=E2EBCE"
              />
              <img
                id="MySQL"
                src="https://img.shields.io/badge/MySQL-383634?style=for-the-badge&logo=mysql&logoColor=E2EBCE"
              />
            </ul>
          </div>
          <div className="text-start">
            <h2 className="text-xl font-semibold text-lightCream">
              Tools and Technologies experience:
            </h2>
            <ul className="grid grid-cols-2">
              <img
                id="D3.js"
                src="https://img.shields.io/badge/D3.js-316B7A?style=for-the-badge&logo=d3.js&logoColor=E2EBCE"
              />
              <img
                id="Digital Circut Design"
                src="https://img.shields.io/badge/Digital%20Circut%20Design-316B7A?style=for-the-badge&logo=digital-circuit-design&logoColor=E2EBCE"
              />
              <img
                id="Jetty"
                src="https://img.shields.io/badge/Jetty-4F9AA7?style=for-the-badge&logo=jetty&logoColor=E2EBCE"
              />
              <img
                id="KVM"
                src="https://img.shields.io/badge/KVM-4F9AA7?style=for-the-badge&logo=kvm&logoColor=E2EBCE"
              />
              <img
                id="ArchLinux"
                src="https://img.shields.io/badge/ArchLinux-C0BB79?style=for-the-badge&logo=archlinux&logoColor=E2EBCE"
              />
              <img
                id="Node.js"
                src="https://img.shields.io/badge/Node.js-C0BB79?style=for-the-badge&logo=node.js&logoColor=E2EBCE"
              />
              <img
                id="p5.js"
                src="https://img.shields.io/badge/p5.js-9B9264?style=for-the-badge&logo=p5.js&logoColor=E2EBCE"
              />
              <img
                id="Raspberry Pi"
                src="https://img.shields.io/badge/Raspberry%20Pi-9B9264?style=for-the-badge&logo=raspberrypi&logoColor=E2EBCE"
              />
              <img
                id="React"
                src="https://img.shields.io/badge/React-706244?style=for-the-badge&logo=react&logoColor=E2EBCE"
              />
              <img
                id="TailwindCSS"
                src="https://img.shields.io/badge/TailwindCSS-706244?style=for-the-badge&logo=tailwindcss&logoColor=E2EBCE"
              />
              <img
                id="Unity"
                src="https://img.shields.io/badge/Unity-4D5A55?style=for-the-badge&logo=unity&logoColor=E2EBCE"
              />
              <img
                id="Vite"
                src="https://img.shields.io/badge/Vite-4D5A55?style=for-the-badge&logo=vite&logoColor=E2EBCE"
              />
              <img
                id="WordPress"
                src="https://img.shields.io/badge/WordPress-383634?style=for-the-badge&logo=wordpress&logoColor=E2EBCE"
              />
            </ul>
          </div>
        </div>
        <br />
        <h2 className="text-xl font-semibold text-lightCream">
          Personal Interests:
        </h2>
        I am passionate about environmental issues and community based volunteer
        work with a focus on social issues. I love the outdoors and enjoy it
        best when I am climbing, hiking, camping, shooting photography, or just
        soaking in the sun.
      </div>
    </div>
  );
}

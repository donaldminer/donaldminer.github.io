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
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
              <li>ARM Assembly</li>
              <li>Lua</li>
              <li>HTML/CSS</li>
              <li>SQL</li>
              <li>OCaml</li>
              <li>Prolog</li>
            </ul>
          </div>
          <div className="text-start">
            <h2 className="text-xl font-semibold text-lightCream">
              Tools and Technologies experience:
            </h2>
            <ul className="grid grid-cols-2">
              <li>React</li>
              <li>Node.js</li>
              <li>D3.js</li>
              <li>p5.js</li>
              <li>Digital Circut Design</li>
              <li>Raspberry Pi</li>
              <li>Linux</li>
              <li>Jetty</li>
              <li>KVM</li>
              <li>Unity</li>
              <li>WordPress</li>
              <li>TailwindCSS</li>
              <li>Vite</li>
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

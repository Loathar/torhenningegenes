import Image from "next/image";
import Link from "next/link";
import torhenning from "../img/torhenning.webp";
import tellelisten from "../img/tellelistenSM.png";
import kvistbyegenes from "../img/kvistbyegenesSM.png";
import githubLogo from "../img/GitHub-32px.png";
export default function Prosjekter() {
  return (
    <section
      className="container text-gray-700 mt-20 mb-28 flex flex-col items-center justify-center mx-auto min-h-screen"
      id="prosjekter"
    >
      <h1 className="text-center text-2xl uppercase  mb-8">Siste prosjekter</h1>
      <div className="flex  flex-col md:flex-row justify-between items-center max-w-3xl">
        <div className="project w-96 h-96 m-2 bg-white p-2 flex flex-col justify-between items-center border-2 border-black shadow">
          <h1 className="text-xl">Telleliste for barnehage</h1>

          <Image src={tellelisten} className="rounded-2xl" />
          <div className="flex flex-row justify-between items-center align-middle">
            <Link href="https://tellelisten.netlify.app">
              <button className="bg-gray-900 text-gray-50 p-2 h-12  w-36 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase rounded">
                Live
              </button>
            </Link>

            <Link href="https://github.com/Loathar/telleliste">
              <button className="bg-gray-900 text-gray-50 p-2 h-12  w-36 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase rounded">
                <div className="flex flex-row align-middle items-center justify-around">
                  <p className="mr-3">Kode</p>
                  <div className="h-8 w-8">
                    <Image
                      src={githubLogo}
                      className="relative"
                      layout="responsive"
                      style={{ position: "relative" }}
                    />
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="project w-96 h-96 m-2 bg-white p-2 flex flex-col justify-between items-center border-2 border-black shadow">
          <h1 className="text-xl">Kvist by Egenes</h1>

          <Image src={kvistbyegenes} className="rounded-2xl " />
          <div className="flex flex-row justify-between items-center align-middle">
            <Link href="https://tellelisten.netlify.app">
              <button className="bg-gray-900 text-gray-50 p-2 h-12 w-36 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase rounded">
                Live
              </button>
            </Link>

            <Link href="https://github.com/Loathar/telleliste">
              <button className="bg-gray-900 text-gray-50 p-2 h-12 w-36 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase rounded">
                <div className="flex flex-row align-middle items-center justify-around">
                  <p className="mr-3">Kode</p>
                  <div className="h-8 w-8">
                    <Image
                      src={githubLogo}
                      className="relative"
                      layout="responsive"
                      style={{ position: "relative" }}
                    />
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

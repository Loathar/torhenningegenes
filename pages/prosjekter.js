import Image from "next/image";
import Link from "next/link";
import torhenning from "../img/torhenning.webp";
import tellelisten from "../img/tellelistenSM.png";
import kvistbyegenes from "../img/kvistbyegenesSM.png";
import githubLogo from "../img/GitHub-32px.png";
export default function Prosjekter() {
  return (
    <section
      className="prosjekter text-gray-700 mt-11 flex flex-col items-center justify-center mx-auto"
      id="prosjekter"
    >
      <h1 className="text-center text-2xl uppercase ">Siste prosjekter</h1>
      <div className="flex  flex-col md:flex-row justify-around bg-pink-300 items-center max-w-3xl">
        <div className="project w-96 h-96 m-2">
          <h1>Telleliste for barnehage</h1>

          <Image src={tellelisten} className="rounded-2xl" />
          <div className="flex flex-row justify-between items-center align-middle">
            <Link href="https://tellelisten.netlify.app">
              <button className="bg-gray-900 text-gray-50 px-16 py-3 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase">
                Live
              </button>
            </Link>

            <Link href="https://github.com/Loathar/telleliste">
              <button className="bg-gray-900 text-gray-50   px-14 py-4 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase">
                <div className="flex flex-row align-middle items-center justify-between">
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

        <div className="project w-96 h-96 m-2">
          <h1>Kvist by Egenes</h1>

          <Image src={kvistbyegenes} className="rounded-2xl " />
          <div className="flex flex-row justify-between items-center align-middle">
            <Link href="https://tellelisten.netlify.app">
              <button className="bg-gray-900 text-gray-50 px-16 py-3 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase">
                Live
              </button>
            </Link>

            <Link href="https://github.com/Loathar/telleliste">
              <button className="bg-gray-900 text-gray-50   px-14 py-4 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase">
                <div className="flex flex-row align-middle items-center justify-between">
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

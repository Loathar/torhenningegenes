import Image from "next/image";
import Link from "next/link";
import torhenning from "../img/torhenning.webp";
import tellelisten from "../img/tellelistenSM.png";
export default function Prosjekter() {
  return (
    <section
      className="prosjekter text-gray-700 mt-11 w-96 flex flex-col items-center justify-center mx-auto"
      id="prosjekter"
    >
      <h1 className="text-center text-2xl uppercase ">Siste prosjekter</h1>
      <div className="flex flex-row justify-around bg-pink-300 items-center">
        <div className="m-4 min-w-min">
          <h1>Telleliste for barnehage</h1>

          <Image src={tellelisten} className="rounded-2xl " />
          <div className="flex flex-row justify-between items-center align-middle">
            <Link href="https://tellelisten.netlify.app">
              <button className="bg-gray-900 text-gray-50 px-16 py-3 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase">
                Live
              </button>
            </Link>

            <Link href="https://github.com/Loathar/telleliste">
              <button className="bg-gray-900 text-gray-50 px-16 py-3 hover:bg-pink-600 hover:text-gray-50 transition-colors duration-300 ease-out mr-5 uppercase">
                Kode
              </button>
            </Link>
          </div>
        </div>

        <div className="m-4">
          <h1>Kvist by Egenes</h1>{" "}
        </div>
        <div className="m-4">
          <h1>Statisk side</h1>{" "}
        </div>
      </div>
    </section>
  );
}

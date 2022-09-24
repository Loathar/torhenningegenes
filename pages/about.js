import Image from "next/image";
import torhenningPortrett from "../img/torhenning.webp";
import htmlLogo from "../img/logo/html5.png";
import cssLogo from "../img/logo/css.png";
import jsLogo from "../img/logo/javascript.png";
import reactLogo from "../img/logo/react.png";
import nextLogo from "../img/logo/nextjs.png";
import tailwindLogo from "../img/logo/tailwind.png";
import tsLogo from "../img/logo/typescript.png";
import firebaseLogo from "../img/logo/firebase.png";

export default function About() {
  return (
    <>
      <section className="container mx-auto text-center flex flex-col items-center text-gray-900 min-h-screen mt-20 mb-28">
        <h1 className="text-gray-900 text-3xl uppercase tracking-wider mt-6">
          Hvem er Tor henning?
        </h1>

        <div className="h-56 flex flex-col md:flex-row  items-start justify-start align-middle mt-12 mb-16  ">
          <div className=" w-72 h-72  mb-4 m-2">
            <Image src={torhenningPortrett} layout="responsive" />
          </div>
          <div className="flex flex-col mb-24 h-80 w-80 m-2 leading-relaxed ">
            <p className=" ">
              Jeg er 37 år gammel sørlending bosatt i Oslo. Jeg har kodet siden
              2020 og elsker det! Trives best når jeg utvikler web aplikasjoner
              med NextJS og Tailwind CSS.
            </p>
            <span className="mt-1">
              Ta kontakt hvis jeg kan hjelpe deg med noe!
            </span>
            <span className="mt-8 font-semibold tracking-wider">
              Tor Henning Egenes
            </span>
          </div>
        </div>
        <div className="mt-12">
          <h1 className="text-gray-900 text-3xl uppercase tracking-wider mt-56 md:mt-16 mb-8">
            Egenskaper
          </h1>
          <div className="">
            <ul className="flex flex-col md:flex-row md:justify-between md:flex-wrap text-center items-center align-middle">
              <li className="">
                <div className="m-4 w-16 h-16 ">
                  <Image
                    src={htmlLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0"
                  />
                </div>
                <span className="">HTML</span>
              </li>

              <li className="">
                <div className="m-4  w-14 h-16 ">
                  <Image
                    src={cssLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0"
                  />
                </div>
                <span>CSS</span>
              </li>
              <li>
                <div className="m-4 w-20 h-16 ">
                  <Image
                    src={jsLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0"
                  />
                </div>
                JavaScript
              </li>

              <li>
                <div className="m-4 w-20 h-16">
                  <Image
                    src={tsLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0"
                  />
                </div>
                TypeScript
              </li>

              <li>
                <div className="m-4 w-16 h-16 ">
                  <Image
                    src={reactLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0 "
                  />
                </div>
                <span className="mt-2">ReactJS</span>
              </li>
              <li>
                <div className="m-4 w-16 h-16 ">
                  <Image
                    src={nextLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0 p-2 "
                  />
                </div>
                <span className="mt-2">NextJS</span>
              </li>

              <li>
                <div className="m-4 w-16 h-16">
                  <Image
                    src={tailwindLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0 p-2 "
                  />
                </div>
                <span className="mt-2">tailwind CSS</span>
              </li>

              <li>
                <div className="m-4 w-14 h-16">
                  <Image
                    src={firebaseLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0 p-2 "
                  />
                </div>
                <span className="mt-2">Firebase</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

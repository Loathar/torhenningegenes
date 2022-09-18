import Image from "next/image";
import torhenningPortrett from "../img/torhenning.webp";
import htmlLogo from "../img/logo/html5.png";
import cssLogo from "../img/logo/css.png";
import jsLogo from "../img/logo/javascript.png";
import reactLogo from "../img/logo/react.png";
import nextLogo from "../img/logo/nextjs.png";
import tailwindLogo from "../img/logo/tailwind.png";
import npmLogo from "../img/logo/npm.png";
import firebaseLogo from "../img/logo/firebase.png";

export default function About() {
  console.log("hei");

  return (
    <>
      <section className="container mx-auto text-center flex flex-col items-center text-gray-900 min-h-screen mt-20 mb-28">
        <h1 className="text-gray-900 text-3xl uppercase tracking-wider mt-6">
          Hvem er Tor henning?
        </h1>

        <div className="h-56 flex flex-row items-start justify-start align-middle mt-12 mb-16  ">
          <div className=" w-72 h-72  mb-4 m-2">
            <Image src={torhenningPortrett} layout="responsive" />
          </div>
          <p className="text-gray-900 mb-24 h-80 w-80 m-2 ">
            Her skal det stå fornuftig tekst om drømmer håp og visjoner. Litt om
            læring. koding og annet smart. quis deserunt ullamco nostrud
            laborum. Adipisicing anim ad irure enim excepteur consequat. Tempor
            qui ullamco dolor id laboris excepteur ea irure voluptate nulla
            tempor elit nisi consequat. Occaecat occaecat aliqua sint elit
            labore minim exercitation exercitation exercitation. Commodo anim
            pariatur incididunt Lorem dolor sunt esse aliquip.
          </p>
        </div>
        <div className="mt-12">
          <h1 className="text-gray-900 text-3xl uppercase tracking-wider mt-16 mb-8">
            Egenskaper
          </h1>
          <div className="">
            <ul className="flex flex-row justify-between flex-wrap text-center items-center align-middle">
              <li className="m-4 w-16 h-16 ">
                <Image
                  src={htmlLogo}
                  layout="responsive"
                  className="grayscale hover:grayscale-0"
                />
                HTML
              </li>
              <li className="m-4  w-14 h-16 ">
                <Image
                  src={cssLogo}
                  layout="responsive"
                  className="grayscale hover:grayscale-0"
                />
                CSS
              </li>
              <li className="m-4 w-20 h-16 ">
                <Image
                  src={jsLogo}
                  layout="responsive"
                  className="grayscale hover:grayscale-0"
                />
                JavaScript
              </li>
              <li className="m-4 w-16 h-16 ">
                <div>
                  <Image
                    src={reactLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0 "
                  />
                </div>
                <span className="mt-2">ReactJS</span>
              </li>
              <li className="m-4 w-16 h-16 ">
                <div>
                  <Image
                    src={nextLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0 p-2 "
                  />
                </div>
                <span className="mt-2">NextJS</span>
              </li>
              <li className="m-4 w-16 h-16 ">
                <div>
                  <Image
                    src={tailwindLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0 p-2 "
                  />
                </div>
                <span className="mt-2">tailwind CSS</span>
              </li>
              <li className="m-4 w-16 h-16 ">
                <div>
                  <Image
                    src={npmLogo}
                    layout="responsive"
                    className="grayscale hover:grayscale-0 p-2 "
                  />
                </div>
                <span className="mt-2">NPM</span>
              </li>
              <li className="m-4 w-14 h-14 ">
                <div>
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

import Image from "next/image";
import torhenningPortrett from "../img/torhenning.webp";
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
          <p className="text-gray-900 mb-24 h-80 w-80 m-2">
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
          <h1 className="text-gray-900 text-3xl uppercase tracking-wider mt-6">
            Egenskaper
          </h1>
          <div className="">
            <ul className="flex flex-row justify-between flex-wrap">
              <li className="m-4">HTML</li>
              <li className="m-4">CSS</li>
              <li className="m-4">JavaScript</li>
              <li className="m-4">TypeScript</li>
              <li className="m-4">ReactJS</li>
              <li className="m-4">NextJS</li>
              <li className="m-4">Tailwind CSS</li>
              <li className="m-4">GitHub</li>
              <li className="m-4">NPM</li>
              <li className="m-4">Netlify</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Prosjekter() {
  return (
    <section className="prosjekter text-gray-700 mt-11 w-96" id="prosjekter">
      <div className="min-h-full min-w-full">
        <img src="../public/img/torhenning.webp" />
      </div>
      <h1 className="text-center uppercase ">Siste prosjekter</h1>
      <div className="container flex flex-row justify-between ">
        <div className="m-4 h-11 w-11">
          <h1>Telleliste for barnehage</h1>{" "}
          <Link href="https://tellelisten.netlify.app">Klikk her</Link>
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

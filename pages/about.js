import Image from "next/image";
import torhenningPortrett from "../img/torhenning.webp";
export default function About() {
  console.log("hei");

  return (
    <section className="container mx-auto text-center">
      <h1 className="uppercase">Om</h1>
      <Image src={torhenningPortrett} />
      <p>
        Consectetur culpa adipisicing fugiat sunt do consequat officia quis
        aute. Cupidatat aliqua esse veniam voluptate nostrud aliqua et veniam
        quis deserunt ullamco nostrud laborum. Adipisicing anim ad irure enim
        excepteur consequat. Tempor qui ullamco dolor id laboris excepteur ea
        irure voluptate nulla tempor elit nisi consequat. Occaecat occaecat
        aliqua sint elit labore minim exercitation exercitation exercitation.
        Commodo anim pariatur incididunt Lorem dolor sunt esse aliquip.
      </p>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import twitterLogo from "../img/logo/twitter.png";

export default function Kontakt() {
  return (
    <>
      <section className="flex flex-col items-center mt-28" id="kontakt">
        <p>La oss snakke sammen!</p>

        <ul className="flex flex-col items-center">
          <li className="flex flex-row justify-around">
            <span className="material-symbols-outlined text-gray-900 mr-2">
              mail
            </span>
            <span>tor.henning.egenes@gmail.com</span>
          </li>
          <li className="flex flex-row align-middle items-center">
            <Link
              href="https://www.twitter.com/tor_henning"
              className="cursor-pointer"
            >
              <div className="m-4 w-14 h-14 ">
                <Image
                  src={twitterLogo}
                  layout="responsive"
                  className="cursor-pointer"
                />
              </div>
            </Link>
            <Link
              href="https://www.twitter.com/tor_henning"
              className="cursor-pointer"
            >
              <span className="cursor-pointer">Twitter</span>
            </Link>
          </li>
          <li>GitHub</li>
        </ul>
      </section>
      ;
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import twitterLogo from "../img/logo/twitter.png";
import githubLogo from "../img/logo/github.png";

export default function Kontakt() {
  return (
    <>
      <section className="flex flex-col items-center mt-28" id="kontakt">
        <p className="text-2xl mb-8">La oss snakke sammen!</p>

        <ul className="flex flex-col items-center">
          <li className="flex flex-row justify-around">
            <a
              href="mailto:tor.henning.egenes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-gray-900 mr-2 h-6 w-6">
                mail
              </span>
            </a>

            <a
              href="mailto:tor.henning.egenes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Send meg en epost!</span>
            </a>
          </li>

          <li className="flex flex-row align-middle items-center">
            <a
              href="https://www.twitter.com/tor_henning "
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="m-4 w-14 h-14 ">
                <Image
                  src={twitterLogo}
                  layout="responsive"
                  className="cursor-pointer"
                />
              </div>
            </a>
            <a
              href="https://www.twitter.com/tor_henning "
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <span className="block">Twitter</span>{" "}
            </a>
          </li>
          <li className="flex flex-row align-middle items-center">
            <a
              href="https://github.com/Loathar"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="m-4 w-14 h-14 ">
                <Image
                  src={githubLogo}
                  layout="responsive"
                  className="cursor-pointer"
                />
              </div>
            </a>
            <a
              href="https://github.com/Loathar"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <span className="block">GitHub</span>
            </a>
          </li>
        </ul>
      </section>
      ;
    </>
  );
}

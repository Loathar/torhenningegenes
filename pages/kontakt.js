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
          <li>Twitter</li>
          <li>GitHub</li>
        </ul>
      </section>
      ;
    </>
  );
}

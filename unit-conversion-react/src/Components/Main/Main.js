import { Link } from "react-router-dom";

function Main() {
  return (
    <section className="min-h-screen min-w-fit bg-dkblue">
      <h1 className="py-10  text-center font-Mono text-7xl text-aqua hover:text-hotmag">
        Unit Convertors
      </h1>
      <div className="space mx-auto flex w-3/4 flex-row flex-wrap justify-around gap-10 rounded-2xl bg-aqua p-10 font-Oxygen text-white">
        <Link to="/Currency">
          <button className="rounded-xl bg-magenta p-5 hover:bg-hotmag">
            Currency Convertor
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Main;

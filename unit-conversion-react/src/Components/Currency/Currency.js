function Currency() {
  return (
    <section className="min-h-screen min-w-fit bg-dkblue">
      <h1 className="py-10  text-center font-Mono text-7xl text-aqua hover:text-hotmag">
        Currency Convertor
      </h1>
      <div className="mx-auto flex w-1/2 gap-5 rounded-2xl bg-aqua p-10 font-Oxygen text-white">
        <div className="w-1/2 rounded-xl bg-magenta p-5 hover:bg-hotmag">
          <select className="m-1 h-10 w-full bg-plum"></select>
          <input typeof="numbers" className="m-1 h-10 w-full bg-plum"></input>
        </div>
        <div className="w-1/2 rounded-xl bg-magenta p-5 hover:bg-hotmag">
          <select className="m-1 h-10 w-full bg-plum"></select>
          <input typeof="numbers" className="m-1 h-10 w-full bg-plum"></input>
        </div>
      </div>
    </section>
  );
}

export default Currency;

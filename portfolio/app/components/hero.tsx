export default function Hero() {

  return (
    <section className="grid gap-4 grid-cols-12 grid-rows-6 h-screen bg-amber-500">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
        <h1 className="text-6xl p-5 bg-black">My name is David Mason</h1>
        <h2 className="text-4xl bg-black p-5 ">Welcome to my Portfolio</h2>
      </div>
      <div className="w-20 h-20 bg-black rotate-45 self-center justify-self-center col-start-3 row-start-3"></div>
      <div className={`w-20 h-20 bg-black rotate-45 self-center justify-self-center col-start-8 row-start-5`}></div>
    </section>
  );
}

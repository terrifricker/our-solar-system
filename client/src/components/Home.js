export const Home = () => {
  return (
    <div className="container bg-gray-100 mx-auto">
      <header className="bg-blue-200 text-center text-blue-600 p-4">
        header
      </header>
      <section className="grid grid-cols-4 gap-2 h-96 mb-36 p-4">
        <aside className="bg-white text-right shadow-md p-4">aside</aside>
        <main className="col-span-3 bg-white text-center font-semibold shadow-md p-4">
          <h1 className="text-5xl">
            NASA API
            <br />
            <span className="font-extralight font-sans text-black text-xl">
              Escape Into the Cosmos
            </span>
          </h1>
        </main>
      </section>
      <section className="container-fluid bg-gray-300">
        <footer
          className="
            bg-gray-300
            font-light
            flex
            justify-between
            items-center
            max-w-3xl
            mx-auto
            border-b
          "
        >
          <div className="flex items-center">
            <p className="text-gray-500 inline-block p-3">footer©2021</p>
          </div>
          <div>
            <p
              className="
                text-gray-500
                hover:text-black
                inline-block
                p-3
                transition
                ease-in
                duration-200
                cursor-pointer
              "
            >
              ver 1.0 — terri, moysser, canttell, freddy, blackcat
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

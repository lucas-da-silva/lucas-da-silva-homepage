function HomeTitle() {
  return (
    <div className="flex flex-col content-center lg:flex-row">
      <div className="order-1 lg:order-0 lg:mr-5 lg:w-9/12 xl:max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 lg:text-5xl">
          Desenvolvedor Full Stack
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Sou o Lucas, um desenvolvedor Full Stack morando no Amapá. Sou
          apaixonado por tecnologias, estou sempre estudando e desenvolvendo
          aplicações, sendo meu objetivo desenvolver aplicações que impactam
          positivamente e agregam valor a quem as consome.
        </p>
      </div>
      <div className="flex order-0 lg:order-1 ml-3 mb-5 lg:ml-0 lg:w-1/4 lg:justify-center">
        <img
          className="w-24 h-24 md:w-32 md:h-32 left-0 top-3 transition-opacity rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
          src="/self/photo-1.png"
          alt="Lucas da Silva"
        />
      </div>
    </div>
  );
}

export default HomeTitle;

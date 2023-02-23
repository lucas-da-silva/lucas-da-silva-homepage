function Biography() {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-8">
      <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-5">
        Biografia
      </h3>
      <div className="flex flex-col text-zinc-600 dark:text-zinc-400 space-y-0.5">
        <div className="flex">
          <span className="mr-4 font-semibold">2001</span>
          <p className="max-w-5xl">Nasci no Amapá, Brasil.</p>
        </div>
        <div className="flex">
          <span className="mr-4 font-semibold">2020</span>
          <p className="max-w-5xl">
            Comecei a estudar programação de forma autônoma, por cursos e
            conteúdos disponíveis na internet
          </p>
        </div>
        <div className="flex">
          <span className="mr-4 font-semibold">2023</span>
          <p className="max-w-5xl">
            Me profissionalizei em desenvolvimento web através da Trybe
          </p>
        </div>
        <div className="flex">
          <span className="mr-4 font-semibold">Presente</span>
          <p className="max-w-5xl">
            Trabalho como freelancer e busco trabalho como desenvolver
          </p>
        </div>
      </div>
    </div>
  );
}

export default Biography;

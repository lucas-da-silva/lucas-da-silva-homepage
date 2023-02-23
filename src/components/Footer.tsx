import Navbar from './Navbar';

function Footer() {
  return (
    <div className="w-full">
      <hr className="border-zinc-100 p-4 dark:border-zinc-700/40" />
      <div className="flex flex-col md:flex-row items-center justify-between lg:px-10 px-4">
        <Navbar />
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-6 md:mt-0">
          © 2023 Lucas da Silva. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;

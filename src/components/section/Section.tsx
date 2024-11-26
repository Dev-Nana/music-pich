import { FaCheck } from "react-icons/fa6";

export const Section = () => {
  return (
    <div className="w-screen justify-center flex">
      <div className="absolute md:top-[119vh] top-[100vh] sm:w-11/12 w-10/12 sm:p-16 py-10 px-8 md:h-[18.5rem] bg-gray-960/45 backdrop-blur-xl flex flex-col rounded-[2rem] items-center justify-between">
        <div className="text-center gap-3 md:gap-0 flex flex-col flex-wrap items-center md:h-[7rem] h-8rem justify-between">
          <p className="sm:w-[37rem] sm:text-[1.8rem] leading-tight text-white font-medium font-poppins">
            Downloads de música para todos os seus empreendimentos criativos
          </p>
          <p className="md:w-[42rem] sm:text-[1.1rem] text-[.8rem] text-gray-400 font-poppins">
            Liberte-se com nossos downloads de música, perfeitos para qualquer
            hora.
          </p>
        </div>
        <div className="lg:w-[67vw] md:w-[80vw] flex-row justify-between text-xl md:flex hidden">
          <p className="text-white flex gap-3 items-center font-poppins"><FaCheck className="text-purple-150" />Youtube</p>
          <p className="text-white flex gap-3 items-center font-poppins"><FaCheck className="text-purple-150" />Instagram</p>
          <p className="text-white flex gap-3 items-center font-poppins"><FaCheck className="text-purple-150" />Tiktok</p>
          <p className="text-white flex gap-3 items-center font-poppins"><FaCheck className="text-purple-150" />Jogos</p>
          <p className="text-white flex gap-3 items-center font-poppins"><FaCheck className="text-purple-150" />Comerciais</p>
        </div>
      </div>
    </div>
  );
};
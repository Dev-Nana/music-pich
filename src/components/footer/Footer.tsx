import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import Logo from "../../assets/images/image-logo.png";

export const Footer = () => {
  return (
    <div className="flex w-screen flex-col bg-purple-1000">
      <div className="flex md:flex-row flex-col justify-between items-center py-8 xl:px-20 lg:px-10 md:px-5 text-xs gap-y-10">
        <div className="flex flex-col w-[40%] h-1/2 md:items-start items-center text-gray-300">
          <img src={Logo} className="w-36 py-3"/>
          <p className="leading-5 w-80 md:text-left text-center">
            DumyMusic é a fonte de música livre de royalties. Eleve seus projetos
            com nossa coleção diversa. Simplifique seu processo de licenciamento e
            libere sua criatividade. Junte-se a nós hoje!
          </p>
        </div>
        <div className="flex gap-y-5 md:gap-y-1 md:flex-row md:text-left text-center flex-col items-center md:justify-between md:w-[55%] lg:w-[50%] sm:">
          <div className="flex flex-col gap-y-3">
            <p className="text-gray-500 text-sm py-2">Produtos</p>
            <p className="text-gray-300">Vocal</p>
            <p className="text-gray-300">Instrumental</p>
            <p className="text-gray-300">Categoria</p>
            <p className="text-gray-300">Licenciamento</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-gray-500 text-sm py-2">Suporte</p>
            <p className="text-gray-300">FAQ</p>
            <p className="text-gray-300">Contate-nos</p>
            <p className="text-gray-300">Política de Privacidade</p>
            <p className="text-gray-300">Termos de Uso</p>
          </div>
          <div className="flex flex-col lg:w-60 md:w-32 w-52 items-center md:items-start gap-y-3 text-gray-300">
            <p className="text-gray-500 text-sm py-2">Mídia Social</p>
            <p>Para atualizações e notícias, siga nossos feeds de mídia social</p>
            <div className="flex text-lg flex-row gap-x-3 items-center">
              <FaYoutube />
              <RiInstagramFill />
              <FaFacebookF />
              <FaTwitter />
              <MdMail />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-950 justify-center py-5">
        <p className="text-xs text-gray-500">Copyright © Musicalogia.com</p>
      </div>
    </div>
  );
};
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import Logo from "../../assets/images/image-logo.png";

export const Footer = () => {
  return (
    <div className="flex w-screen flex-col bg-purple-1000">
      <div className="flex flex-row justify-between items-start py-16 px-20">
        <div className="flex flex-col justify-start w-96 h-1/2 bg-blue-500">
          <img src={Logo} className="w-40"/>
          <p className="text-sm text-white">
            DumyMusic é a fonte de música livre de royalties. Eleve seus projetos
            com nossa coleção diversa. Simplifique seu processo de licenciamento e
            libere sua criatividade. Junte-se a nós hoje!
          </p>
        </div>
        <div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Produtos</p>
            <p className="text-sm text-white">Vocal</p>
            <p className="text-sm text-white">Instrumental</p>
            <p className="text-sm text-white">Categoria</p>
            <p className="text-sm text-white">Licenciamento</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Suporte</p>
            <p className="text-sm text-white">FAQ</p>
            <p className="text-sm text-white">Contate-nos</p>
            <p className="text-sm text-white">Política de Privacidade</p>
            <p className="text-sm text-white">Termos de Uso</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Mídia Social</p>
            <p className="text-sm text-white">Para atualizações e notícias, siga nossos feeds de mídia social</p>
            <div className="flex flex-row text-white">
              <FaYoutube />
              <RiInstagramFill />
              <FaFacebookF />
              <FaTwitter />
              <MdMail />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-white">Copyright © Musicalogia.com</p>
      </div>
    </div>
  );
};

import { Filter, Albuns } from "../../components"

export const Gallery = () => {
  return (
    // aqui fica a estrutura de todo o corpo
    <div className="w-screen flex justify-center items-center bg-gray-950 py-64">
      <div className="flex flex-row w-11/12 gap-10">
        <Filter />
        <Albuns />
      </div>
    </div>
  );
}

import { Filter, Albuns } from "../../components"

export const Gallery = () => {
  return (
    // aqui fica a estrutura de todo o corpo
    <div className="bg-gray-950 py-52 flex flex-row">
      <Filter />
      <Albuns />
    </div>
  );
}

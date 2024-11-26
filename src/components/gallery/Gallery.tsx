import { Filter, Albuns } from "../../components"

export const Gallery = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-gray-950 sm:py-64 py-40">
      <div className="flex flex-row w-11/12 lg:gap-10">
        <Filter />
        <Albuns />
      </div>
    </div>
  );
}

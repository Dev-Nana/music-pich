import { Filter, Albums } from "../../components"

export const Gallery = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-gray-950 sm:pt-64 sm:pb-24 pt-40 pb-24">
      <div className="flex flex-row w-11/12 lg:gap-10">
        <Filter />
        <Albums />
      </div>
    </div>
  );
}

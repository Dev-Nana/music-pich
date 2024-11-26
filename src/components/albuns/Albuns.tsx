import { Search, Select } from "../../components";

export const Albuns = () => {
  return (
    // aqui vai ficar o Search, Cards, Select
    <div className="flex flex-col w-screen">
      <div className="flex flex-row justify-between">
        <Search />
        <Select />
      </div>
    </div>
  );
}

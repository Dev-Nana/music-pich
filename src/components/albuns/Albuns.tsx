import { Search, Select } from "../../components";

export const Albuns = () => {
  return (
    // aqui vai ficar o Search, Cards, Select
    <div className="flex flex-col w-screen">
      <div className="flex flex-row lg:justify-between justify-center sm:p-0 px-8">
        <Search />
        <Select />
      </div>
    </div>
  );
}

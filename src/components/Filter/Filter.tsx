import React from "react";
import { ITodoFilterListItem } from "../../types/filter.types";
import { useFilterStore } from "../../store/filter";

const filters: ITodoFilterListItem[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "completed",
    label: "Completed",
  },
];

const Filter = () => {
  const activeFilter = useFilterStore((store) => store.activeFilter);
  const setActiveFilter = useFilterStore((store) => store.setActiveFilter);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setActiveFilter(e.target.value);
  };

  return (
    <div className="flex justify-center w-full">
      <form defaultValue={activeFilter} onChange={handleChange} className="flex gap-6 text-xl py-2 ">
        {filters.map((item) => (
          <div className={`${activeFilter === item.value ? "bg-white" : ""} px-4 py-1 rounded`} key={item.value}>
            <input
              className={`${activeFilter === item.value ? "" : "opacity-0"} mr-2`}
              defaultChecked={item.value === "all"}
              type="radio"
              id={item.value}
              name="fav_language"
              value={item.value}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Filter;

import React from "react";
import { Search } from "lucide-react";
import { FilterIcon } from "@/components/icons";

export default function SearchInput({ value, onChange, onFilterClick }) {
  return (
    <div className="w-full md:px-6 px-3 pt-6">
      <div className="flex items-center gap-3 rounded-2xl border pl-6 pr-4 py-1 bg-accent/50">
        <Search className="text-muted-foreground size-4" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Search"
          className="flex-1 bg-transparent outline-none text-sm text-foreground"
        />
        <button
          onClick={onFilterClick}
          className="p-[7px] rounded-full hover:bg-muted-foreground/10 transition-colors "
        >
          <FilterIcon className="text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}

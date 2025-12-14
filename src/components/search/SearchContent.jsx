import React from "react";
import clsx from "clsx";
import { SearchWrapper } from ".";
import SearchInput from "./SearchInput";
import TrendingNow from "./TrendingNow";
import FollowSuggestions from "./FollowSuggestions";
import { mockTrending, mockFollowSuggestions } from "@/data/mockData";

export default function SearchContent({ onSearch, isMultiColumn = false }) {
  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    } else {
      console.log("Open Search modal");
    }
  };

  return (
    <div
      className={clsx(
        "flex flex-col h-full overflow-hidden border border-border border-b-0 drop-shadow-xs mx-2 bg-card rounded-t-3xl",
        !isMultiColumn && "custom-scrollbar"
      )}
    >
      <SearchWrapper>
        <SearchInput onSearchClick={handleSearch} />

        <TrendingNow trends={mockTrending} />

        <FollowSuggestions suggestions={mockFollowSuggestions} />
      </SearchWrapper>
    </div>
  );
}

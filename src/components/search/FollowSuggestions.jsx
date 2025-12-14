import React from "react";
import FollowSuggestionItem from "./FollowSuggestionItem";

export default function FollowSuggestions({ suggestions = [] }) {
  return (
    <div className="pt-3 pb-8">
      <div className="md:px-6 px-3 mb-2">
        <h2 className="font-semibold text-[15px] text-muted-foreground">
          Follow suggestions
        </h2>
      </div>
      <div className="md:px-6 px-3">
        {suggestions.map((user) => (
          <FollowSuggestionItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

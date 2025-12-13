import React, { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

/**
 * PostMediaPoll - Interactive poll component
 */
export default function PostMediaPoll({ poll, onVote }) {
  const [selectedOption, setSelectedOption] = useState(poll?.userVote || null);
  const totalVotes =
    poll?.options?.reduce((sum, opt) => sum + opt.votes, 0) || 0;
  const hasVoted = selectedOption !== null;

  const handleVote = (optionId) => {
    if (!hasVoted) {
      setSelectedOption(optionId);
      onVote?.(optionId);
    }
  };

  const getPercentage = (votes) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes / totalVotes) * 100);
  };

  return (
    <div className="border border-border rounded-xl p-4 space-y-3">
      {/* Poll question */}
      {poll?.question && (
        <h4 className="font-semibold text-sm">{poll.question}</h4>
      )}

      {/* Options */}
      <div className="space-y-2">
        {poll?.options?.map((option) => {
          const percentage = getPercentage(option.votes);
          const isSelected = selectedOption === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              disabled={hasVoted}
              className={`relative w-full text-left p-3 rounded-lg border transition-colors ${
                hasVoted ? "cursor-default" : "hover:bg-accent cursor-pointer"
              } ${
                isSelected ? "border-foreground bg-accent" : "border-border"
              }`}
            >
              {/* Progress bar */}
              {hasVoted && (
                <div
                  className="absolute inset-0 bg-accent rounded-lg transition-all"
                  style={{ width: `${percentage}%` }}
                />
              )}

              {/* Content */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isSelected ? (
                    <CheckCircle2 className="w-5 h-5 text-foreground" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className="text-sm font-medium">{option.text}</span>
                </div>
                {hasVoted && (
                  <span className="text-sm font-semibold">{percentage}%</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {totalVotes} {totalVotes === 1 ? "vote" : "votes"}
        </span>
        {poll?.endsAt && (
          <span>Ends {new Date(poll.endsAt).toLocaleDateString()}</span>
        )}
      </div>
    </div>
  );
}

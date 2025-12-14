import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { ChevronRight } from "lucide-react";

export default function LoginCard({ username = "pvkhai", onClose }) {
  const handleInstagramLogin = () => {
    // TODO: Implement Instagram OAuth login
    console.log("Instagram login clicked");
    onClose?.();
  };

  return (
    <Card className="w-full bg-white dark:bg-neutral-900 border-none shadow-xl">
      <CardContent className="px-10 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[28px] font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Say more with Threads
          </h1>
          <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
            Join Threads to share thoughts, find out what's going on, follow
            your people and more.
          </p>
        </div>

        {/* Instagram Login Button */}
        <button
          onClick={handleInstagramLogin}
          className="w-full flex items-center gap-3 px-5 py-4 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-[14px] hover:bg-gray-100 dark:hover:bg-neutral-750 transition-all duration-200 group"
        >
          <div className="shrink-0">
            <InstagramIcon className="w-[42px] h-[42px] fill-current" />
          </div>
          <div className="flex flex-col items-start flex-1 min-w-0">
            <span className="text-[13px] text-gray-500 dark:text-gray-400">
              Continue with Instagram
            </span>
            <span className="text-[15px] font-semibold text-gray-900 dark:text-white truncate w-full">
              {username}
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
        </button>
      </CardContent>
    </Card>
  );
}

LoginCard.propTypes = {
  username: PropTypes.string,
  onClose: PropTypes.func,
};

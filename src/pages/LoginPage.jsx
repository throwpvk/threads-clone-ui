import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { ChevronRight } from "lucide-react";

// Validation schema
const loginSchema = yup.object({
  username: yup
    .string()
    .required("Username, phone or email is required")
    .min(3, "Must be at least 3 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log("Login data:", data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Navigate to home after successful login
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInstagramLogin = () => {
    // TODO: Implement Instagram OAuth
    console.log("Instagram login clicked");
    navigate("/");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  return (
    <Card className="w-full bg-transparent border-none shadow-none mt-30">
      <CardContent className="px-8 sm:px-12 py-20">
        <div className="text-center mb-8">
          <h1 className="text-base font-semibold text-gray-900 dark:text-white">
            Log in with your Instagram account
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mb-6">
          <div>
            <Input
              {...register("username")}
              type="text"
              placeholder="Username, phone or email"
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border ${
                errors.username
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 dark:border-neutral-700"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all`}
              disabled={isLoading}
            />
            {errors.username && (
              <p className="mt-1.5 text-xs text-red-500 ml-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border ${
                errors.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 dark:border-neutral-700"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all`}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="mt-1.5 text-xs text-red-500 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </Button>

          {/* Forgot Password Link */}
          <div className="text-center pt-1">
            <a
              href="/forgot-password"
              onClick={handleForgotPassword}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Forgot password?
            </a>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-neutral-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white dark:bg-neutral-900 text-gray-500 dark:text-gray-400">
              or
            </span>
          </div>
        </div>

        {/* Instagram Login Button */}
        <button
          onClick={handleInstagramLogin}
          disabled={isLoading}
          className="w-full flex items-center gap-3 px-4 py-3.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-750 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="shrink-0">
            <InstagramIcon className="w-7 h-7 fill-current text-pink-600" />
          </div>
          <div className="flex-1 text-left">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Continue with Instagram
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
        </button>
      </CardContent>
    </Card>
  );
}

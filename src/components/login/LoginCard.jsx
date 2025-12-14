import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";
import { useLoginMutation } from "@/services/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/features/auth/authSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function LoginCard({ onClose }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // API expects 'login' field
      const result = await login({ login: identifier, password }).unwrap();

      const token = {
        access_token: result.access_token || result.data?.access_token,
        refresh_token: result.refresh_token || result.data?.refresh_token,
      };

      if (!token.access_token) {
        throw new Error("Invalid response from server");
      }

      const user = result.user || result.data?.user || null;
      dispatch(setCredentials({ user, token }));
      onClose?.();
    } catch (err) {
      console.error("Failed to login:", err);
      setError(
        err.data?.message || "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <Card className="w-full bg-card border-none shadow-xl">
      <CardContent className="px-10 py-12">
        <div className="text-center mb-2">
          <h1 className="text-[28px] font-bold text-foreground mb-4 leading-tight">
            Say more with Threads
          </h1>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Join Threads to share thoughts, find out what's going on, follow
            your people and more.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Username, phone or email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="bg-accent text-muted-foreground h-12"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-accent text-muted-foreground h-12"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            className="w-full h-12 text-[15px] font-semibold rounded-[14px] cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Log in"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            className="text-sm text-muted-foreground hover:underline cursor-pointer"
            onClick={() => console.log("Forgot password clicked")}
          >
            Forgot password?
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

LoginCard.propTypes = {
  onClose: PropTypes.func,
};

LoginCard.propTypes = {
  username: PropTypes.string,
  onClose: PropTypes.func,
};

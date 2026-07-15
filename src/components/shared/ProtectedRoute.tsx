import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authClient } from "../../lib/auth-client";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data: session, isPending } = authClient.useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPending && !session) {
      if (!toast.isActive("auth-required")) {
        toast.warning("Please sign in to continue.", {
          toastId: "auth-required",
        });
      }

      navigate("/auth/signin");
    }
  }, [session, isPending, navigate]);

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-perf-border border-t-perf-gold"></div>
      </div>
    );
  }

  return session ? <>{children}</> : null;
};

export default ProtectedRoute;

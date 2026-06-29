import { useNavigate } from "react-router";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";

function LoggedRoute({ children }) {
  const { user } = useAuth((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  if (user) {
    navigate("/");
    return;
  }

  return children;
}

function UnloggedRoute({ children }) {
  const { user } = useAuth((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (!user) {
    navigate("/login");
    return;
  }

  return children;
}

export { LoggedRoute, UnloggedRoute };

import { useState, useEffect } from "react";
import { useAuth } from "../../Context/Auth";
import { Outlet } from "react-router-dom";
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async();
  }, []);

  return ok ? <Outlet /> : "spinner";
}

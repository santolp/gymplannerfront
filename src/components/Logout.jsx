// src/components/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Limpiamos token y userId al montar
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Opcional: esperar 1 segundo y redirigir
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Cerrando sesión...</h2>
          <p className="mb-6 text-gray-600">Redirigiendo al login</p>
          <Button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Ir al login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

import React, { useState } from "react";
import api from "../api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const r = await api.post("/api/auth/login", {
        username: id,
        password: pw,
      });
      localStorage.setItem("token", r.data.token);
      localStorage.setItem("userId", r.data.user?.Id || r.data.user?.id || "");
      navigate("/");
    } catch (e) {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-gray-900"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')", // 🏋️‍♂️ Foto gimnasio/musculación
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="shadow-2xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
          <CardContent className="p-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold text-center mb-6 text-white"
            >
              Iniciar Sesión
            </motion.h2>
            <motion.form
              onSubmit={submit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Input
                placeholder="Email o DNI"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                className="bg-white/20 text-white placeholder-gray-300 border-white/30"
              />
              <Input
                placeholder="Contraseña"
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                required
                className="bg-white/20 text-white placeholder-gray-300 border-white/30"
              />
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                Ingresar
              </Button>
            </motion.form>
            <motion.p
              className="text-center text-sm text-gray-300 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              ¿No tienes cuenta?{" "}
              <a href="/register" className="text-red-400 hover:underline">
                Regístrate
              </a>
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}





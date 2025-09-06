// src/components/AltaPlanPro.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AltaPlanPro() {
  const [alumno, setAlumno] = useState("");
  const [ejercicio, setEjercicio] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`Plan creado para ${alumno}: ${ejercicio} ${sets}x${reps}`);
    setAlumno(""); setEjercicio(""); setSets(""); setReps("");
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-red-600">Crear Plan</h1>
      <motion.form
        onSubmit={submit}
        className="space-y-4 max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {["Nombre del alumno", "Ejercicio", "Sets", "Reps"].map((placeholder, idx) => (
          <input
            key={idx}
            placeholder={placeholder}
            value={idx === 0 ? alumno : idx === 1 ? ejercicio : idx === 2 ? sets : reps}
            onChange={(e) =>
              idx === 0 ? setAlumno(e.target.value)
              : idx === 1 ? setEjercicio(e.target.value)
              : idx === 2 ? setSets(e.target.value)
              : setReps(e.target.value)
            }
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 transition duration-300"
          />
        ))}
        <motion.button
          type="submit"
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Crear Plan
        </motion.button>
      </motion.form>
    </div>
  );
}

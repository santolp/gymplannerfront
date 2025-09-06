// src/components/PlanAlumnoPro.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const plan = [
  { dia: "Lunes", ejercicio: "Sentadillas", sets: 4, reps: "12-15" },
  { dia: "Martes", ejercicio: "Press de banca", sets: 3, reps: "10-12" },
  { dia: "Miércoles", ejercicio: "Remo con barra", sets: 4, reps: "12" },
];

export default function PlanAlumnoPro() {
  const [completados, setCompletados] = useState([]);

  const toggleComplete = (index) => {
    setCompletados((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-red-600">Mi Plan</h1>
      <div className="space-y-4">
        {plan.map((p, idx) => (
          <motion.div
            key={idx}
            className={`bg-gray-800 p-4 rounded-2xl flex justify-between items-center shadow-md ${
              completados.includes(idx) ? "opacity-70 line-through" : ""
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>
              <p className="font-bold">{p.dia}: {p.ejercicio}</p>
              <p className="text-gray-400">{p.sets} sets x {p.reps} reps</p>
            </div>
            <button
              className={`px-4 py-2 rounded-lg font-bold ${
                completados.includes(idx)
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              onClick={() => toggleComplete(idx)}
            >
              {completados.includes(idx) ? "✔" : "Completar"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

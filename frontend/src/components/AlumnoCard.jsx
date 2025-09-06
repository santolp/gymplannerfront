// src/components/AlumnoCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AlumnoCard({ alumno }) {
  const { nombre, objetivo, fechaInicioPlan,fechaObjetivo, progreso,team } = alumno;

  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-bold text-red-500">Team: {team}</h3>
          <p className="text-gray-300 text-sm">
            {objetivo} - {fechaObjetivo}
          </p>
        </div>
      </div>
      <h2 className="flex flex-col items-center">Carga durante semana en kg</h2>
      {/* Progreso por zona muscular */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        
        {progreso.map((zona) => (
          <div key={zona.name} className="flex flex-col items-center">
            <motion.svg
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              className="w-16 h-16"
            >
              <circle
                cx="32"
                cy="32"
                r="30"
                stroke="#444"
                strokeWidth="4"
                fill="none"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="30"
                stroke={zona.color}
                strokeWidth="4"
                fill="none"
                strokeDasharray={2 * Math.PI * 30}
                strokeDashoffset={2 * Math.PI * 30 * (1 - zona.porcentaje / 100)}
                initial={{ strokeDashoffset: 2 * Math.PI * 30 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 30 * (1 - zona.porcentaje / 100) }}
                transition={{ duration: 1.2 }}
              />
            </motion.svg>
            <span className="mt-2 text-white font-semibold">{zona.name}</span>
            <span className="text-gray-300 text-sm">{zona.peso} kg</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

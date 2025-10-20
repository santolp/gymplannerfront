import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import AlumnoCard from "./AlumnoCard";

const alumnos = [
  {
    id: 1,
    nombre: "Juan",
    objetivo: "Carrera NYC 42k",
    fechaInicioPlan: "2025-04-20",
    fechaObjetivo: "2025-11-20",
    team: "Elite",
    semanas: 4,
    progreso: [
      { name: "Tren Superior", porcentaje: 80, peso: 32, color: "#f87171" },
      { name: "Tren Inferior", porcentaje: 60, peso: 28, color: "#34d399" },
      { name: "Zona Media", porcentaje: 50, peso: 20, color: "#60a5fa" },
    ],
    asistencia: [
      { dia: "Lun", TrenSuperior: 5, TrenInferior: 3, ZonaMedia: 2 },
      { dia: "Mar", TrenSuperior: 4, TrenInferior: 4, ZonaMedia: 3 },
      { dia: "Mie", TrenSuperior: 6, TrenInferior: 2, ZonaMedia: 3 },
    ],
  },
  {
    id: 2,
    nombre: "Maria",
    objetivo: "Tandil 30k",
    fechaInicioPlan: "2025-01-20",
    fechaObjetivo: "2025-12-20",
    team: "Elite",
    semanas: 3,
    progreso: [
      { name: "Tren Superior", porcentaje: 70, peso: 25, color: "#f87171" },
      { name: "Tren Inferior", porcentaje: 80, peso: 30, color: "#34d399" },
      { name: "Zona Media", porcentaje: 40, peso: 15, color: "#60a5fa" },
    ],
    asistencia: [
      { dia: "Lun", TrenSuperior: 3, TrenInferior: 5, ZonaMedia: 3 },
      { dia: "Mar", TrenSuperior: 2, TrenInferior: 6, ZonaMedia: 2 },
    ],
  },
  {
    id: 3,
    nombre: "Carlos",
    objetivo: "UMT Patagonia Run 100 Millas",
    fechaInicioPlan: "2025-03-20",
    fechaObjetivo: "2025-12-20",
    team: "Diagonales",
    semanas: 5,
    progreso: [
      { name: "Tren Superior", porcentaje: 50, peso: 18, color: "#f87171" },
      { name: "Tren Inferior", porcentaje: 60, peso: 22, color: "#34d399" },
      { name: "Zona Media", porcentaje: 75, peso: 35, color: "#60a5fa" },
    ],
    asistencia: [
      { dia: "Lun", TrenSuperior: 2, TrenInferior: 6, ZonaMedia: 3 },
      { dia: "Mar", TrenSuperior: 3, TrenInferior: 5, ZonaMedia: 4 },
    ],
  }, {
    nombre: "Natiok",
    objetivo: "Buenos Aires 42K",
    fechaObjetivo: "31/12/2025",
    progreso: [
      { name: "Tren Superior", porcentaje: 50, peso: 30, color: "#f87171" },
      { name: "Tren Inferior", porcentaje: 70, peso: 35, color: "#34d399" },
      { name: "Zona Media", porcentaje: 50, peso: 25, color: "#60a5fa" },
    ],
    
  },
];

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Dashboard de Alumnos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {alumnos.map((alumno) => (
          <div key={alumno.id} className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-1">{alumno.nombre}</h2>
            <span className="text-xs mb-2">Team: {alumno.team}</span>
            <span className="text-sm bg-red-600 px-2 py-1 rounded-full mb-1">{alumno.objetivo}</span>
            <span className="text-xs mb-2">Fecha Inicio Plan: {alumno.fechaInicioPlan}</span>
            <p className="text-sm mb-3">Semanas en plan: {alumno.semanas}</p>

            {/* Círculos de progreso */}
            <div className="flex justify-around w-full mb-4">
              <AlumnoCard alumno={alumno} />
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

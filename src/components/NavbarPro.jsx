import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, FileText, PlusCircle, Menu, X, Settings, Bell, LogOut, User } from "lucide-react";
import { useAuth } from "@/components/AuthContext";

export default function NavbarPro() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const username = localStorage.getItem("userId") || "Usuario";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 text-white px-6 py-4 flex items-center justify-between shadow-xl relative z-50">
      <div className="text-2xl font-bold text-red-500 cursor-pointer hover:text-white transition-colors duration-300">
        GymPlanner
      </div>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="flex items-center space-x-1 hover:text-red-400 transition-all duration-300 font-semibold">
          <Home size={18} /> <span>Dashboard</span>
        </Link>
        <Link to="/plan-alumno" className="flex items-center space-x-1 hover:text-red-400 transition-all duration-300 font-semibold">
          <FileText size={18} /> <span>Mi Plan</span>
        </Link>
        <Link to="/alta-plan" className="flex items-center space-x-1 hover:text-red-400 transition-all duration-300 font-semibold">
          <PlusCircle size={18} /> <span>Crear Plan</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(true)}>
          <Menu size={24} />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-10 h-10 cursor-pointer border-2 border-red-500 shadow-lg hover:scale-105 transition-transform duration-300">
              <AvatarImage src="/avatar.png" alt={username} />
              <AvatarFallback>{username[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 border border-gray-700 rounded-md">
            <DropdownMenuItem className="hover:bg-red-600 text-white transition-colors duration-200" onClick={handleLogout}>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Profile</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-red-600 text-white transition-colors duration-200" onClick={handleLogout}>
              <div className="flex items-center">
                <Settings size={18} className="mr-2" />
                <span>Settings</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-red-600 text-white transition-colors duration-200" onClick={handleLogout}>
              <div className="flex items-center">
                <Bell size={18} className="mr-2" />
                <span>Notifications</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-red-600 text-white transition-colors duration-200" onClick={handleLogout}>
              <div className="flex items-center">
                <LogOut size={18} className="mr-2" />
                <span>Logout</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 w-64 h-full bg-gray-900 text-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="text-xl font-bold text-red-500">Menu</div>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center mt-4 px-4">
              <Avatar className="w-16 h-16 border-2 border-red-500 shadow-lg">
                <AvatarImage src="/avatar.png" alt={username} />
                <AvatarFallback>{username[0]}</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-lg font-semibold">{username}</div>
            </div>

            <div className="flex flex-col mt-6 space-y-4 px-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-red-400 font-semibold">
                <Home size={18} /> <span>Dashboard</span>
              </Link>
              <Link to="/plan-alumno" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-red-400 font-semibold">
                <FileText size={18} /> <span>Mi Plan</span>
              </Link>
              <Link to="/alta-plan" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-red-400 font-semibold">
                <PlusCircle size={18} /> <span>Crear Plan</span>
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold w-full"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
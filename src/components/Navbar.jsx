// src/components/Navbar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("userId") || "Usuario");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold">GymPlanner</div>

      <div className="flex items-center space-x-4">
        {/* Icono / Avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarImage src="/avatar.png" alt={username} />
              <AvatarFallback>{username[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

import React from "react";

export function Avatar({ src, alt }) {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
      {src ? <img src={src} alt={alt} /> : <span className="text-sm">U</span>}
    </div>
  );
}

export function AvatarFallback() {
  return <div className="w-8 h-8 bg-gray-300 rounded-full" />;
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-8 h-8 rounded-full" />;
}

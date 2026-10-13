"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/items", label: "Liste" },
  { href: "/settings", label: "Paramètres" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-56 shrink-0 border-r border-gray-200 bg-white p-4">
      <nav className="flex flex-col gap-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              pathname === l.href ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
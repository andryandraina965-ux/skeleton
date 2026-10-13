import { ReactNode } from "react";

export default function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {title && <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>}
      {children}
    </div>
  );
}
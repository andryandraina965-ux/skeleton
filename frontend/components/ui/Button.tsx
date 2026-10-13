import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  loading?: boolean;
};

export default function Button({ variant = "primary", loading, children, disabled, className = "", ...rest }: Props) {
  const styles = variant === "primary"
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-gray-200 text-gray-900 hover:bg-gray-300";
  return (
    <button
      disabled={disabled || loading}
      className={`rounded-md px-4 py-2 text-sm font-medium transition disabled:opacity-50 ${styles} ${className}`}
      {...rest}
    >
      {loading ? "Chargement..." : children}
    </button>
  );
}
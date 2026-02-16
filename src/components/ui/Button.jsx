export default function Button({ children, size = "md", variant = "primary" }) {
  const sizeClasses =
    size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-base";

  const variantClasses =
    variant === "primary"
      ? "bg-black text-white hover:bg-[#111]"
      : "bg-white text-black border border-black hover:bg-[#f4f4f4]";

  return (
    <button
      className={`rounded-full font-medium transition-colors ${sizeClasses} ${variantClasses}`}
      type="button"
    >
      {children}
    </button>
  );
}

import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md shadow-sm";
  
  const variants = {
    primary: "bg-[#D4AF37] text-[#2D3436] hover:brightness-110 border-none",
    secondary: "bg-[#06143D] text-[#FFFFFF] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D3436]",
    outline: "bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D3436]",
    ghost: "bg-transparent text-text-secondary hover:text-[#D4AF37] hover:bg-[#06143D] shadow-none",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} suppressHydrationWarning>
      {children}
    </button>
  );
}

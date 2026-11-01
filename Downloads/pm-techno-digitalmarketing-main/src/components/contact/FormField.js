export default function FormField({ 
  label, 
  name, 
  type = "text", 
  required = false,
  error,
  options = [],
  ...props 
}) {
  const baseInputClasses = `w-full px-4 py-3 rounded-lg border bg-surface focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors ${
    error ? "border-[#D4AF37] focus:border-[#D4AF37]" : "border-border-divider focus:border-[#D4AF37]"
  }`;

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-text-secondary">
        {label} {required && <span className="text-[#D4AF37]">*</span>}
      </label>
      
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          suppressHydrationWarning
          className={`${baseInputClasses} resize-none`}
          rows={5}
          {...props}
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          suppressHydrationWarning
          className={baseInputClasses}
          {...props}
        >
          <option value="" disabled>Select an option</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          suppressHydrationWarning
          className={baseInputClasses}
          {...props}
        />
      )}

      {error && (
        <p className="text-xs text-[#D4AF37] mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

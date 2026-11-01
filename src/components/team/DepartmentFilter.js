export default function DepartmentFilter({ departments, activeDepartment, onDepartmentChange }) {
  if (!departments || departments.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {departments.map((department) => {
        const isActive = activeDepartment === department;
        return (
          <button
            key={department}
            onClick={() => onDepartmentChange(department)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              isActive 
                ? "bg-[#D4AF37] text-text-primary shadow-md" 
                : "bg-surface text-text-secondary border border-border-divider hover:border-[#D4AF37] hover:text-[#D4AF37] shadow-sm"
            }`}
          >
            {department}
          </button>
        );
      })}
    </div>
  );
}

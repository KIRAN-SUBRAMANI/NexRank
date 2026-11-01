"use client";

// JobFilters — Client Component for interactive filter pill buttons
export default function JobFilters({
  departments,
  locations,
  employmentTypes,
  experienceLevels,
  activeFilters,
  onFilterChange,
  totalResults,
}) {
  return (
    <div className="space-y-5" role="search" aria-label="Filter job listings">
      {/* Result count */}
      <p className="text-sm text-text-secondary">
        Showing{" "}
        <span className="font-semibold text-text-primary">{totalResults}</span>{" "}
        {totalResults === 1 ? "position" : "positions"}
      </p>

      {/* Department Filter */}
      <FilterGroup
        label="Department"
        options={departments}
        activeValue={activeFilters.department}
        filterKey="department"
        onFilterChange={onFilterChange}
      />

      {/* Location Filter */}
      <FilterGroup
        label="Location"
        options={locations}
        activeValue={activeFilters.location}
        filterKey="location"
        onFilterChange={onFilterChange}
      />

      {/* Experience Filter */}
      <FilterGroup
        label="Experience Level"
        options={experienceLevels}
        activeValue={activeFilters.experience}
        filterKey="experience"
        onFilterChange={onFilterChange}
      />

      {/* Employment Type Filter */}
      <FilterGroup
        label="Employment Type"
        options={employmentTypes}
        activeValue={activeFilters.employmentType}
        filterKey="employmentType"
        onFilterChange={onFilterChange}
      />

      {/* Reset button — show only if any active non-"all" filter */}
      {Object.values(activeFilters).some((v) => v !== "all") && (
        <button
          type="button"
          onClick={() =>
            onFilterChange({
              department: "all",
              location: "all",
              experience: "all",
              employmentType: "all",
            })
          }
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          aria-label="Reset all filters"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Reset all filters
        </button>
      )}
    </div>
  );
}

function FilterGroup({ label, options, activeValue, filterKey, onFilterChange }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-2.5">
        {label}
      </p>
      <div className="flex flex-wrap gap-2" role="group" aria-label={`Filter by ${label}`}>
        {options.map((option) => {
          const isActive = activeValue === option.value;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                onFilterChange((prev) => ({
                  ...prev,
                  [filterKey]: option.value,
                }))
              }
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-1 ${
                isActive
                  ? "bg-[#D4AF37] text-text-primary border-[#D4AF37] shadow-sm"
                  : "bg-surface text-text-secondary border-border-divider hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
              aria-pressed={isActive}
              aria-label={`${label}: ${option.label}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

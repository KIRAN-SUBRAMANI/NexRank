"use client";

import { useState, useMemo } from "react";
import DepartmentFilter from "./DepartmentFilter";
import TeamCard from "./TeamCard";
import Container from "@/components/ui/Container";

export default function TeamGrid({ initialMembers }) {
  const [activeDepartment, setActiveDepartment] = useState("All Departments");

  // Extract unique departments dynamically
  const departments = useMemo(() => {
    const allDeps = initialMembers.map(m => m.department).filter(Boolean);
    const uniqueDeps = [...new Set(allDeps)];
    return ["All Departments", ...uniqueDeps.sort()];
  }, [initialMembers]);

  // Filter members
  const filteredMembers = useMemo(() => {
    if (activeDepartment === "All Departments") return initialMembers;
    return initialMembers.filter(m => m.department === activeDepartment);
  }, [initialMembers, activeDepartment]);

  return (
 <section className="py-10 md: bg-surface">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-8">
            Meet Our Experts
          </h2>
          <div className="overflow-x-auto pb-4 scrollbar-hide flex justify-center">
            <DepartmentFilter 
              departments={departments}
              activeDepartment={activeDepartment}
              onDepartmentChange={setActiveDepartment}
            />
          </div>
        </div>

        {filteredMembers.length === 0 ? (
          <div className="py-20 text-center bg-bg-secondary rounded-2xl border border-border-divider">
            <h3 className="text-xl font-semibold text-text-secondary mb-2">No team members found.</h3>
            <p className="text-text-secondary">We are currently expanding this department.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

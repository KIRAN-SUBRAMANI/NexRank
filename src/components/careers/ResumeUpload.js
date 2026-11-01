"use client";

import React, { useRef } from "react";

export default function ResumeUpload({ config, value, onChange, error }) {
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Client-side validation
    const maxBytes = (config?.maxSizeMB || 5) * 1024 * 1024;
    if (file.size > maxBytes) {
      onChange(null, `File is too large. Maximum size is ${config?.maxSizeMB || 5}MB.`);
      return;
    }

    const acceptedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!acceptedTypes.includes(file.type)) {
      onChange(null, "Please upload a PDF, DOC, or DOCX file.");
      return;
    }

    onChange(file, null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && inputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(file);
      inputRef.current.files = dt.files;
      handleFileChange({ target: inputRef.current });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const clearFile = () => {
    if (inputRef.current) inputRef.current.value = "";
    onChange(null, null);
  };

  return (
    <div>
      <label
        htmlFor={config?.id || "resume"}
        className="block text-sm font-bold text-[#0F172A] mb-2"
      >
        {config?.label || "Upload Resume / CV"}
        {config?.required && (
          <span className="text-rose-500 ml-1" aria-label="required">*</span>
        )}
      </label>

      {!value ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-200 ${
            error
              ? "border-rose-400 bg-rose-50/50"
              : "border-slate-300 hover:border-[#D4AF37] hover:bg-amber-50/20 bg-slate-50/60"
          }`}
          onClick={() => inputRef.current?.click()}
          role="button"
          aria-label="Upload resume — click or drag and drop"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            id={config?.id || "resume"}
            name={config?.id || "resume"}
            type="file"
            accept={config?.accept || ".pdf,.doc,.docx"}
            onChange={handleFileChange}
            required={config?.required}
            className="sr-only"
            aria-describedby={error ? `${config?.id || "resume"}-error` : undefined}
          />

          {/* Upload icon */}
          <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center mx-auto mb-3 text-[#D4AF37]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>

          <p className="text-sm font-bold text-[#0F172A] mb-1">
            Drag &amp; drop your resume here, or{" "}
            <span className="text-[#D4AF37] underline underline-offset-2">browse files</span>
          </p>
          <p className="text-xs text-slate-500">
            {config?.hint || "PDF, DOC, or DOCX — max 5MB"}
          </p>
        </div>
      ) : (
        // File selected state
        <div className="flex items-center gap-4 p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-[#0F172A] truncate">{value.name}</p>
            <p className="text-xs text-slate-500">{(value.size / 1024).toFixed(0)} KB • Ready for submission</p>
          </div>
          <button
            type="button"
            onClick={clearFile}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
            aria-label="Remove uploaded file"
          >
            ✕
          </button>
        </div>
      )}

      {error && (
        <p id={`${config?.id || "resume"}-error`} className="mt-1.5 text-xs text-rose-600 font-semibold flex items-center gap-1" role="alert">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

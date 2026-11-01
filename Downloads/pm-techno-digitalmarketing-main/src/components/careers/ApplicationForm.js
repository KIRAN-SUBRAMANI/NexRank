"use client";

import { useState, useEffect } from "react";
import ResumeUpload from "./ResumeUpload";

/**
 * ApplicationForm — Client Component
 * ──────────────────────────────────────────────────────────────────────────────
 * Frontend-only form with validation.
 * API-ready architecture — submit handler is pre-wired for:
 *
 *   Future integrations:
 *     - POST /api/careers/apply       (Next.js API Route)
 *     - ATS webhook (Greenhouse, Lever, Workday)
 *     - HRMS endpoint
 *     - Email via Resend / SendGrid
 *     - Resume storage via S3 / Cloudinary
 *
 * To connect backend: update the `handleSubmit` function only.
 * No UI changes required.
 */
export default function ApplicationForm({ config }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    yearsOfExperience: "",
    positionApplyingFor: "",
    portfolioUrl: "",
    linkedinUrl: "",
    coverLetter: "",
    consent: false,
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Listen for role selection from cards/modal
  useEffect(() => {
    const handleSelectPosition = (e) => {
      if (e.detail?.title) {
        setFormData((prev) => ({
          ...prev,
          positionApplyingFor: e.detail.title,
        }));
      }
    };

    window.addEventListener("select-career-position", handleSelectPosition);
    return () => window.removeEventListener("select-career-position", handleSelectPosition);
  }, []);

  const fields = config?.fields || {};
  const positions = fields.positionApplyingFor?.options || [];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.currentLocation.trim()) newErrors.currentLocation = "Current location is required.";
    if (!formData.yearsOfExperience) newErrors.yearsOfExperience = "Please select your experience level.";
    if (!formData.positionApplyingFor) newErrors.positionApplyingFor = "Please select a position.";
    if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required.";
    if (formData.coverLetter.trim().length < 50) newErrors.coverLetter = "Please write at least 50 characters.";
    if (!resumeFile) setResumeError("Please upload your resume.");
    if (!formData.consent) newErrors.consent = "Please accept the data consent policy.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleResumeChange = (file, error) => {
    setResumeFile(file);
    setResumeError(error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0 || !resumeFile) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      /**
       * ─── FUTURE BACKEND INTEGRATION ─────────────────────────────────────
       * Uncomment and configure when backend is ready:
       *
       * const payload = new FormData();
       * Object.entries(formData).forEach(([key, val]) => payload.append(key, val));
       * payload.append('resume', resumeFile);
       *
       * const res = await fetch('/api/careers/apply', {
       *   method: 'POST',
       *   body: payload,
       * });
       *
       * if (!res.ok) throw new Error('Submission failed. Please try again.');
       * ────────────────────────────────────────────────────────────────────
       */

      // Simulate network delay for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Success state
  if (submitted && config?.successMessage) {
    return (
      <div className="text-center py-16 px-8">
        <div
          className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-6"
          aria-hidden="true"
        >
          <svg className="w-10 h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
          {config.successMessage.heading}
        </h3>
        <p className="text-text-secondary max-w-md mx-auto leading-relaxed">
          {config.successMessage.body}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Job application form"
      className="space-y-6"
    >
      {/* Row 1: Full Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          config={fields.fullName}
          value={formData.fullName}
          error={errors.fullName}
          onChange={handleChange}
        />
        <FormField
          config={fields.email}
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      {/* Row 2: Phone + Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          config={fields.phone}
          value={formData.phone}
          error={errors.phone}
          onChange={handleChange}
        />
        <FormField
          config={fields.currentLocation}
          value={formData.currentLocation}
          error={errors.currentLocation}
          onChange={handleChange}
        />
      </div>

      {/* Row 3: Experience + Position */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField
          config={fields.yearsOfExperience}
          value={formData.yearsOfExperience}
          error={errors.yearsOfExperience}
          onChange={handleChange}
        />
        <SelectField
          config={fields.positionApplyingFor}
          value={formData.positionApplyingFor}
          error={errors.positionApplyingFor}
          onChange={handleChange}
          options={positions}
        />
      </div>

      {/* Row 4: Portfolio + LinkedIn */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          config={fields.portfolioUrl}
          value={formData.portfolioUrl}
          error={errors.portfolioUrl}
          onChange={handleChange}
        />
        <FormField
          config={fields.linkedinUrl}
          value={formData.linkedinUrl}
          error={errors.linkedinUrl}
          onChange={handleChange}
        />
      </div>

      {/* Cover Letter */}
      <TextareaField
        config={fields.coverLetter}
        value={formData.coverLetter}
        error={errors.coverLetter}
        onChange={handleChange}
      />

      {/* Resume Upload */}
      <ResumeUpload
        config={fields.resume}
        value={resumeFile}
        onChange={handleResumeChange}
        error={resumeError}
      />

      {/* Consent checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            id={fields.consent?.id}
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded border-border-divider text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
            aria-describedby={errors.consent ? "consent-error" : undefined}
            required
          />
          <span className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
            {fields.consent?.label}
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-xs text-[#D4AF37] flex items-center gap-1 ml-7" role="alert">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit error */}
      {submitError && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-sm text-rose-700 flex items-center gap-2" role="alert">
          <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-[#D4AF37] hover:bg-[#C59B27] text-[#0F172A] font-bold rounded-xl transition-all duration-200 text-base shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
        aria-busy={submitting}
      >
        {submitting ? (
          <>
            <svg className="w-5 h-5 animate-spin text-[#0F172A]" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting Application…
          </>
        ) : (
          <>
            {config?.submitButtonText || "Submit Application"}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function FormField({ config, value, error, onChange }) {
  if (!config) return null;
  return (
    <div>
      <label htmlFor={config.id} className="block text-sm font-bold text-[#0F172A] mb-2">
        {config.label}
        {config.required && <span className="text-rose-500 ml-1" aria-label="required">*</span>}
      </label>
      <input
        id={config.id}
        name={config.id}
        type={config.type || "text"}
        value={value}
        onChange={onChange}
        placeholder={config.placeholder}
        required={config.required}
        autoComplete={config.autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${config.id}-error` : undefined}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] placeholder-slate-400 transition-all duration-200 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 ${
          error
            ? "border-rose-400 bg-rose-50/30"
            : "border-slate-200 bg-white hover:border-slate-300"
        }`}
      />
      {error && (
        <p id={`${config.id}-error`} className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1" role="alert">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ config, value, error, onChange, options: overrideOptions }) {
  if (!config) return null;
  const opts = overrideOptions || config.options || [];
  return (
    <div>
      <label htmlFor={config.id} className="block text-sm font-bold text-[#0F172A] mb-2">
        {config.label}
        {config.required && <span className="text-rose-500 ml-1" aria-label="required">*</span>}
      </label>
      <select
        id={config.id}
        name={config.id}
        value={value}
        onChange={onChange}
        required={config.required}
        aria-invalid={!!error}
        aria-describedby={error ? `${config.id}-error` : undefined}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-white transition-all duration-200 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 appearance-none cursor-pointer ${
          error
            ? "border-rose-400 bg-rose-50/30"
            : "border-slate-200 hover:border-slate-300"
        }`}
      >
        {opts.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${config.id}-error`} className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1" role="alert">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function TextareaField({ config, value, error, onChange }) {
  if (!config) return null;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={config.id} className="block text-sm font-bold text-[#0F172A]">
          {config.label}
          {config.required && <span className="text-rose-500 ml-1" aria-label="required">*</span>}
        </label>
        {config.maxLength && (
          <span className="text-xs text-slate-400">
            {value.length}/{config.maxLength}
          </span>
        )}
      </div>
      <textarea
        id={config.id}
        name={config.id}
        value={value}
        onChange={onChange}
        placeholder={config.placeholder}
        required={config.required}
        rows={config.rows || 5}
        maxLength={config.maxLength}
        aria-invalid={!!error}
        aria-describedby={error ? `${config.id}-error` : undefined}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] placeholder-slate-400 resize-y transition-all duration-200 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 ${
          error
            ? "border-rose-400 bg-rose-50/30"
            : "border-slate-200 bg-white hover:border-slate-300"
        }`}
      />
      {error && (
        <p id={`${config.id}-error`} className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1" role="alert">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

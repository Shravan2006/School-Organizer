"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, ArrowLeft, Send, CheckCircle2 } from "lucide-react";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    schoolName: "",
    role: "admin",
    size: "medium"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="max-w-md w-full space-y-8 bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-xl shadow-slate-100/50 relative">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-4">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to landing page
        </Link>

        {/* Logo and Header */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
            <GraduationCap className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
            Request an EduCore Tour
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            See how our AI-powered ERP can streamline your school
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-150 rounded-2xl p-6 text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Request Received!</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you for your interest, <strong>{formData.name}</strong>. A product specialist will contact you at <strong>{formData.email}</strong> within 1 business day to arrange your personalized tour of <strong>{formData.schoolName}</strong>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-700 block mx-auto cursor-pointer"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className="block text-xs font-semibold text-slate-600 mb-1.5">
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 bg-slate-50/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5">
                Work Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@yourschool.edu"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 bg-slate-50/50"
              />
            </div>

            <div>
              <label htmlFor="school" className="block text-xs font-semibold text-slate-600 mb-1.5">
                School/Institution Name
              </label>
              <input
                id="school"
                type="text"
                required
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                placeholder="St. Mary's Academy"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 bg-slate-50/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="role" className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Your Role
                </label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 bg-slate-50/50"
                >
                  <option value="admin">Administrator</option>
                  <option value="it">IT Director</option>
                  <option value="teacher">Teacher</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="size" className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Institution Size
                </label>
                <select
                  id="size"
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 bg-slate-50/50"
                >
                  <option value="small">&lt; 200 students</option>
                  <option value="medium">200 - 1000 students</option>
                  <option value="large">1000+ students</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Send className="h-4 w-4" />
              Book Guided Tour
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  BookOpen,
  Shield,
  Sparkles,
  Clock,
  DollarSign,
  Truck,
  Bell,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  MessageSquare
} from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      {/* Background blobs for premium look */}
      <div className="absolute top-0 left-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-100/30 blur-3xl" />

      {/* --- HERO SECTION --- */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered School Operations
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
              The Unified <br className="hidden sm:inline lg:hidden" />
              <span className="text-blue-600 bg-clip-text">Operating System</span> <br />
              for Modern Education.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Consolidate Student Information (SIS), Learning Management (LMS), parents communication (CRM), and financial invoicing (ERP) in one intelligent platform. Driven by contextual AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-3.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request Custom Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-6 py-3.5 hover:shadow-sm transition-all"
              >
                Explore Features
              </Link>
            </div>
            {/* Quick social proof / stats trust badge */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 text-sm">
              <div>
                <span className="font-bold text-slate-950">99.8%</span> Uptime SLA
              </div>
              <div className="h-5 w-px bg-slate-300 hidden sm:block" />
              <div>
                <span className="font-bold text-slate-950">10k+</span> Weekly Active Users
              </div>
              <div className="h-5 w-px bg-slate-300 hidden sm:block" />
              <div>
                FERPA & GDPR Compliant
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* --- BUILT FOR EVERY ROLE SECTION --- */}
      <section id="roles" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600">Roles Ecosystem</h2>
          <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built for every stakeholder.
          </p>
          <p className="text-base text-slate-500">
            A cohesive workflow mapping specific user dashboards to keep students, teachers, parents, and administrative staff aligned in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card: Admin */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Administrators</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Streamline registration, coordinate scheduling, process student payroll records, track attendance, and run compliance reports with custom AI insights.
              </p>
            </div>
            <Link href="/demo" className="mt-6 text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:text-blue-700">
              Admin dashboard guide <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Card: Teacher */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Teachers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Publish assignment materials, run video sessions, log grades, take attendance, and use an AI co-pilot to write lesson materials and analyze class weak points.
              </p>
            </div>
            <Link href="/demo" className="mt-6 text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:text-emerald-700">
              LMS teaching utilities <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Card: Student */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Students</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Track calendars, submit assignments, take quizzes, view GPA reports, and access an AI tutor for interactive study questions and revision notes.
              </p>
            </div>
            <Link href="/demo" className="mt-6 text-xs font-bold text-purple-600 flex items-center gap-1 group-hover:text-purple-700">
              Student portal breakdown <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Card: Parent */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Parents</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Stay updated on children's marks, attendance, and conduct records. Read board notices, communicate with tutors, and settle tuition invoices with one-click online payment.
              </p>
            </div>
            <Link href="/demo" className="mt-6 text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:text-amber-700">
              Parent portal guide <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID SECTION --- */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">Platform Capability</h2>
          <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything your school needs, consolidated.
          </p>
          <p className="text-base text-slate-500">
            Ditch the fragmented ecosystem of legacy tools. EduCore covers all core educational administrative workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Attendance & Grading */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Attendance & Grading</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Track attendance digitally or process printed lists. Aggregate semester grade statistics automatically and highlight students slipping behind.
            </p>
          </div>

          {/* Feature 2: Fee Management */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
              <DollarSign className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Fee Management & ERP</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Create customized invoice schedules, compile digital payment receipts, and send automated notifications for pending dues. Integrates with major payment processors.
            </p>
          </div>

          {/* Feature 3: AI Assistant */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">AI Companion</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              An intelligent co-pilot for school operators. Automatically drafts email announcements, coordinates calendars, and translates messages into 20+ languages.
            </p>
          </div>

          {/* Feature 4: Library & Transport */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
              <Truck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Library & Transport</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Register book checkout cards and manage inventory. Map school bus lines, track routes in real-time, and log child check-ins with geo-fenced notifications.
            </p>
          </div>

          {/* Feature 5: CRM & Communication */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-4">
              <Bell className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Unified Communications</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Broadcast announcements via SMS, Email, and Push Notifications. Build custom list groups for cohorts, departments, or clubs in seconds.
            </p>
          </div>

          {/* Feature 6: Analytics Dashboard */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Analytics & Forecasting</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Analyze enrollment data trends, trace course performance indexes, monitor budget allocations, and generate customized reports for inspectors.
            </p>
          </div>
        </div>
      </section>

      {/* --- AI HIGHLIGHT SECTION --- */}
      <section id="ai-assistant" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 shadow-2xl sm:px-12 lg:px-20 lg:py-24 text-left">
          {/* Geometric grid design behind */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl -z-10" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* AI Highlight Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 text-xs font-semibold text-blue-400">
                <Sparkles className="h-3.5 w-3.5" />
                EduCore AI Co-pilot
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
                An intelligent partner to supercharge teachers and staff.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                By integrating state-of-the-art LLMs trained on academic schemas, EduCore does more than save records. It analyzes, forecasts, and generates resources on demand.
              </p>
              
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Automated Remedial Grouping:</strong> Flags specific skill gaps inside coursework and recommends study cohorts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Drafting Assistant:</strong> Instantly draft emails, term cards, course schedules, and notices based on simple natural language prompts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Voice Transcript Summarizer:</strong> Transcribe lessons or teacher conferences and instantly index the notes into study booklets.
                  </span>
                </li>
              </ul>
            </div>

            {/* AI Interactive Chat Mockup Display */}
            <div className="lg:col-span-6 flex justify-center w-full max-w-md mx-auto">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl w-full overflow-hidden shadow-2xl flex flex-col h-[340px]">
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-xs font-bold text-white">EduCore Co-pilot Dialog</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">llm-v4-turbo</span>
                </div>
                
                <div className="flex-1 p-4 space-y-4 overflow-y-auto text-xs text-left">
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-xl rounded-tr-none p-3 max-w-[85%] shadow-sm">
                      Draft a warning letter to John's parents about his 3 missed chemistry assignments.
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-slate-900 border border-slate-800 text-slate-300 rounded-xl rounded-tl-none p-3 max-w-[85%] shadow-sm space-y-2">
                      <p className="font-semibold text-blue-400">Generated Email Draft:</p>
                      <p className="text-[10px] italic leading-normal">
                        "Dear Mr. and Mrs. Smith, this notice is to inform you that John has missed three recent Chemistry homework assignments on stoichiometry. John's grade is currently at 72%. We recommend logging into the portal..."
                      </p>
                      <div className="flex gap-2 pt-1 border-t border-slate-800/80">
                        <button className="text-[9px] bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 rounded font-bold transition-all">
                          Send Email
                        </button>
                        <button className="text-[9px] bg-transparent text-slate-400 hover:text-slate-200 px-2 py-1 rounded transition-all">
                          Edit Draft
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16 md:px-20 relative overflow-hidden">
          {/* Geometric glow */}
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
              Ready to modernize your school?
            </h2>
            <p className="text-base text-blue-100 leading-relaxed max-w-lg mx-auto">
              Join forward-thinking schools that have simplified administration, saved hours of teacher workload, and elevated student results.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-blue-600 shadow-md hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Schedule Demo Tour
              </Link>
              <Link
                href="/login"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-transparent border border-white px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  Clock,
  Sparkles,
  Search,
  Bell,
  MessageSquare,
  Send,
  Calendar,
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState("overview");
  const [chatMessage, setChatMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      sender: "user",
      text: "How is Grade 10-A performing in Algebra this term?"
    },
    {
      sender: "ai",
      text: "Grade 10-A average is currently **86.4%** (up **2.1%** from midterm). Attendance is strong at **97.8%**. Sarah Jenkins and Tyler Vance have shown the highest progress (+12% improvement), while 2 students are flagged as requiring remedial support in quadratic equations."
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatLog((prev) => [...prev, { sender: "user", text: userMsg }]);
    setChatMessage("");

    // Simulate AI response
    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Analyzing records for "${userMsg}"... I've indexed attendance, assignments, and exam logs. Recommended action: schedule a 15-minute check-in with group B, or compile the progress report for review.`
        }
      ]);
    }, 1000);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-2xl shadow-blue-500/10 overflow-hidden text-left flex flex-col h-[520px]">
      {/* Top Header Mockup */}
      <div className="bg-white border-b border-slate-200/80 px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 w-1/3">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="text-xs text-slate-400 font-medium select-none ml-2">EduCore Admin Portal</span>
        </div>
        <div className="relative w-1/3 max-w-xs hidden sm:block">
          <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search records, students..."
            disabled
            className="w-full rounded-lg bg-slate-50 border border-slate-200/80 py-1 pl-8 pr-3 text-xs text-slate-500 placeholder-slate-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer">
            <Bell className="h-4.5 w-4.5 text-slate-500" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-600 border border-white" />
          </div>
          <div className="h-7 w-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-semibold text-blue-700">
            JD
          </div>
        </div>
      </div>

      {/* Main Grid: Sidebar + Dashboard Body */}
      <div className="flex flex-1 min-h-0">
        {/* Mock Navigation Menu */}
        <div className="w-48 bg-slate-50 border-r border-slate-200/80 p-3 hidden md:flex flex-col gap-1 select-none shrink-0">
          <div
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              activeTab === "overview"
                ? "bg-blue-50 text-blue-700 font-semibold"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Overview
          </div>
          <div
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              activeTab === "ai"
                ? "bg-blue-50 text-blue-700 font-semibold"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            AI Assistant
          </div>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 cursor-not-allowed">
            <Users className="h-4 w-4" />
            Students List
          </div>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 cursor-not-allowed">
            <Clock className="h-4 w-4" />
            Attendance
          </div>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 cursor-not-allowed">
            <Calendar className="h-4 w-4" />
            Scheduling
          </div>
        </div>

        {/* Tab Panel */}
        <div className="flex-1 p-4 overflow-y-auto bg-slate-50/50">
          {activeTab === "overview" ? (
            <div className="space-y-4">
              {/* Quick Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Enrolled Students</span>
                    <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Users className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-slate-950">1,248</span>
                    <span className="text-[10px] font-semibold text-emerald-600 flex items-center">
                      +4.2%
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Average GPA Score</span>
                    <div className="h-7 w-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-slate-950">84.2%</span>
                    <span className="text-[10px] font-semibold text-emerald-600 flex items-center">
                      +1.8%
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Daily Attendance</span>
                    <div className="h-7 w-7 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-slate-950">96.8%</span>
                    <span className="text-[10px] font-semibold text-emerald-600 flex items-center">
                      +0.4%
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Content Split: Class Roster + Action Items */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Roster Mockup */}
                <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Active Class Status
                    </h4>
                    <span className="text-[10px] text-blue-600 font-semibold cursor-pointer">
                      View All
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { class: "Grade 10-A Algebra", status: "In Progress", color: "text-blue-600 bg-blue-50" },
                      { class: "Grade 11 Chemistry", status: "Lab Session", color: "text-purple-600 bg-purple-50" },
                      { class: "Grade 9 Literature", status: "Completed", color: "text-emerald-600 bg-emerald-50" }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all text-xs"
                      >
                        <span className="font-semibold text-slate-800">{item.class}</span>
                        <span className={`px-2 py-0.5 rounded-full font-medium text-[10px] ${item.color}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Notification Assist Banner */}
                <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-xl p-4 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 opacity-10">
                    <Sparkles className="h-32 w-32" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-blue-400 font-semibold text-[10px] uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5" />
                      AI Insights Available
                    </div>
                    <h4 className="mt-1.5 text-sm font-bold leading-snug">
                      Remedial groups generated for the Algebra term finals.
                    </h4>
                    <p className="mt-1 text-[11px] text-indigo-200 leading-relaxed max-w-[280px]">
                      EduCore AI detected a pattern in recent tests. Check out our automatic study guides.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("ai")}
                    className="mt-4 self-start bg-white text-indigo-950 text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-indigo-50 transition-colors"
                  >
                    Launch Assistant
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* AI Chat Assistant Mockup */
            <div className="flex flex-col h-full bg-white border border-slate-200/80 rounded-xl overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">EduCore AI Co-pilot</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Model v2.5 Online</span>
              </div>

              {/* Chat Dialog Scroll */}
              <div className="flex-1 p-3 overflow-y-auto space-y-3 min-h-0 text-xs">
                {chatLog.map((chat, idx) => (
                  <div
                    key={idx}
                    className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl p-3 leading-relaxed shadow-sm ${
                        chat.sender === "user"
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/50"
                      }`}
                    >
                      <p>{chat.text.replace(/\*\*(.*?)\*\*/g, "$1")}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleSendMessage} className="border-t border-slate-200 p-2 flex gap-1.5 shrink-0">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask a question (e.g. 'Generate math progress report')..."
                  className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 bg-slate-50"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

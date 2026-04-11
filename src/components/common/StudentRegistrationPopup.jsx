import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

const COUNTRIES = [
  { code: "CA", name: "Canada" },
  { code: "US", name: "U.S.A." },
  { code: "AU", name: "Australia" },
  { code: "GB", name: "U.K." },
  { code: "DE", name: "Germany" },
  { code: "IE", name: "Ireland" },
];

const STUDY_LEVELS = [
  { icon: "🎓", label: "Master's or Post-Graduate Certificate" },
  { icon: "📘", label: "Bachelor's Degree" },
  { icon: "🏅", label: "College Diploma / Certificate" },
  { icon: "🔬", label: "PhD / Doctorate" },
  { icon: "📋", label: "Short Course / Language Program" },
];

const FIELDS = [
  "Business & Management",
  "Engineering & Technology",
  "Health & Medicine",
  "Arts & Humanities",
  "Law & Social Sciences",
  "Computer Science & IT",
  "Education",
  "Architecture & Design",
];

const NATIONALITIES = [
  "Bangladesh",
  "India",
  "Pakistan",
  "Nepal",
  "Nigeria",
  "Philippines",
  "China",
  "Brazil",
  "Vietnam",
  "Indonesia",
  "Egypt",
  "Ghana",
  "Kenya",
  "Sri Lanka",
  "Malaysia",
  "Morocco",
  "Iran",
  "Turkey",
];

const NAT_FLAGS = {
  Bangladesh: "BD",
  India: "IN",
  Pakistan: "PK",
  Nepal: "NP",
  Nigeria: "NG",
  Philippines: "PH",
  China: "CN",
  Brazil: "BR",
  Vietnam: "VN",
  Indonesia: "ID",
  Egypt: "EG",
  Ghana: "GH",
  Kenya: "KE",
  "Sri Lanka": "LK",
  Malaysia: "MY",
  Morocco: "MA",
  Iran: "IR",
  Turkey: "TR",
};

const EXAM_TYPES = [
  "IELTS",
  "TOEFL",
  "PTE",
  "Duolingo",
  "CAEL",
  "CanTest",
  "Other",
];

const BENEFITS = [
  { icon: "💰", title: "$500 offer", sub: "for early applicants" },
  {
    icon: "🎓",
    title: "Scholarship opportunities",
    sub: "matched to your profile",
  },
  { icon: "🧑‍💼", title: "Free 1:1 session", sub: "with an education advisor" },
  { icon: "🆓", title: "Free services", sub: "application & visa support" },
  {
    icon: "⚡",
    title: "Priority processing",
    sub: "faster application review",
  },
];

const WIZARD_STEPS = 7;

const stepLabels = [
  "Destination",
  "Field of Study",
  "Study Level",
  "Nationality",
  "English Proficiency",
  "Financials",
  "Summary",
  "Your Info",
];

const Progress = ({ step }) => (
  <div className="flex gap-1 mt-2">
    {Array.from({ length: WIZARD_STEPS }).map((_, i) => (
      <div
        key={i}
        className="h-1 flex-1 rounded-full transition-all duration-500"
        style={{
          background:
            i < step ? "linear-gradient(90deg,#1a5fd8,#6c3de8)" : "#e2e8f0",
        }}
      />
    ))}
  </div>
);

const MascotBubble = ({ text }) => (
  <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl px-4 py-3 mb-5 border border-blue-100">
    <div className="text-2xl flex-shrink-0">🎓</div>
    <p
      className="font-semibold text-[#1a2340] text-[15px] leading-snug"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {text}
    </p>
  </div>
);

const ContinueBtn = ({ onClick, label = "Continue", disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-full py-3.5 rounded-2xl font-bold text-[16px] text-white transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    style={{
      fontFamily: "'Montserrat', sans-serif",
      background: disabled
        ? "linear-gradient(135deg,#b0bec5,#90a4ae)"
        : "linear-gradient(135deg,#1a5fd8 0%,#6c3de8 100%)",
      boxShadow: disabled ? "none" : "0 4px 18px rgba(26,95,216,0.35)",
    }}
  >
    <span>✦</span> {label}
  </button>
);

const StepDestination = ({ selected, toggle }) => (
  <div>
    <MascotBubble text="Which countries are you interested in?" />
    <div
      className="w-full h-32 rounded-2xl mb-5 overflow-hidden flex items-center justify-center relative"
      style={{
        background:
          "linear-gradient(135deg,#0d47a1 0%,#1565c0 40%,#00897b 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-around px-6">
        {["CA", "US", "AU", "GB"].map((c) => (
          <div
            key={c}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
          >
            <ReactCountryFlag
              countryCode={c}
              svg
              style={{ width: "1.6em", height: "1.6em" }}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2.5">
      {COUNTRIES.map(({ code, name }) => {
        const active = selected.includes(code);
        return (
          <button
            key={code}
            onClick={() => toggle(code)}
            className="flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-2xl border-2 transition-all duration-200 cursor-pointer"
            style={{
              borderColor: active ? "#1a5fd8" : "#e2e8f0",
              background: active
                ? "linear-gradient(135deg,#eff6ff,#eef2ff)"
                : "#f8fafc",
              boxShadow: active ? "0 2px 12px rgba(26,95,216,0.18)" : "none",
              transform: active ? "scale(1.04)" : "scale(1)",
            }}
          >
            <ReactCountryFlag
              countryCode={code}
              svg
              style={{ width: "2em", height: "2em" }}
              className="rounded"
            />
            <span
              className="text-[12px] font-semibold text-[#1a2340]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {name}
            </span>
          </button>
        );
      })}
    </div>
  </div>
);

const StepFieldOfStudy = ({ field, setField, program, setProgram }) => {
  const [fOpen, setFOpen] = useState(false);
  const programs = [
    "Accounting",
    "Finance",
    "MBA",
    "Software Engineering",
    "Data Science",
    "Nursing",
    "Medicine",
    "Architecture",
    "Law",
    "Education",
  ];
  return (
    <div>
      <MascotBubble text="What would you like to study?" />
      <div
        className="w-full h-32 rounded-2xl mb-5 overflow-hidden flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg,#283593 0%,#5c35d0 60%,#9c27b0 100%)",
        }}
      >
        <div className="flex gap-4 items-center">
          <span className="text-4xl">💡</span>
          <span className="text-4xl">⚕️</span>
          <span className="text-4xl">🔬</span>
        </div>
      </div>
      <div className="relative mb-3">
        <button
          onClick={() => setFOpen((v) => !v)}
          className="w-full flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-left transition-all hover:border-blue-300"
        >
          <span className="text-gray-400">🔍</span>
          <span
            className={`flex-1 text-[14px] ${field ? "text-[#1a2340] font-semibold" : "text-gray-400"}`}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {field || "Select a field of study"}
          </span>
          <span className="text-gray-400 text-xs">{fOpen ? "▲" : "▼"}</span>
        </button>
        {fOpen && (
          <div className="absolute z-20 w-full mt-1 bg-white border border-blue-100 rounded-xl shadow-xl max-h-48 overflow-y-auto">
            {FIELDS.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setField(f);
                  setFOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-[14px] hover:bg-blue-50 text-[#1a2340] transition-colors"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>
      <select
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-[14px] text-[#1a2340] appearance-none cursor-pointer focus:outline-none focus:border-blue-400"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <option value="">🔍 Select a program of study</option>
        {programs.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
    </div>
  );
};

//Step 3 — Study Level

const StepStudyLevel = ({ selected, setSelected }) => (
  <div>
    <MascotBubble text="What is your intended level of study?" />
    <div
      className="w-full h-28 rounded-2xl mb-5 overflow-hidden flex items-end justify-center"
      style={{ background: "linear-gradient(135deg,#1565c0 0%,#1976d2 100%)" }}
    >
      <span className="text-6xl mb-1">👨‍🎓</span>
    </div>
    <div className="flex flex-col gap-2">
      {STUDY_LEVELS.map(({ icon, label }) => {
        const active = selected === label;
        return (
          <button
            key={label}
            onClick={() => setSelected(label)}
            className="flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 transition-all duration-200 text-left"
            style={{
              borderColor: active ? "#1a5fd8" : "#e2e8f0",
              background: active
                ? "linear-gradient(135deg,#eff6ff,#eef2ff)"
                : "#f8fafc",
              transform: active ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <span className="text-xl">{icon}</span>
            <span
              className="text-[14px] font-semibold text-[#1a2340]"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  </div>
);

// Step 4 — Nationality

const StepNationality = ({ nationality, setNationality }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = NATIONALITIES.filter((n) =>
    n.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <MascotBubble text="What is your nationality?" />
      <div
        className="w-full h-28 rounded-2xl mb-5 overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#388e3c 0%,#66bb6a 100%)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop"
          alt="students"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center gap-2 px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-left hover:border-blue-300 transition-all"
        >
          {nationality ? (
            <>
              <ReactCountryFlag
                countryCode={NAT_FLAGS[nationality] || "BD"}
                svg
                style={{ width: "1.4em", height: "1.4em" }}
              />
              <span
                className="flex-1 text-[14px] font-semibold text-[#1a2340]"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {nationality}
              </span>
            </>
          ) : (
            <span
              className="flex-1 text-[14px] text-gray-400"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Select nationality
            </span>
          )}
          <span className="text-xs text-gray-400">{open ? "▲" : "▼"}</span>
        </button>
        {open && (
          <div className="absolute z-20 w-full mt-1 bg-white border border-blue-100 rounded-xl shadow-xl">
            <div className="p-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country..."
                className="w-full px-3 py-2 text-[13px] rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              />
            </div>
            <div className="max-h-44 overflow-y-auto">
              {filtered.map((n) => (
                <button
                  key={n}
                  onClick={() => {
                    setNationality(n);
                    setOpen(false);
                    setSearch("");
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-blue-50 transition-colors"
                >
                  <ReactCountryFlag
                    countryCode={NAT_FLAGS[n] || "BD"}
                    svg
                    style={{ width: "1.3em", height: "1.3em" }}
                  />
                  <span
                    className="text-[14px] text-[#1a2340]"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {n}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

//Step 5 — English Proficiency

const StepEnglish = ({
  hasResults,
  setHasResults,
  examType,
  setExamType,
  score,
  setScore,
}) => (
  <div>
    <MascotBubble text="Let's talk about English tests" />
    <div
      className="w-full h-28 rounded-2xl mb-5 overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg,#c62828 0%,#e91e63 100%)" }}
    >
      <span className="text-5xl">📝</span>
    </div>
    <div className="bg-gray-50 rounded-xl px-4 py-3 mb-4">
      <p
        className="flex items-center gap-2 text-[13px] font-semibold text-[#1a2340] mb-1"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <span>📖</span> Do you have any English test results?
      </p>
      <p
        className="text-[12px] text-gray-400 ml-6"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        IELTS, TOEFL, PTE, Duolingo, etc.
      </p>
    </div>
    <div className="flex gap-3 mb-5">
      {["Yes, I have results", "No, I don't have any"].map((opt) => {
        const isYes = opt.startsWith("Yes");
        const active = hasResults === isYes;
        return (
          <button
            key={opt}
            onClick={() => setHasResults(isYes)}
            className="flex-1 py-2.5 rounded-xl border-2 text-[13px] font-semibold transition-all duration-200"
            style={{
              borderColor: active ? "#1a5fd8" : "#e2e8f0",
              background: active
                ? "linear-gradient(135deg,#eff6ff,#eef2ff)"
                : "#f8fafc",
              color: active ? "#1a5fd8" : "#64748b",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
    {hasResults && (
      <div className="flex gap-3">
        <div className="flex-1">
          <label
            className="text-[12px] font-bold text-[#1a2340] mb-1.5 block"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Exam Type <span className="text-red-500">*</span>
          </label>
          <select
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 text-[13px] focus:outline-none focus:border-blue-400 bg-white"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {EXAM_TYPES.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label
            className="text-[12px] font-bold text-[#1a2340] mb-1.5 block"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Overall Score
          </label>
          <input
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="e.g. 7.0"
            className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 text-[13px] focus:outline-none focus:border-blue-400"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          />
        </div>
      </div>
    )}
  </div>
);

// Step 6 — Financials

const StepFinancials = ({
  budget,
  setBudget,
  loanInterest,
  setLoanInterest,
}) => (
  <div>
    <MascotBubble text="Available funds for tuition and living expenses abroad? (USD)" />
    <div
      className="w-full h-28 rounded-2xl mb-5 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#f57f17 0%,#fbc02d 100%)" }}
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1742395281371-626ffd3cc0e0?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="graduates"
        className="w-full h-full object-cover opacity-80"
      />
    </div>
    <div
      className="flex flex-col items-center justify-center py-5 rounded-2xl mb-4"
      style={{ background: "linear-gradient(135deg,#f0f9ff,#e0f2fe)" }}
    >
      <span
        className="text-[13px] text-gray-500 mb-1"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        $ per year
      </span>
      <span
        className="text-[32px] font-extrabold text-[#1a5fd8]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {budget.toLocaleString()}
      </span>
    </div>
    <div className="px-1 mb-5">
      <input
        type="range"
        min={0}
        max={50000}
        step={500}
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{ accentColor: "#1a5fd8" }}
      />
      <div
        className="flex justify-between text-[12px] text-gray-400 mt-1"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <span>$0</span>
        <span>$50,000</span>
      </div>
    </div>
    <label className="flex items-center gap-3 cursor-pointer">
      <div
        onClick={() => setLoanInterest((v) => !v)}
        className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0"
        style={{
          borderColor: loanInterest ? "#1a5fd8" : "#cbd5e1",
          background: loanInterest ? "#1a5fd8" : "white",
        }}
      >
        {loanInterest && <span className="text-white text-[11px]">✓</span>}
      </div>
      <span
        className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1a2340]"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        💳 I'm interested in an education loan
      </span>
    </label>
  </div>
);

// Step 7 — Summary

const StepSummary = () => (
  <div className="text-center">
    <div className="text-5xl mb-3">🎉</div>
    <h3
      className="text-[20px] font-extrabold text-[#1a2340] mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      You've unlocked your personalized study plan!
    </h3>
    <p
      className="text-[13px] text-gray-500 mb-5 bg-blue-50 rounded-xl px-4 py-3"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      Congratulations! Your personalized plan is ready with exclusive benefits
      designed just for you.
    </p>
    <p
      className="text-[14px] font-bold text-[#1a2340] mb-3 text-left"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Your Exclusive Benefits
    </p>
    <div className="flex flex-col gap-2.5">
      {BENEFITS.map(({ icon, title, sub }) => (
        <div
          key={title}
          className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50"
        >
          <span className="text-xl flex-shrink-0">{icon}</span>
          <div className="text-left">
            <p
              className="text-[14px] font-bold text-[#1a2340]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {title}
            </p>
            <p
              className="text-[12px] text-gray-500"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Step 8 — Personal Info

const StepPersonalInfo = ({ data, setData }) => {
  const update = (k, v) => setData((p) => ({ ...p, [k]: v }));
  const [phoneCode, setPhoneCode] = useState("BD");
  const phoneCodes = [
    { code: "BD", dial: "+880" },
    { code: "IN", dial: "+91" },
    { code: "US", dial: "+1" },
    { code: "GB", dial: "+44" },
    { code: "AU", dial: "+61" },
    { code: "CA", dial: "+1" },
  ];
  const Field = ({ label, icon, required = true, ...props }) => (
    <div>
      <label
        className="text-[12px] font-bold text-[#1a2340] mb-1.5 block"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[15px]">
          {icon}
        </span>
        <input
          {...props}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border-2 border-gray-200 text-[14px] focus:outline-none focus:border-blue-400 transition-colors"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        />
      </div>
    </div>
  );
  return (
    <div>
      <MascotBubble text="Almost there! Tell us about yourself 👋" />
      <div className="flex flex-col gap-3.5">
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="First Name"
            icon="👤"
            placeholder="First name"
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
          <Field
            label="Last Name"
            icon="👤"
            placeholder="Last name"
            value={data.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
        </div>
        <Field
          label="Email Address"
          icon="✉️"
          type="email"
          placeholder="your@email.com"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
        />
        <div>
          <label
            className="text-[12px] font-bold text-[#1a2340] mb-1.5 block"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <select
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
              className="px-2 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-[13px] focus:outline-none focus:border-blue-400 cursor-pointer"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                minWidth: "90px",
              }}
            >
              {phoneCodes.map(({ code, dial }) => (
                <option key={code} value={code}>
                  {dial}
                </option>
              ))}
            </select>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                📞
              </span>
              <input
                type="tel"
                placeholder="Phone number"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border-2 border-gray-200 text-[14px] focus:outline-none focus:border-blue-400 transition-colors"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              />
            </div>
          </div>
        </div>
        <Field
          label="Date of Birth"
          icon="🎂"
          type="date"
          value={data.dob}
          onChange={(e) => update("dob", e.target.value)}
        />
        <div>
          <label
            className="text-[12px] font-bold text-[#1a2340] mb-2 block"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            {["Male", "Female", "Other"].map((g) => (
              <button
                key={g}
                onClick={() => update("gender", g)}
                className="flex-1 py-2 rounded-xl border-2 text-[13px] font-semibold transition-all duration-200"
                style={{
                  borderColor: data.gender === g ? "#1a5fd8" : "#e2e8f0",
                  background:
                    data.gender === g
                      ? "linear-gradient(135deg,#eff6ff,#eef2ff)"
                      : "#f8fafc",
                  color: data.gender === g ? "#1a5fd8" : "#64748b",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label
            className="text-[12px] font-bold text-[#1a2340] mb-1.5 block"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            How did you hear about us?
          </label>
          <select
            value={data.source}
            onChange={(e) => update("source", e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-[14px] focus:outline-none focus:border-blue-400"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            <option value="">Select an option</option>
            {[
              "Social Media",
              "Google Search",
              "Friend / Referral",
              "University Fair",
              "Agent",
              "Other",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        {/* Terms */}
        <label className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => update("agree", !data.agree)}
            className="w-5 h-5 mt-0.5 rounded-md border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0"
            style={{
              borderColor: data.agree ? "#1a5fd8" : "#cbd5e1",
              background: data.agree ? "#1a5fd8" : "white",
            }}
          >
            {data.agree && <span className="text-white text-[11px]">✓</span>}
          </div>
          <span
            className="text-[12px] text-gray-500 leading-relaxed"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            I agree to the{" "}
            <span className="text-[#1a5fd8] font-semibold">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-[#1a5fd8] font-semibold">Privacy Policy</span>
          </span>
        </label>
      </div>
    </div>
  );
};

// Main Popup Component

const StudentRegistrationPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [animate, setAnimate] = useState(true);

  const [destinations, setDestinations] = useState([]);
  const [field, setField] = useState("");
  const [program, setProgram] = useState("");
  const [studyLevel, setStudyLevel] = useState("");
  const [nationality, setNationality] = useState("Bangladesh");
  const [hasResults, setHasResults] = useState(null);
  const [examType, setExamType] = useState("IELTS");
  const [score, setScore] = useState("");
  const [budget, setBudget] = useState(10000);
  const [loanInterest, setLoanInterest] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    source: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
      setDestinations([]);
      setField("");
      setProgram("");
      setStudyLevel("");
      setNationality("Bangladesh");
      setHasResults(null);
      setExamType("IELTS");
      setScore("");
      setBudget(10000);
      setLoanInterest(false);
      setPersonalInfo({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        source: "",
        agree: false,
      });
    }
  }, [isOpen]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const goNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setStep((s) => s + 1);
      setAnimate(true);
    }, 130);
  };
  const goBack = () => {
    setAnimate(false);
    setTimeout(() => {
      setStep((s) => s - 1);
      setAnimate(true);
    }, 130);
  };

  const canContinue = () => {
    if (step === 1) return destinations.length > 0;
    if (step === 2) return !!field;
    if (step === 3) return !!studyLevel;
    if (step === 4) return !!nationality;
    if (step === 5) return hasResults !== null;
    if (step === 8)
      return !!(
        personalInfo.firstName &&
        personalInfo.email &&
        personalInfo.agree
      );
    return true;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(10,20,60,0.60)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-[440px] bg-white rounded-3xl overflow-hidden flex flex-col"
        style={{
          maxHeight: "92vh",
          boxShadow:
            "0 30px 80px rgba(26,95,216,0.28), 0 0 0 1px rgba(26,95,216,0.07)",
          animation: "popIn 0.32s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <div
          className="h-1.5 w-full flex-shrink-0"
          style={{
            background: "linear-gradient(90deg,#1a5fd8,#6c3de8,#e91e8c)",
          }}
        />

        <div className="px-5 pt-4 pb-2 flex-shrink-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              {step > 1 && !submitted && (
                <button
                  onClick={goBack}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-50 transition-colors text-gray-600 font-bold text-base"
                >
                  ‹
                </button>
              )}
              <span
                className="text-[15px] font-bold text-[#1a2340]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {submitted ? "Registration Complete!" : stepLabels[step - 1]}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {!submitted && (
                <span
                  className="text-[13px] font-semibold text-gray-400"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {step}/8
                </span>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 transition-all text-sm"
              >
                ✕
              </button>
            </div>
          </div>
          {!submitted && (
            <Progress step={step > WIZARD_STEPS ? WIZARD_STEPS : step} />
          )}
        </div>

        <div
          className="px-5 py-4 overflow-y-auto flex-1"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.16s ease, transform 0.16s ease",
          }}
        >
          {submitted ? (
            <div className="text-center py-6">
              <div className="text-6xl mb-4">🚀</div>
              <h3
                className="text-[22px] font-extrabold text-[#1a2340] mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Welcome Aboard!
              </h3>
              <p
                className="text-[14px] text-gray-500 mb-6 leading-relaxed"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Thank you, <strong>{personalInfo.firstName}</strong>! Your
                registration is confirmed. An advisor will reach out within 24
                hours.
              </p>
              <div className="flex flex-col gap-2.5 mb-6">
                {BENEFITS.map(({ icon, title, sub }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
                  >
                    <span className="text-xl">{icon}</span>
                    <div className="text-left">
                      <p
                        className="text-[13px] font-bold text-[#1a2340]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {title}
                      </p>
                      <p
                        className="text-[11px] text-gray-500"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-2xl font-bold text-white text-[16px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: "linear-gradient(135deg,#1a5fd8,#6c3de8)",
                  boxShadow: "0 4px 18px rgba(26,95,216,0.35)",
                }}
              >
                ✦ Close
              </button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <StepDestination
                  selected={destinations}
                  toggle={(c) =>
                    setDestinations((p) =>
                      p.includes(c) ? p.filter((x) => x !== c) : [...p, c],
                    )
                  }
                />
              )}
              {step === 2 && (
                <StepFieldOfStudy
                  field={field}
                  setField={setField}
                  program={program}
                  setProgram={setProgram}
                />
              )}
              {step === 3 && (
                <StepStudyLevel
                  selected={studyLevel}
                  setSelected={setStudyLevel}
                />
              )}
              {step === 4 && (
                <StepNationality
                  nationality={nationality}
                  setNationality={setNationality}
                />
              )}
              {step === 5 && (
                <StepEnglish
                  hasResults={hasResults}
                  setHasResults={setHasResults}
                  examType={examType}
                  setExamType={setExamType}
                  score={score}
                  setScore={setScore}
                />
              )}
              {step === 6 && (
                <StepFinancials
                  budget={budget}
                  setBudget={setBudget}
                  loanInterest={loanInterest}
                  setLoanInterest={setLoanInterest}
                />
              )}
              {step === 7 && <StepSummary />}
              {step === 8 && (
                <StepPersonalInfo
                  data={personalInfo}
                  setData={setPersonalInfo}
                />
              )}
            </>
          )}
        </div>

        {!submitted && (
          <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
            {step < 7 && (
              <ContinueBtn onClick={goNext} disabled={!canContinue()} />
            )}
            {step === 7 && <ContinueBtn onClick={goNext} label="Start Now →" />}
            {step === 8 && (
              <ContinueBtn
                onClick={() => setSubmitted(true)}
                label="Register Now 🎓"
                disabled={!canContinue()}
              />
            )}
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600;700&display=swap');
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.86) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg,#1a5fd8,#6c3de8);
          box-shadow: 0 2px 8px rgba(26,95,216,0.4);
          cursor: pointer;
        }
        input[type=range]::-webkit-slider-runnable-track {
          height: 6px; border-radius: 4px; background: #e2e8f0;
        }
      `}</style>
    </div>
  );
};

export default StudentRegistrationPopup;

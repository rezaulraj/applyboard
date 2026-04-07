import React from "react";

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="max-w-6xl mx-auto bg-blue-50 rounded-[20px] px-16 py-14 flex items-center justify-between gap-10 overflow-hidden min-h-[400px]">
        {/* Left Content */}
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-5xl font-bold font-montserrat text-[#1E2D4E] leading-normal">
            Your Future Goes
            <span className="block text-blue-600">Beyond Borders</span>
          </h1>
          <p className="font-sans text-[18px] text-gray-500 leading-relaxed mt-4 mb-8 max-w-[420px]">
            Explore 1,500+ global universities and colleges. Submit your best
            possible application with a 95% success rate. Unlock your full
            potential with ApplyBoard!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 font-sans leading-relaxed text-white font-bold text-[18px] px-7 py-3 rounded-lg transition-colors duration-200">
            Register as a Student
          </button>
        </div>

        {/* Diamond Image Grid */}
        <div className="shrink-0 relative w-[380px] h-[420px]">
          <div
            className="absolute inset-0 grid gap-10"
            style={{
              gridTemplateColumns: "repeat(2, 130px)",
              gridTemplateRows: "repeat(3, 130px)",
              transform: "rotate(45deg) translate(-10px, 30px)",
              transformOrigin: "center center",
            }}
          >
            {[
              {
                bg: "bg-amber-400",
                col: 2,
                row: 1,
                src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=400&fit=crop&crop=face",
              },
              {
                bg: "bg-violet-500",
                col: 1,
                row: 2,
                src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
              },
              {
                bg: "bg-emerald-500",
                col: 2,
                row: 2,
                src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
              },
              {
                bg: "bg-red-500",
                col: 1,
                row: 3,
                src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
              },
              {
                bg: "bg-blue-300",
                col: 2,
                row: 3,
                src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} rounded-[18px] overflow-hidden w-[150px] h-[150px]`}
                style={{ gridColumn: item.col, gridRow: item.row }}
              >
                <img
                  src={item.src}
                  alt={`Student ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    transform: "rotate(-45deg) scale(1.55)",
                    transformOrigin: "center center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

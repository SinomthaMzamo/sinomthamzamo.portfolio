import React, { useState } from "react";
import {
  Shuffle,
  ChevronDown,
  Sparkles,
  Dices,
  Zap,
  Wand2,
} from "lucide-react";



const avatarOptions = [
  { id: "nerdy", label: "nerdy", imgSrc: "assets/avatar-nerdy.png" },
  { id: "irl", label: "irl", imgSrc: "assets/avatar-irl.png" },
  { id: "plain", label: "plain", imgSrc: "assets/avatar-plain.png" },
  { id: "space", label: "space", imgSrc: "assets/avatar-space.png" },
  { id: "lake", label: "lake", imgSrc: "assets/avatar-lake.png" },
  { id: "arcade", label: "arcade", imgSrc: "assets/avatar-arcade.png" },
  { id: "library", label: "library", imgSrc: "assets/avatar-library.png" },
  { id: "beach", label: "beach", imgSrc: "assets/avatar-beach.png" },
  { id: "bakery", label: "bakery", imgSrc: "assets/avatar-bakery.png" },
  { id: "moana", label: "moana", imgSrc: "assets/avatar-moana.png" },
  { id: "tailor", label: "tailor", imgSrc: "assets/avatar-tailor.png" },
  {
    id: "strange",
    label: "strange",
    imgSrc: "assets/avatar-dr-strange.png",
  },
  { id: "farm", label: "farm", imgSrc: "assets/avatar-farm.png" },
  {
    id: "spiderman",
    label: "spidey",
    imgSrc: "assets/avatar-spiderman.png",
  },
  { id: "spooky", label: "spooky", imgSrc: "assets/avatar-spooky.png" },
  { id: "vamp", label: "vamp", imgSrc: "assets/avatar-vamp.png" },
];

// Variation 1: Slide Animation
export default function Variation1(){
  const [selected, setSelected] = useState(avatarOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  const shuffle = () => {
    setIsAnimating(true);
    setDirection("right");
    setTimeout(() => {
      const current = avatarOptions.findIndex((a) => a.id === selected.id);
      let randomIndex = Math.floor(Math.random() * avatarOptions.length);
      console.log("current", current, "random index", randomIndex);
      while (randomIndex == current){
        randomIndex = Math.floor(Math.random() * avatarOptions.length);
      }
      // const next = (current + 1) % avatarOptions.length;
      setSelected(avatarOptions[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const selectAvatar = (opt) => {
    const currentIndex = avatarOptions.findIndex((a) => a.id === selected.id);
    const newIndex = avatarOptions.findIndex((a) => a.id === opt.id);
    setDirection(newIndex > currentIndex ? "right" : "left");
    setIsAnimating(true);
    setTimeout(() => {
      setSelected(opt);
      setIsOpen(false);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative">
      <div className="absolute z-40 -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
        <Sparkles size={16} className="text-emerald-300" />
        <span className="text-sm text-white font-semibold tracking-wide">
          {selected.label}
        </span>
      </div>
      <div className="w-64 h-64 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isAnimating
              ? direction === "right"
                ? "translate-x-full opacity-0"
                : "-translate-x-full opacity-0"
              : "translate-x-0"
          }`}
        >
          <img src={selected.imgSrc} alt={selected.imgSrc.split("-")[1]} />
        </div>

        <div
          className={`relative z-10 text-white text-3xl font-bold transition-all duration-300 ${
            isAnimating
              ? direction === "right"
                ? "translate-x-full opacity-0"
                : "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        ></div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="flex gap-2">
          <button
            onClick={shuffle}
            className="group w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 border-2 border-white"
          >
            <Dices
              size={26}
              className="group-hover:rotate-12 transition-transform"
            />
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 h-14 bg-white hover:bg-gray-50 rounded-full shadow-2xl flex items-center justify-center text-emerald-600 transition-all hover:scale-110 active:scale-95 border-4 border-white"
            >
              <ChevronDown
                size={26}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute bottom-full mb-3 -right-28 bg-white rounded-2xl shadow-2xl p-2 w-80 z-20 border-2 border-emerald-100 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="grid grid-cols-4 gap-2">
                  {avatarOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => selectAvatar(opt)}
                      className={`w-full whitespace-nowrap text-center px-1 py-2.5 rounded-xl hover:bg-emerald-50 transition-all text-sm font-medium ${
                        selected.id === opt.id
                          ? "bg-emerald-500 text-white shadow-md scale-105"
                          : "text-gray-700"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Variation 2: Fade & Scale Animation
const Variation2 = () => {
  const [selected, setSelected] = useState(avatarOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const shuffle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const current = avatarOptions.findIndex((a) => a.id === selected.id);
      const next = (current + 1) % avatarOptions.length;
      setSelected(avatarOptions[next]);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  const selectAvatar = (opt) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelected(opt);
      setIsOpen(false);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  return (
    <div className="relative">
      <div className="w-72 h-72 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center relative overflow-hidden border-4 border-teal-400/20 shadow-2xl">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            selected.color
          } transition-all duration-300 ${
            isAnimating ? "scale-0 opacity-0" : "scale-100 opacity-30"
          }`}
        ></div>

        <div
          className={`relative z-10 text-white text-3xl font-bold transition-all duration-300 ${
            isAnimating
              ? "scale-0 opacity-0 rotate-45"
              : "scale-100 opacity-100 rotate-0"
          }`}
        >
          {selected.label}
        </div>

        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <Zap size={16} className="text-yellow-300" />
          <span className="text-sm text-white font-semibold tracking-wide">
            {selected.label}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="flex gap-3">
          <button
            onClick={shuffle}
            className="group relative w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 border-4 border-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            <Shuffle size={26} className="relative z-10" />
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-16 h-16 bg-white hover:bg-gray-50 rounded-full shadow-2xl flex items-center justify-center text-purple-600 transition-all hover:scale-110 active:scale-95 border-4 border-white"
            >
              <ChevronDown
                size={26}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute bottom-full mb-3 right-0 bg-white rounded-2xl shadow-2xl p-2 w-44 z-20 border-2 border-purple-100">
                {avatarOptions.map((opt, idx) => (
                  <button
                    key={opt.id}
                    onClick={() => selectAvatar(opt)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-purple-50 transition-all text-sm font-medium ${
                      selected.id === opt.id
                        ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md"
                        : "text-gray-700"
                    }`}
                    style={{ animationDelay: `${idx * 30}ms` }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Variation 3: Flip Animation
const Variation3 = () => {
  const [selected, setSelected] = useState(avatarOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const shuffle = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const current = avatarOptions.findIndex((a) => a.id === selected.id);
      const next = (current + 1) % avatarOptions.length;
      setSelected(avatarOptions[next]);
    }, 300);
    setTimeout(() => setIsFlipping(false), 600);
  };

  const selectAvatar = (opt) => {
    setIsFlipping(true);
    setTimeout(() => {
      setSelected(opt);
      setIsOpen(false);
    }, 300);
    setTimeout(() => setIsFlipping(false), 600);
  };

  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      <div
        className={`w-72 h-72 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center relative overflow-hidden border-4 border-teal-400/20 shadow-2xl transition-transform duration-600 ${
          isFlipping ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipping ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${selected.color} opacity-30`}
          style={{ backfaceVisibility: "hidden" }}
        ></div>

        <div
          className="relative z-10 text-white text-3xl font-bold"
          style={{ backfaceVisibility: "hidden" }}
        >
          {selected.label}
        </div>

        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <Wand2 size={16} className="text-pink-300" />
          <span className="text-sm text-white font-semibold tracking-wide">
            {selected.label}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="flex gap-3">
          <button
            onClick={shuffle}
            disabled={isFlipping}
            className="group relative w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 border-4 border-white disabled:opacity-50"
          >
            <Wand2
              size={26}
              className={`${isFlipping ? "animate-spin" : ""}`}
            />
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-16 h-16 bg-white hover:bg-gray-50 rounded-full shadow-2xl flex items-center justify-center text-pink-600 transition-all hover:scale-110 active:scale-95 border-4 border-white"
            >
              <ChevronDown
                size={26}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute bottom-full mb-3 right-0 bg-white rounded-2xl shadow-2xl p-2 w-44 z-20 border-2 border-pink-100">
                {avatarOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => selectAvatar(opt)}
                    disabled={isFlipping}
                    className={`w-full text-left px-4 py-2.5 rounded-xl hover:bg-pink-50 transition-all text-sm font-medium ${
                      selected.id === opt.id
                        ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md"
                        : "text-gray-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


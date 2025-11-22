import React from "react";

const SkillCard = ({ skill }) => {
  const { skillName, skillDescription, icon: Icon } = skill;

  return (
    <div
      className="
        group relative rounded-2xl p-[1px]
        bg-gradient-to-br from-purple-500/60 via-blue-500/60 to-pink-500/60
        hover:from-purple-500 hover:via-blue-500 hover:to-pink-500
        transition-all duration-300 shadow-xl
      "
    >
      <div
        className="
          bg-white/80 backdrop-blur-xl dark:bg-black/40
          rounded-2xl p-6 text-center
          flex flex-col items-center gap-3 transition-all duration-300
          group-hover:scale-[1.02]

          min-h-[260px]   /* ✅ All cards same height */
          flex
          flex-col
          justify-between
        "
      >
        {/* ICON */}
        <div
          className="flex items-center justify-center transition-all duration-300 rounded-full shadow-lg w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:shadow-purple-400/40"
        >
          <Icon className="text-purple-700 w-7 h-7 dark:text-purple-300" />
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-otterco">
          {skillName}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 font-otterco">
          {skillDescription}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;

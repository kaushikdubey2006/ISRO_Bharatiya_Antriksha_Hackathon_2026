import { motion } from "framer-motion";

function ModuleCard({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl w-full"
    >
      <div className="text-6xl mb-5">{icon}</div>

      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 text-slate-400 leading-7">
        {description}
      </p>

      <button
        onClick={onClick}
        className="mt-8 w-full rounded-xl bg-cyan-500 py-3 text-lg font-semibold text-white hover:bg-cyan-600 transition"
      >
        {buttonText}
      </button>
    </motion.div>
  );
}

export default ModuleCard;
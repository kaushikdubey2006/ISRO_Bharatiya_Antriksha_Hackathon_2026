function StatCard({ title, value, icon, color = "text-cyan-400" }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">

      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <h2 className={`text-3xl font-bold ${color}`}>
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        {title}
      </p>

    </div>
  );
}

export default StatCard;
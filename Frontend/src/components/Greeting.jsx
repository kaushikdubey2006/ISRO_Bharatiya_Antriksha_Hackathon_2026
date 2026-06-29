import { motion } from "framer-motion";

function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mt-16"
    >
      <h2 className="text-4xl font-bold text-white">
        {greeting} 👋
      </h2>

      <p className="mt-5 text-slate-400 text-lg">
        Welcome to the
      </p>

      <h1 className="mt-2 text-5xl font-black text-cyan-400">
        AI-Based Environmental Decision Support System
      </h1>

      <p className="mt-5 text-slate-400 text-xl">
        Monitor • Predict • Analyze • Act
      </p>
    </motion.div>
  );
}

export default Greeting;
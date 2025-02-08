import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const Strategies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      console.log("Strategies section is now in view");
    }
  }, [inView]);

  const allocationData = [
    { name: "Large Cap Equity", value: 40 },
    { name: "Mid Cap Equity", value: 20 },
    { name: "Small Cap Equity", value: 10 },
    { name: "Fixed Income", value: 20 },
    { name: "Cash", value: 10 },
  ];

  const COLORS = ["#F59E0B", "#FBBF24", "#FCD34D", "#D97706", "#92400E"];

  return (
    <div className="pt-16">
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Investment Strategies & Portfolio Management
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pie Chart Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Model Portfolio Allocation</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {allocationData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Investment Strategies Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Key Investment Strategies</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">Value Investing</h3>
                  <p className="text-gray-600">Focus on undervalued assets with strong fundamentals</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">Growth Investing</h3>
                  <p className="text-gray-600">Target companies with high growth potential</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">Income Strategy</h3>
                  <p className="text-gray-600">Emphasis on dividend-paying stocks and bonds</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Portfolio Management Principles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose lg:prose-lg mx-auto"
        >
          <h2>Portfolio Management Principles</h2>
          <p>
            Successful portfolio management requires a disciplined approach to asset allocation, regular rebalancing, and careful consideration of risk tolerance and investment objectives.
            Our strategies focus on long-term wealth creation while maintaining appropriate risk levels.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Strategies;

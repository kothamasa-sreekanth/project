import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Performance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const performanceData = [
    { year: '2019', returns: 12.5 },
    { year: '2020', returns: 15.8 },
    { year: '2021', returns: 22.3 },
    { year: '2022', returns: -8.4 },
    { year: '2023', returns: 18.6 },
  ];

  const metrics = [
    { name: 'Alpha', value: '2.3%', description: 'Excess return relative to benchmark' },
    { name: 'Beta', value: '0.85', description: 'Market sensitivity measure' },
    { name: 'Sharpe Ratio', value: '1.8', description: 'Risk-adjusted return metric' },
    { name: 'Expense Ratio', value: '0.65%', description: 'Annual fund operating costs' },
  ];

  return (
    <div className="pt-16">
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-black"
      >
        <h1 className="text-4xl text-white font-bold text-gray-900 mb-8">
          Performance Analysis & Metrics
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl text-black font-semibold mb-6">Historical Returns</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis unit="%" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Returns']}
                    labelStyle={{ color: '#111827' }}
                  />
                  <Bar 
                    dataKey="returns" 
                    fill="#F59E0B"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl text-black font-semibold mb-6">Key Performance Metrics</h2>
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-200 pb-4 last:border-0"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-semibold">{metric.name}</h3>
                    <span className="text-2xl font-bold text-amber-600">{metric.value}</span>
                  </div>
                  <p className="text-gray-600">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose lg:prose-lg mx-auto text-white"
        >
          <h2>Understanding Performance Metrics</h2>
          <p>
            Performance analysis involves evaluating both absolute returns and risk-adjusted
            metrics. Our comprehensive approach considers multiple factors to provide a
            complete picture of investment performance and help make informed decisions.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Performance;
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MarketAnalysis = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const marketData = [
    { year: '2019', growth: 25 },
    { year: '2020', growth: -5 },
    { year: '2021', growth: 35 },
    { year: '2022', growth: -15 },
    { year: '2023', growth: 20 },
    { year: '2024', growth: 15 },
  ];

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
          Market Analysis & Future Trends
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Market Growth Trends</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis unit="%" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Growth']}
                    labelStyle={{ color: '#111827' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="growth" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Future Outlook</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">Digital Transformation</h3>
                  <p className="text-gray-600">Increasing adoption of fintech solutions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">ESG Integration</h3>
                  <p className="text-gray-600">Growing focus on sustainable investing</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <div>
                  <h3 className="font-semibold">AI & Machine Learning</h3>
                  <p className="text-gray-600">Enhanced analytics and decision-making</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default MarketAnalysis;
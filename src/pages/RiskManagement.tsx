import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RiskManagement = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const riskMetrics = [
    { name: 'Standard Deviation', value: '12.5%', description: 'Measure of volatility' },
    { name: 'Value at Risk (VaR)', value: '8.2%', description: 'Maximum potential loss' },
    { name: 'Sortino Ratio', value: '2.1', description: 'Downside risk-adjusted returns' },
    { name: 'Maximum Drawdown', value: '-15.3%', description: 'Largest peak-to-trough decline' },
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
          Risk Management & Diversification
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {riskMetrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{metric.name}</h3>
              <p className="text-3xl font-bold text-amber-600 mb-2">{metric.value}</p>
              <p className="text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="prose lg:prose-lg mx-auto">
          <h2>Risk Management Principles</h2>
          <p>
            Effective risk management involves identifying, measuring, and mitigating
            potential risks while maintaining portfolio performance. Our comprehensive
            approach ensures optimal risk-adjusted returns through diversification and
            constant monitoring.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default RiskManagement;
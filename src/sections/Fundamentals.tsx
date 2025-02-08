import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Fundamentals = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fundTypes = [
    {
      title: 'Equity Funds',
      description: 'Investment primarily in stocks for potential capital appreciation',
      icon: '📈',
    },
    {
      title: 'Debt Funds',
      description: 'Focus on fixed-income securities for stable returns',
      icon: '💰',
    },
    {
      title: 'Hybrid Funds',
      description: 'Balanced mix of stocks and bonds for moderate growth',
      icon: '⚖️',
    },
  ];

  return (
    <div className="pt-16">
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl text-black mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h1 className="text-4xl text-white font-bold text-gray-900 mb-8">
          Understanding Mutual Fund Fundamentals
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {fundTypes.map((fund, index) => (
            <motion.div
              key={fund.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-4xl mb-4">{fund.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{fund.title}</h3>
              <p className="text-gray-600">{fund.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="prose lg:prose-lg mx-auto text-white">
          <h2>How Mutual Funds Work</h2>
          <p>
            Mutual funds pool money from multiple investors to purchase a diversified
            portfolio of securities. This collective investment approach offers several
            advantages, including professional management and economies of scale.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Fundamentals;
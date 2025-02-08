import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Investment Planning',
    description: 'Strategic investment solutions tailored to your goals and risk tolerance.',
    icon: '📈'
  },
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth management services for long-term financial success.',
    icon: '💰'
  },
  {
    title: 'Retirement Planning',
    description: 'Secure your future with our expert retirement planning strategies.',
    icon: '🎯'
  },
  {
    title: 'Tax Optimization',
    description: 'Maximize your returns with efficient tax planning and optimization.',
    icon: '📊'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-padding">
        <div className="text-center">
          <motion.h2 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-2"
          >
            Our Services
          </motion.h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive financial solutions for your success
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
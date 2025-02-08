import { motion } from 'framer-motion';
// import { Parallax } from 'react-parallax';
import { useInView } from 'react-intersection-observer';

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* <Parallax
        blur={0}
        // bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
        strength={200}>
      </Parallax> */}
      
      <div className="h-full flex items-center justify-center bg-black/50">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Master Your Financial Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Your Journey to Investment Excellence Starts Here
            </motion.p>
          </div>
        </div>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl text-white font-bold text-gray-900 mb-8 ">
          Understanding Financial Management
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose lg:prose-lg">
            <p>
              Financial management is the cornerstone of building and preserving wealth.
              This comprehensive guide will walk you through the essential concepts,
              strategies, and best practices in mutual fund management.
            </p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl text-black font-semibold mb-4">Key Statistics</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-full">
                  <div className="flex text-black justify-between mb-1">
                    <span>Global AUM</span>
                    <span>$74.3T</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '85%' } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-amber-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span>Annual Growth Rate</span>
                    <span>12.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '65%' } : {}}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-amber-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Introduction;
import { motion } from 'framer-motion';

interface NavigationProps {
  onSectionClick: (id: string) => void;
}

const Navigation = ({ onSectionClick }: NavigationProps) => {
  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'fundamentals', label: 'Fundamentals' },
    { id: 'strategies', label: 'Strategies' },
    { id: 'performance', label: 'Performance' },
    { id: 'risk-management', label: 'Risk Management' },
    { id: 'market-analysis', label: 'Market Analysis' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-amber-600">FinGuide</span>
          
          <div className="hidden md:flex space-x-8">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onSectionClick(id)}
                className="nav-link text-sm font-medium"
              >
                {label}
              </button>
            ))}
          </div>

          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
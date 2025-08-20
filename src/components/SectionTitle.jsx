import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <div className={`relative mb-12 ${center ? 'text-center' : ''}`}>
       <motion.h2
        className="text-[40px] font-bold"
      >
        <span className="bg-gradient-to-r from-gray-600 via-blue-400 to-blue-800 dark:from-white dark:via-blue-200 dark:to-blue-200 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-[16px] font-medium m-1 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="mx-auto h-1 w-75 rounded-full mt-3"
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #60a5fa, #ffffff, #3b82f6)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default SectionTitle;

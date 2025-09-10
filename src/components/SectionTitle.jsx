import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <div className={`relative mt-8 mb-10 ${center ? 'text-center' : ''}`}>
       <motion.h2
        className="text-[36px] font-bold"
      >
        <span className="bg-gradient-to-r from-gray-600 via-blue-400 to-blue-800 dark:from-white
         dark:via-blue-200 dark:to-blue-200 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-[16px] font-medium text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
export default SectionTitle;
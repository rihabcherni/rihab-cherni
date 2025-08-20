import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ t, isDark }) => {
  return (
    <div className={`flex items-center justify-center h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-20 h-20">
          <motion.div
            className="w-20 h-20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(8)].map((_, index) => {
              const angle = (index * 45) * (Math.PI / 180);
              const x = 32 + 28 * Math.cos(angle);
              const y = 32 + 28 * Math.sin(angle);

              const colors = [
                'bg-blue-600',
                'bg-blue-500',
                'bg-blue-400',
                'bg-blue-300',
                'bg-blue-200',
                'bg-blue-100',
                'bg-white',
                'bg-gray-100'
              ];

              return (
                <div
                  key={index}
                  className={`absolute w-3 h-3 rounded-full animate-pulse ${colors[index]} border ${isDark ? 'border-gray-700' : 'border-gray-300'} shadow-sm`}
                  style={{
                    left: x - 6,
                    top: y - 6,
                  }}
                />
              );
            })}
          </motion.div>
        </div>
        <motion.p
          className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t.loading.text}
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;

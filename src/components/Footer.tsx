import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-8 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'linear-gradient(45deg, #3b82f6 25%, transparent 25%, transparent 75%, #14b8a6 75%, #14b8a6)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            {t.footer.made}{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.span>{' '}
            {t.footer.by} Ilias Jebrane
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm mt-2"
          >
            © {currentYear} {t.footer.rights}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

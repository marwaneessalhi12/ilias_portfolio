import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            {t.about.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-center mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="p-3 bg-blue-600 rounded-lg mr-4"
              >
                <GraduationCap className="text-white" size={28} />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t.education.title}
              </h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {t.education.masters}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t.education.mastersDesc}
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {t.education.bachelors}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t.education.bachelorsDesc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-center mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-3 bg-teal-500 rounded-lg mr-4"
              >
                <Briefcase className="text-white" size={28} />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t.experience.title}
              </h3>
            </div>

            <div className="flex items-center justify-center h-40">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 1, delay: 0.6 }}
                  className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2"
                >
                  5+
                </motion.div>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  {t.experience.years}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

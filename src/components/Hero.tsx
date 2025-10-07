import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    const loader = new GLTFLoader();
    let mixer: THREE.AnimationMixer | null = null;
    let model: THREE.Group | null = null;

    loader.load(
      '/models/ilias3D_hello.glb',
      (gltf) => {
        model = gltf.scene;
        scene.add(model);

        const isMobile = window.innerWidth < 768;
        model.scale.set(
          isMobile ? 1.5 : 2,
          isMobile ? 1.5 : 2,
          isMobile ? 1.5 : 2
        );
        model.position.set(0, -1, 0);

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          const helloAction = mixer.clipAction(gltf.animations[0]);
          const idleAction = gltf.animations[1] ? mixer.clipAction(gltf.animations[1]) : null;

          helloAction.setLoop(THREE.LoopOnce, 1);
          helloAction.clampWhenFinished = true;
          helloAction.play();

          if (idleAction) {
            helloAction.getMixer().addEventListener('finished', () => {
              idleAction.play();
            });
          }
        }
      },
      undefined,
      (error) => {
        console.error('Error loading 3D model:', error);
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      if (mixer) {
        mixer.update(clock.getDelta());
      }

      if (model) {
        model.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleDownloadCV = () => {
    const cvFiles = {
      en: '/cv/cv_en.pdf',
      fr: '/cv/cv_fr.pdf',
      ar: '/cv/cv_ar.pdf'
    };

    const link = document.createElement('a');
    link.href = cvFiles[language];
    link.download = `Ilias_Jebrane_CV_${language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-2"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
            >
              {t.hero.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-4"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                {t.hero.downloadCV}
              </button>

              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-teal-500 dark:text-teal-500 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-teal-500 transform hover:-translate-y-1 transition-all duration-300"
              >
                {t.hero.viewProjects}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              ref={containerRef}
              className="w-full h-[400px] md:h-[600px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700"
            >
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-slate-400 dark:text-slate-600" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

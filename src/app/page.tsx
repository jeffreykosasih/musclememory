'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';

interface MuscleGroup {
  name: string;
  href: string;
  color: string;
  svgPath?: string;
  svgColor: string;
}

const muscleGroups: MuscleGroup[] = [
  {
    name: 'Abs',
    href: '/abs',
    color: 'from-yellow-400 to-yellow-600',
    svgPath: '/images/exercises/body_abs.svg',
    svgColor: '#facc15',
  },
  {
    name: 'Arms',
    href: '/arms',
    color: 'from-blue-500 to-blue-700',
    svgPath: '/images/exercises/body_arms.svg',
    svgColor: '#3b82f6',
  },
  {
    name: 'Back',
    href: '/back',
    color: 'from-green-500 to-green-700',
    svgPath: '/images/exercises/body_back.svg',
    svgColor: '#22c55e',
  },
  {
    name: 'Cardio',
    href: '/cardio',
    color: 'from-pink-500 to-pink-700',
    svgPath: '/images/exercises/body_cardio.svg',
    svgColor: '#ec4899',
  },
  {
    name: 'Chest',
    href: '/chest',
    color: 'from-red-500 to-red-700',
    svgPath: '/images/exercises/body_chest.svg',
    svgColor: '#ef4444',
  },
  {
    name: 'Legs',
    href: '/legs',
    color: 'from-purple-500 to-purple-700',
    svgPath: '/images/exercises/body_legs.svg',
    svgColor: '#a855f7',
  },
  {
    name: 'Shoulders',
    href: '/shoulders',
    color: 'from-orange-500 to-orange-700',
    svgPath: '/images/exercises/body_shoulders.svg',
    svgColor: '#f97316',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
  },
};

// Function to generate CSS filters that colorize SVGs to specific colors
const getColorFilter = (hexColor: string): string => {
  // Precise CSS filters to colorize black SVGs to specific colors
  const colorFilters: { [key: string]: string } = {
    '#facc15':
      'brightness(0) saturate(100%) invert(85%) sepia(81%) saturate(303%) hue-rotate(359deg) brightness(101%) contrast(102%)', // Bright Yellow-400
    '#3b82f6':
      'brightness(0) saturate(100%) invert(38%) sepia(77%) saturate(2476%) hue-rotate(217deg) brightness(101%) contrast(94%)', // Vibrant Blue
    '#22c55e':
      'brightness(0) saturate(100%) invert(64%) sepia(88%) saturate(1553%) hue-rotate(87deg) brightness(119%) contrast(119%)', // Vibrant Green
    '#ec4899':
      'brightness(0) saturate(100%) invert(50%) sepia(93%) saturate(1352%) hue-rotate(297deg) brightness(104%) contrast(106%)', // Vibrant Pink
    '#ef4444':
      'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)', // Vibrant Red
    '#a855f7':
      'brightness(0) saturate(100%) invert(39%) sepia(57%) saturate(3012%) hue-rotate(267deg) brightness(99%) contrast(97%)', // Vibrant Purple
    '#f97316':
      'brightness(0) saturate(100%) invert(55%) sepia(95%) saturate(1575%) hue-rotate(359deg) brightness(102%) contrast(101%)', // Vibrant Orange
  };

  return colorFilters[hexColor] || 'brightness(0) saturate(100%)';
};

export default function HomePage(): React.JSX.Element {
  const [hoveredMuscle, setHoveredMuscle] = useState<string | null>(null);
  return (
    <div className='min-h-screen relative bg-gray-900'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/ui/backgrounds/background.jpg')",
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
        }}
      />

      {/* Content */}
      <div className='relative z-10'>
        {/* Header */}
        <motion.header
          className='text-center py-12'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-6xl font-roboto-extrabold text-white mb-4 tracking-tight'>
            MUSCLE MEMORY
          </h1>
          <p className='text-lg font-roboto-light text-gray-300 max-w-xl mx-auto leading-relaxed'>
            Get stronger, be better.
          </p>
        </motion.header>

        {/* Main Content */}
        <div className='container mx-auto px-6 pb-16'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto'>
            {/* Muscle Groups Navigation - Left Side */}
            <motion.div
              className='flex-1 max-w-md'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
            >
              <motion.h2
                className='text-3xl font-roboto-bold text-white mb-8 text-center'
                variants={itemVariants}
              >
                List of exercises
              </motion.h2>
              <div className='space-y-4'>
                {muscleGroups.map((group) => (
                  <motion.div
                    key={group.name}
                    variants={itemVariants}
                    whileHover='hover'
                    whileTap='tap'
                    onMouseEnter={() =>
                      setHoveredMuscle(group.name.toLowerCase())
                    }
                  >
                    <Link href={group.href}>
                      <motion.div
                        className={`bg-gradient-to-r ${group.color} rounded-lg py-4 px-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-between`}
                        variants={buttonVariants}
                        style={{
                          pointerEvents: 'auto',
                          zIndex: 10,
                          filter:
                            hoveredMuscle === group.name.toLowerCase()
                              ? `drop-shadow(0 0 10px ${group.svgColor})`
                              : 'none',
                        }}
                      >
                        <span className='text-lg font-roboto-bold text-white'>
                          {group.name}
                        </span>
                        <ArrowRight className='w-5 h-5 text-white' />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Dynamic Body Diagram - Right Side */}
            <motion.div
              className='flex-1 flex justify-center'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='relative w-80 h-96'>
                {/* Default state - no specific muscle highlighted */}
                {!hoveredMuscle && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='absolute inset-0 flex items-center justify-center'
                  >
                    <div className='text-center text-white/70'>
                      <div className='text-6xl mb-4'>👤</div>
                      <p className='text-lg font-roboto-light'>
                        Select a muscle group to see targeted exercises
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* SVG Images for each muscle group */}
                {muscleGroups.map((group) => {
                  if (!group.svgPath) return null;

                  return (
                    <motion.div
                      key={group.name}
                      className='absolute inset-0'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity:
                          hoveredMuscle === group.name.toLowerCase() ? 1 : 0,
                        scale:
                          hoveredMuscle === group.name.toLowerCase() ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <Image
                        src={group.svgPath}
                        alt={`${group.name} muscle diagram`}
                        fill
                        className='object-contain drop-shadow-2xl'
                        style={{
                          filter: `${getColorFilter(
                            group.svgColor
                          )} drop-shadow(0 0 20px ${
                            group.svgColor
                          }) drop-shadow(0 0 40px ${group.svgColor}40)`,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

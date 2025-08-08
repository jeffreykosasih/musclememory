'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import React from 'react';

interface Exercise {
  name: string;
  duration: string;
  instructions: string[];
  color: string;
}

const exercises: Exercise[] = [
  {
    name: 'Bicep Curls',
    duration: '3 sets x 12-15 reps',
    color: 'bg-blue-600',
    instructions: [
      'Stand with dumbbells at your sides, palms facing forward',
      'Curl weights up by flexing your biceps',
      'Squeeze at the top of the movement',
      'Lower slowly to starting position',
    ],
  },
  {
    name: 'Diamond Push-ups',
    duration: '3 sets x 5-10 reps',
    color: 'bg-blue-800',
    instructions: [
      'Start in push-up position with hands forming a diamond shape',
      'Lower your body while keeping the diamond hand position',
      'Push back up to starting position',
      'Focus on tricep engagement',
    ],
  },
  {
    name: 'Hammer Curls',
    duration: '3 sets x 10-12 reps',
    color: 'bg-indigo-600',
    instructions: [
      'Hold dumbbells with neutral grip (palms facing each other)',
      'Curl weights up without rotating your wrists',
      'Squeeze biceps at the top',
      'Lower with control',
    ],
  },
  {
    name: 'Pike Push-ups',
    duration: '3 sets x 6-10 reps',
    color: 'bg-indigo-700',
    instructions: [
      'Start in downward dog position',
      'Lower your head toward the ground',
      'Push back up to starting position',
      'Keep your legs as straight as possible',
    ],
  },
  {
    name: 'Push-ups',
    duration: '3 sets x 10-15 reps',
    color: 'bg-blue-500',
    instructions: [
      'Start in a plank position with hands slightly wider than shoulder-width',
      'Lower your body until chest nearly touches the floor',
      'Push back up to starting position',
      'Keep your core tight throughout the movement',
    ],
  },
  {
    name: 'Tricep Dips',
    duration: '3 sets x 8-12 reps',
    color: 'bg-blue-700',
    instructions: [
      'Sit on edge of a chair or bench, hands beside your hips',
      'Slide off the edge, supporting your weight with your arms',
      'Lower your body by bending your elbows to 90 degrees',
      'Push back up to starting position',
    ],
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

export default function ArmsPage(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-600 via-slate-900 to-blue-700 relative'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 responsive-bg-cover'
        style={{
          backgroundImage: "url('/images/ui/backgrounds/page.jpg')",
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-br from-blue-600/85 via-slate-900/90 to-blue-700/85' />

      <div className='relative z-10 responsive-container landscape-mobile-adjust'>
        {/* Header */}
        <motion.div
          className='text-center mb-8 sm:mb-12 lg:mb-16'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='responsive-heading-xl font-roboto-extrabold text-white mb-2 sm:mb-4 tracking-tight'>
            ARM WORKOUTS
          </h1>
          <p className='text-sm sm:text-lg font-roboto-light text-blue-100 max-w-xl mx-auto leading-relaxed px-4'>
            Biceps, triceps, why not both?
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className='mb-12'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            href='/'
            className='inline-flex items-center text-blue-200 hover:text-white transition-colors duration-200 group'
            style={{ pointerEvents: 'auto', zIndex: 10 }}
          >
            <ArrowLeft className='w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform' />
            <span className='font-roboto-light'>Back to Home</span>
          </Link>
        </motion.div>

        {/* Exercise Cards */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {exercises.map((exercise, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover='hover'
              whileTap='tap'
              className='bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-blue-400/70 transition-all duration-300'
              style={{ pointerEvents: 'auto' }}
            >
              <div className='flex flex-col md:flex-row'>
                {/* Content - Left Side */}
                <div className='flex-1 p-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <h3 className='text-2xl font-roboto-extrabold text-white'>
                      {exercise.name}
                    </h3>
                    <div className='flex items-center text-blue-200'>
                      <Clock className='w-4 h-4 mr-1' />
                      <span className='font-roboto-light text-sm'>
                        {exercise.duration}
                      </span>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className='space-y-2'>
                    <h4 className='text-sm font-roboto-bold text-blue-200 uppercase tracking-wide'>
                      Instructions
                    </h4>
                    <ul className='space-y-1'>
                      {exercise.instructions.map((instruction, idx) => (
                        <li
                          key={idx}
                          className='text-gray-300 text-sm flex items-start'
                        >
                          <span className='text-blue-400 mr-2 mt-1'>•</span>
                          <span className='font-roboto-light leading-relaxed'>
                            {instruction}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element - Right Side */}
                <div className='md:w-32 bg-gradient-to-b from-blue-500/30 to-blue-700/30 flex items-center justify-center p-6'>
                  <div
                    className={`w-16 h-16 rounded-full ${exercise.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className='text-white font-roboto-bold text-lg'>
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tips Section */}
        <motion.div
          className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className='text-3xl font-roboto-bold text-white mb-6 text-center'>
            💪 Arm Training Tips
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-blue-200 mb-2'>
                Mind-Muscle Connection
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Focus on feeling the target muscle working throughout each rep
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚖️</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-blue-200 mb-2'>
                Balance Training
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Train both biceps and triceps equally for balanced arm
                development
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⏰</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-blue-200 mb-2'>
                Rest & Recovery
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Allow 48-72 hours between intense arm sessions for optimal
                recovery
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

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
    name: 'Bent-over Rows',
    duration: '3 sets x 8-12 reps',
    color: 'bg-green-600',
    instructions: [
      'Hinge at hips with dumbbells in hands',
      'Keep back straight and chest up',
      'Pull weights to ribcage',
      'Squeeze shoulder blades together',
    ],
  },
  {
    name: 'Bird Dog',
    duration: '3 sets x 10 each side',
    color: 'bg-emerald-700',
    instructions: [
      'Start on hands and knees',
      'Extend opposite arm and leg',
      'Hold for 2-3 seconds',
      'Return to start and repeat other side',
    ],
  },
  {
    name: 'Dead Hangs',
    duration: '3 sets x 20-30 seconds',
    color: 'bg-emerald-600',
    instructions: [
      'Hang from bar with straight arms',
      'Engage shoulders and core',
      'Hold position as long as possible',
      'Build grip and lat strength',
    ],
  },
  {
    name: 'Pull-ups',
    duration: '3 sets x 5-10 reps',
    color: 'bg-green-500',
    instructions: [
      'Hang from bar with palms facing away',
      'Pull body up until chin clears bar',
      'Lower slowly with control',
      'Focus on engaging back muscles',
    ],
  },
  {
    name: 'Reverse Flyes',
    duration: '3 sets x 12-15 reps',
    color: 'bg-green-800',
    instructions: [
      'Bend forward at hips holding dumbbells',
      'Arms slightly bent at elbows',
      'Lift weights out to sides',
      'Squeeze shoulder blades together',
    ],
  },
  {
    name: 'Superman',
    duration: '3 sets x 12-15 reps',
    color: 'bg-green-700',
    instructions: [
      'Lie face down on ground',
      'Extend arms and legs',
      'Lift chest and legs off ground simultaneously',
      'Hold briefly then lower',
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

export default function BackPage(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-600 via-slate-900 to-green-700 relative'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/ui/backgrounds/page.jpg')",
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-br from-green-600/85 via-slate-900/90 to-green-700/85' />

      <div className='relative z-10 container mx-auto px-4 py-12'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-6xl font-roboto-extrabold text-white mb-4 tracking-tight'>
            BACK WORKOUTS
          </h1>
          <p className='text-lg font-roboto-light text-green-100 max-w-xl mx-auto leading-relaxed'>
            Looking good from behind as well
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
            className='inline-flex items-center text-green-200 hover:text-white transition-colors duration-200 group'
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
              className='bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-green-400/70 transition-all duration-300'
              style={{ pointerEvents: 'auto' }}
            >
              <div className='flex flex-col md:flex-row'>
                {/* Content - Left Side */}
                <div className='flex-1 p-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <h3 className='text-2xl font-roboto-extrabold text-white'>
                      {exercise.name}
                    </h3>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center text-green-200'>
                        <Clock className='w-4 h-4 mr-1' />
                        <span className='font-roboto-light text-sm'>
                          {exercise.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className='space-y-2'>
                    <h4 className='text-sm font-roboto-bold text-green-200 uppercase tracking-wide'>
                      Instructions
                    </h4>
                    <ul className='space-y-1'>
                      {exercise.instructions.map((instruction, idx) => (
                        <li
                          key={idx}
                          className='text-gray-300 text-sm flex items-start'
                        >
                          <span className='text-green-400 mr-2 mt-1'>•</span>
                          <span className='font-roboto-light leading-relaxed'>
                            {instruction}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element - Right Side */}
                <div className='md:w-32 bg-gradient-to-b from-green-500/30 to-green-700/30 flex items-center justify-center p-6'>
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
          className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className='text-3xl font-roboto-bold text-white mb-6 text-center'>
            🌿 Back Training Tips
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='bg-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-green-200 mb-2'>
                Proper Form
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Focus on squeezing shoulder blades together and keeping core
                engaged
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>📐</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-green-200 mb-2'>
                Mind Your Posture
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Maintain neutral spine throughout all movements to prevent
                injury
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>💪</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-green-200 mb-2'>
                Progressive Loading
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Gradually increase resistance to continue building back strength
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

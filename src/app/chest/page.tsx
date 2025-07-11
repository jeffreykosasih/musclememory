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
    name: 'Chest Dips',
    duration: '3 sets x 8-12 reps',
    color: 'bg-red-600',
    instructions: [
      'Use parallel bars or the edge of two chairs',
      'Lower your body by bending your elbows',
      'Lean slightly forward to target chest',
      'Push back up to starting position',
    ],
  },
  {
    name: 'Chest Squeeze',
    duration: '3 sets x 15-20 reps',
    color: 'bg-rose-700',
    instructions: [
      'Press palms together in front of your chest',
      'Apply pressure and hold for 2 seconds',
      'Release pressure slightly',
      'Repeat the squeezing motion',
    ],
  },
  {
    name: 'Decline Push-ups',
    duration: '3 sets x 6-10 reps',
    color: 'bg-rose-600',
    instructions: [
      'Place feet on an elevated surface',
      'Hands on ground in push-up position',
      'Lower chest toward the ground',
      'Push back up with control',
    ],
  },
  {
    name: 'Incline Push-ups',
    duration: '3 sets x 12-15 reps',
    color: 'bg-red-700',
    instructions: [
      'Place hands on an elevated surface (bench, step, etc.)',
      'Keep body in straight line from head to feet',
      'Lower chest toward the elevated surface',
      'Push back up with control',
    ],
  },
  {
    name: 'Push-ups',
    duration: '3 sets x 10-15 reps',
    color: 'bg-red-500',
    instructions: [
      'Start in a plank position with hands slightly wider than shoulder-width',
      'Lower your body until chest nearly touches the floor',
      'Push back up to starting position',
      'Keep your core tight throughout the movement',
    ],
  },
  {
    name: 'Wide-Grip Push-ups',
    duration: '3 sets x 8-12 reps',
    color: 'bg-red-800',
    instructions: [
      'Place hands wider than shoulder-width apart',
      'Lower body until chest nearly touches floor',
      'Focus on squeezing chest muscles',
      'Push back up explosively',
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

export default function ChestPage(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-600 via-slate-900 to-red-700 relative'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/ui/backgrounds/page.jpg')",
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-br from-red-600/85 via-slate-900/90 to-red-700/85' />

      <div className='relative z-10 container mx-auto px-4 py-12'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-6xl font-roboto-extrabold text-white mb-4 tracking-tight'>
            CHEST WORKOUTS
          </h1>
          <p className='text-lg font-roboto-light text-red-100 max-w-xl mx-auto leading-relaxed'>
            Something to get better on your chest
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
            className='inline-flex items-center text-red-200 hover:text-white transition-colors duration-200 group'
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
              className='bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-red-400/70 transition-all duration-300'
              style={{ pointerEvents: 'auto' }}
            >
              <div className='flex flex-col md:flex-row'>
                {/* Content - Left Side */}
                <div className='flex-1 p-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <h3 className='text-2xl font-roboto-extrabold text-white'>
                      {exercise.name}
                    </h3>
                    <div className='flex items-center text-red-200'>
                      <Clock className='w-4 h-4 mr-1' />
                      <span className='font-roboto-light text-sm'>
                        {exercise.duration}
                      </span>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className='space-y-2'>
                    <h4 className='text-sm font-roboto-bold text-red-200 uppercase tracking-wide'>
                      Instructions
                    </h4>
                    <ul className='space-y-1'>
                      {exercise.instructions.map((instruction, idx) => (
                        <li
                          key={idx}
                          className='text-gray-300 text-sm flex items-start'
                        >
                          <span className='text-red-400 mr-2 mt-1'>•</span>
                          <span className='font-roboto-light leading-relaxed'>
                            {instruction}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element - Right Side */}
                <div className='md:w-32 bg-gradient-to-b from-red-500/30 to-red-700/30 flex items-center justify-center p-6'>
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
          className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className='text-3xl font-roboto-bold text-white mb-6 text-center'>
            🔥 Chest Training Tips
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='bg-red-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>📐</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-red-200 mb-2'>
                Proper Form
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Keep shoulders back and chest up for maximum muscle activation
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-red-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-red-200 mb-2'>
                Full Range Motion
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Lower weights completely and squeeze at the top for best results
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-red-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🔁</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-red-200 mb-2'>
                Progressive Overload
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Gradually increase weight or reps to continue building strength
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

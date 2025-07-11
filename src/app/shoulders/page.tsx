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
    name: 'Arm Circles',
    duration: '2 sets x 15 each direction',
    color: 'bg-amber-700',
    instructions: [
      'Extend arms out to sides',
      'Make small circles forward',
      'Reverse direction for backward circles',
      'Great for warming up shoulders',
    ],
  },
  {
    name: 'Front Raises',
    duration: '3 sets x 10-12 reps',
    color: 'bg-orange-700',
    instructions: [
      'Hold dumbbells in front of thighs',
      'Raise one arm forward to shoulder height',
      'Lower slowly and repeat with other arm',
      'Keep core stable throughout',
    ],
  },
  {
    name: 'Lateral Raises',
    duration: '3 sets x 12-15 reps',
    color: 'bg-orange-600',
    instructions: [
      'Hold dumbbells at sides with arms straight',
      'Raise arms out to sides until parallel to ground',
      'Lower slowly with control',
      'Keep slight bend in elbows',
    ],
  },
  {
    name: 'Pike Push-ups',
    duration: '3 sets x 8-12 reps',
    color: 'bg-amber-600',
    instructions: [
      'Start in downward dog position',
      'Lower head toward ground between hands',
      'Push back up to starting position',
      'Keep legs as straight as possible',
    ],
  },
  {
    name: 'Rear Delt Flyes',
    duration: '3 sets x 12-15 reps',
    color: 'bg-orange-800',
    instructions: [
      'Bend forward at hips holding dumbbells',
      'Arms hanging down with slight bend',
      'Raise weights out to sides',
      'Focus on squeezing rear delts',
    ],
  },
  {
    name: 'Shoulder Press',
    duration: '3 sets x 8-12 reps',
    color: 'bg-orange-500',
    instructions: [
      'Hold dumbbells at shoulder height',
      'Press weights straight up overhead',
      'Lower slowly back to shoulder level',
      'Keep core engaged throughout',
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

export default function ShouldersPage(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-600 via-slate-900 to-orange-700 relative'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/ui/backgrounds/page.jpg')",
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-br from-orange-600/85 via-slate-900/90 to-orange-700/85' />

      <div className='relative z-10 container mx-auto px-4 py-12'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-6xl font-roboto-extrabold text-white mb-4 tracking-tight'>
            SHOULDER WORKOUTS
          </h1>
          <p className='text-lg font-roboto-light text-orange-100 max-w-xl mx-auto leading-relaxed'>
            Instead of chip on your shoulder, it should be muscles
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
            className='inline-flex items-center text-orange-200 hover:text-white transition-colors duration-200 group'
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
              className='bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-orange-400/70 transition-all duration-300'
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
                      <div className='flex items-center text-orange-200'>
                        <Clock className='w-4 h-4 mr-1' />
                        <span className='font-roboto-light text-sm'>
                          {exercise.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className='space-y-2'>
                    <h4 className='text-sm font-roboto-bold text-orange-200 uppercase tracking-wide'>
                      Instructions
                    </h4>
                    <ul className='space-y-1'>
                      {exercise.instructions.map((instruction, idx) => (
                        <li
                          key={idx}
                          className='text-gray-300 text-sm flex items-start'
                        >
                          <span className='text-orange-400 mr-2 mt-1'>•</span>
                          <span className='font-roboto-light leading-relaxed'>
                            {instruction}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element - Right Side */}
                <div className='md:w-32 bg-gradient-to-b from-orange-500/30 to-orange-700/30 flex items-center justify-center p-6'>
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
          className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className='text-3xl font-roboto-bold text-white mb-6 text-center'>
            🔥 Shoulder Training Tips
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='bg-orange-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-orange-200 mb-2'>
                Control Movement
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Use controlled movements to avoid injury in this delicate joint
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-orange-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🔄</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-orange-200 mb-2'>
                Train All Angles
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Target front, side, and rear delts for complete development
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-orange-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🔥</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-orange-200 mb-2'>
                Warm Up First
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Always warm up shoulders thoroughly before heavy training
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

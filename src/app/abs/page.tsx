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
    name: 'Ab Wheel Rollouts',
    duration: '3 sets x 8-12 reps',
    color: 'bg-amber-700',
    instructions: [
      'Kneel on floor holding ab wheel with both hands',
      'Roll forward slowly, extending arms and body',
      'Go as far as you can while maintaining form',
      'Use abs to pull yourself back to starting position',
    ],
  },
  {
    name: 'Bicycle Crunches',
    duration: '3 sets x 20 reps each side',
    color: 'bg-yellow-600',
    instructions: [
      'Lie on back with hands behind head',
      'Bring right elbow to left knee while extending right leg',
      'Switch to left elbow to right knee',
      'Continue alternating in smooth cycling motion',
    ],
  },
  {
    name: 'Crunches',
    duration: '3 sets x 15-20 reps',
    color: 'bg-yellow-500',
    instructions: [
      'Lie on back with knees bent, feet flat on floor',
      "Place hands behind head lightly, don't pull neck",
      'Lift shoulders off ground using abs, exhale on the way up',
      'Lower slowly back down without touching shoulders to ground',
    ],
  },
  {
    name: 'Leg Raises',
    duration: '3 sets x 12-15 reps',
    color: 'bg-amber-600',
    instructions: [
      'Lie flat on back with legs straight',
      'Place hands under lower back for support',
      'Raise legs to 90 degrees keeping them straight',
      'Lower slowly without touching floor, repeat',
    ],
  },
  {
    name: 'Plank',
    duration: '3 sets x 30-60 seconds',
    color: 'bg-yellow-600',
    instructions: [
      'Start in push-up position on forearms',
      'Hold body straight from head to heels',
      'Engage abs and breathe normally',
      "Keep hips level, don't let them sag or pike up",
    ],
  },
  {
    name: 'Russian Twists',
    duration: '3 sets x 20 twists each side',
    color: 'bg-yellow-500',
    instructions: [
      'Sit with knees bent, lean back to 45 degrees',
      'Lift feet off ground for advanced version',
      'Twist torso side to side, engaging obliques',
      'Touch ground beside hips with hands or weight',
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

export default function AbsPage(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-yellow-500 via-slate-900 to-yellow-600 relative'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 responsive-bg-cover'
        style={{
          backgroundImage: "url('/images/ui/backgrounds/page.jpg')",
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-br from-yellow-500/85 via-slate-900/90 to-yellow-600/85' />

      <div className='relative z-10 responsive-container landscape-mobile-adjust'>
        {/* Header */}
        <motion.div
          className='text-center mb-8 sm:mb-12 lg:mb-16'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='responsive-heading-xl font-roboto-extrabold text-white mb-2 sm:mb-4 tracking-tight'>
            ABS WORKOUTS
          </h1>
          <p className='text-sm sm:text-lg font-roboto-light text-yellow-100 max-w-xl mx-auto leading-relaxed px-4'>
            Six pack is possible
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className='mb-8 sm:mb-12 landscape-mobile-compact'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            href='/'
            className='inline-flex items-center text-yellow-200 hover:text-white transition-colors duration-200 group touch-manipulation'
            style={{ pointerEvents: 'auto', zIndex: 10 }}
          >
            <ArrowLeft className='w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-x-1 transition-transform flex-shrink-0' />
            <span className='font-roboto-light text-sm sm:text-base'>
              Back to Home
            </span>
          </Link>
        </motion.div>

        {/* Exercise Cards */}
        <motion.div
          className='responsive-grid-auto mb-8 sm:mb-12 lg:mb-16 landscape-mobile-compact'
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
              className='bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-yellow-400/70 transition-all duration-300 touch-manipulation'
              style={{ pointerEvents: 'auto' }}
            >
              <div className='flex flex-col sm:flex-row'>
                {/* Content - Left Side */}
                <div className='flex-1 p-4 sm:p-6'>
                  <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4'>
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-roboto-extrabold text-white'>
                      {exercise.name}
                    </h3>
                    <div className='flex items-center text-yellow-200 flex-shrink-0'>
                      <Clock className='w-3 h-3 sm:w-4 sm:h-4 mr-1' />
                      <span className='font-roboto-light text-xs sm:text-sm'>
                        {exercise.duration}
                      </span>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className='space-y-2'>
                    <h4 className='text-xs sm:text-sm font-roboto-bold text-yellow-200 uppercase tracking-wide'>
                      Instructions
                    </h4>
                    <ul className='space-y-1'>
                      {exercise.instructions.map((instruction, idx) => (
                        <li
                          key={idx}
                          className='text-gray-300 text-xs sm:text-sm flex items-start'
                        >
                          <span className='text-yellow-400 mr-2 mt-1 flex-shrink-0'>
                            •
                          </span>
                          <span className='font-roboto-light leading-relaxed'>
                            {instruction}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element - Right Side */}
                <div className='sm:w-24 lg:w-32 bg-gradient-to-b from-yellow-500/30 to-yellow-700/30 flex items-center justify-center p-4 sm:p-6'>
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full ${exercise.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className='text-white font-roboto-bold text-sm sm:text-base lg:text-lg'>
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
          className='bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-yellow-400/30'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className='responsive-heading-lg font-roboto-bold text-white mb-4 sm:mb-6 text-center'>
            🔥 Core Training Tips
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 tablet-grid-2 desktop-grid-3'>
            <div className='text-center'>
              <div className='bg-yellow-500/30 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-lg sm:text-xl lg:text-2xl'>🔥</span>
              </div>
              <h3 className='text-base sm:text-lg font-roboto-bold text-yellow-200 mb-2'>
                Quality over Quantity
              </h3>
              <p className='text-gray-300 font-roboto-light text-sm sm:text-base leading-relaxed'>
                Focus on proper form and controlled movements rather than speed
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-yellow-500/30 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-lg sm:text-xl lg:text-2xl'>🫁</span>
              </div>
              <h3 className='text-base sm:text-lg font-roboto-bold text-yellow-200 mb-2'>
                Breathe Properly
              </h3>
              <p className='text-gray-300 font-roboto-light text-sm sm:text-base leading-relaxed'>
                Exhale during the exertion phase and inhale during the release
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-yellow-500/30 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-lg sm:text-xl lg:text-2xl'>⚡</span>
              </div>
              <h3 className='text-base sm:text-lg font-roboto-bold text-yellow-200 mb-2'>
                Progressive Overload
              </h3>
              <p className='text-gray-300 font-roboto-light text-sm sm:text-base leading-relaxed'>
                Gradually increase reps, sets, or add resistance to continue
                building strength
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

interface Exercise {
  name: string;
  duration: string;
  instructions: string[];
  color: string;
}

const exercises: Exercise[] = [
  {
    name: 'Burpees',
    duration: '3 sets x 8-12 reps',
    color: 'bg-pink-700',
    instructions: [
      'Start in standing position, squat down and place hands on floor',
      'Jump feet back into plank position',
      'Do a push-up (optional for beginners)',
      'Jump feet forward and explosively jump up with arms overhead',
    ],
  },
  {
    name: 'High Knees',
    duration: '3 sets x 30 seconds',
    color: 'bg-pink-600',
    instructions: [
      'Stand tall with feet hip-width apart',
      'Run in place bringing knees toward chest',
      'Pump arms naturally as you would when running',
      'Maintain quick, light steps on the balls of feet',
    ],
  },
  {
    name: 'Jumping Jacks',
    duration: '3 sets x 30 seconds',
    color: 'bg-pink-500',
    instructions: [
      'Stand upright with feet together and arms at sides',
      'Jump up spreading legs shoulder-width apart',
      'Simultaneously raise arms overhead',
      'Jump back to starting position and repeat quickly',
    ],
  },
  {
    name: 'Jump Rope',
    duration: '3 sets x 60 seconds',
    color: 'bg-rose-600',
    instructions: [
      'Hold rope handles at hip level with elbows close to body',
      'Jump lightly on the balls of feet',
      'Turn rope with wrists, not whole arms',
      'Land softly and maintain steady rhythm',
    ],
  },
  {
    name: 'Mountain Climbers',
    duration: '3 sets x 30 seconds',
    color: 'bg-pink-800',
    instructions: [
      'Start in plank position with arms straight',
      'Bring one knee toward chest quickly',
      'Quickly switch legs in running motion',
      'Keep core engaged and body straight throughout',
    ],
  },
  {
    name: 'Stair Climbing',
    duration: '3 sets x 2-3 minutes',
    color: 'bg-pink-900',
    instructions: [
      'Find a staircase or use step platform',
      'Climb up at steady, brisk pace',
      'Use handrail for balance if needed',
      'Walk down slowly for recovery between sets',
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

export default function CardioPage(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-600 via-slate-900 to-pink-700 relative'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/ui/backgrounds/page.jpg')",
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-br from-pink-600/85 via-slate-900/90 to-pink-700/85' />

      <div className='relative z-10 container mx-auto px-4 py-12'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-6xl font-roboto-extrabold text-white mb-4 tracking-tight'>
            CARDIO WORKOUTS
          </h1>
          <p className='text-lg font-roboto-light text-pink-100 max-w-xl mx-auto leading-relaxed'>
            Your heart will beating longer
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
            className='inline-flex items-center text-pink-200 hover:text-white transition-colors duration-200 group'
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
              className='bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-pink-400/70 transition-all duration-300'
              style={{ pointerEvents: 'auto' }}
            >
              <div className='flex flex-col md:flex-row'>
                {/* Content - Left Side */}
                <div className='flex-1 p-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <h3 className='text-2xl font-roboto-extrabold text-white'>
                      {exercise.name}
                    </h3>
                    <div className='flex items-center text-pink-200'>
                      <Clock className='w-4 h-4 mr-1' />
                      <span className='font-roboto-light text-sm'>
                        {exercise.duration}
                      </span>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className='space-y-2'>
                    <h4 className='text-sm font-roboto-bold text-pink-200 uppercase tracking-wide'>
                      Instructions
                    </h4>
                    <ul className='space-y-1'>
                      {exercise.instructions.map((instruction, idx) => (
                        <li
                          key={idx}
                          className='text-gray-300 text-sm flex items-start'
                        >
                          <span className='text-pink-400 mr-2 mt-1'>•</span>
                          <span className='font-roboto-light leading-relaxed'>
                            {instruction}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element - Right Side */}
                <div className='md:w-32 bg-gradient-to-b from-pink-500/30 to-pink-700/30 flex items-center justify-center p-6'>
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
          className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className='text-3xl font-roboto-bold text-white mb-6 text-center'>
            ❤️ Cardio Training Tips
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='bg-pink-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>💓</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-pink-200 mb-2'>
                Monitor Heart Rate
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Stay within 65-85% of your maximum heart rate for optimal
                results
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-pink-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>💧</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-pink-200 mb-2'>
                Stay Hydrated
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Drink water before, during, and after your cardio sessions
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-pink-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h3 className='text-lg font-roboto-bold text-pink-200 mb-2'>
                Interval Training
              </h3>
              <p className='text-gray-300 font-roboto-light'>
                Mix high-intensity bursts with recovery periods for maximum burn
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

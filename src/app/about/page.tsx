'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Code, GitBranch, MapPin, Target } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl font-heading">
            About Me
          </h1>
          <p className="mt-3 text-lg text-emerald-500">Behind the Code</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/developer-placeholder.jpg"
                alt="Yash - Computer Engineering Student"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Intro Paragraph */}
            <motion.div variants={fadeInUp}>
              <p className="text-slate-700 text-lg leading-relaxed">
                I&apos;m Yash, a Computer Engineering diploma student with a love for turning ideas into working code.
                Over the past year, I&apos;ve worked on everything from linked list algorithms to drawing circles with pixels — and this website is my open notebook.
                It&apos;s a place where I track my progress, share my mistakes and fixes, and hopefully make life a little easier for juniors trying to figure things out.
              </p>
            </motion.div>

            {/* Quick Facts */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Based in Latur, Maharashtra</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Currently studying at Government Polytechnic</span>
                </li>
                <li className="flex items-start">
                  <Code className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Comfortable with C, C++, SQL, HTML, CSS, JavaScript</span>
                </li>
                <li className="flex items-start">
                  <GitBranch className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Skilled in Git & GitHub</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Focused on building practical, real-world solutions</span>
                </li>
              </ul>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeInUp} className="pt-4">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">My Learning Journey</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-100"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8 relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm mr-4">
                      2023
                    </div>
                    <div className="pt-1">
                      <p className="text-slate-700">Started diploma in Computer Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm mr-4">
                      2024
                    </div>
                    <div className="pt-1">
                      <p className="text-slate-700">Built multiple lab projects in DSU-C, OOP-C, DBMS, CG</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm mr-4">
                      2025
                    </div>
                    <div className="pt-1">
                      <p className="text-slate-700">Launched this site to document and share my work</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Note */}
            <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 italic">
                &quot;When I&apos;m not coding, you&apos;ll probably find me watching Marvel movies, jotting down weird project ideas, or figuring out new ways to explain a concept so that even my non-tech friends can get it.&quot;
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <Link 
                href="#subjects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                View My Work
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { 
  Code, 
  Database, 
  GitBranch, 
  Monitor, 
  User, 
  Code2, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

const subjects = [
  {
    title: 'Data Structure using C',
    icon: <GitBranch className="w-8 h-8 text-indigo-600" />,
    description: 'Implementation of algorithms, linked lists, stacks, queues, and more in C.'
  },
  {
    title: 'Object Oriented Programming in C++',
    icon: <Code2 className="w-8 h-8 text-indigo-600" />,
    description: 'Exploring OOP concepts like encapsulation, inheritance, and polymorphism using C.'
  },
  {
    title: 'Database Management System',
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    description: 'SQL queries, relational models, and CRUD operations for efficient data handling.'
  },
  {
    title: 'Computer Graphics',
    icon: <Monitor className="w-8 h-8 text-indigo-600" />,
    description: 'Drawing algorithms, 2D transformations, and basic graphics projects in C.'
  }
];

const skills = [
  'C & C++',
  'Data Structures',
  'SQL',
  'HTML, CSS, JS',
  'Git & GitHub'
];

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-['Inter'] bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-emerald-500 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                My Diploma Coding Journey
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-indigo-100 mb-8"
              >
                A complete showcase of my practicals,I&apos;m committed to continuous learning in Computer Engineering.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={() => scrollToSection('subjects')}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Explore My Work
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  About Me
                  <User className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <Code className="w-48 h-48 text-white/20" />
                <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Cards */}
      <section id="subjects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Subjects I&apos;ve Worked On</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{subject.title}</h3>
                <p className="text-slate-600 text-sm">{subject.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                  <User className="w-32 h-32 text-slate-400" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-700 leading-relaxed mb-6">
                  I&apos;m a passionate Computer Engineering diploma student passionate about coding, problem-solving, and building practical solutions. This website is my living archive of code, projects, and experiments from my diploma journey.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors inline-flex"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Mission & Motive</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
            </motion.div>
            <p className="text-center text-slate-700 text-lg leading-relaxed">
              I believe learning should be practical, transparent, and shared. This project is my attempt to document every lab practical, self-study experiment, and side project so juniors and peers can learn from real examples.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

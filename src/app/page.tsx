'use client';

import { FaCode, FaDatabase, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';

const subjects = [
  {
    title: 'Data Structure using C',
    icon: <FaProjectDiagram className="w-12 h-12 text-blue-500 mb-4" />,
    description: 'Master fundamental data structures and algorithms implemented in C language.'
  },
  {
    title: 'OOP in C++',
    icon: <FaLaptopCode className="w-12 h-12 text-green-500 mb-4" />,
    description: 'Learn Object-Oriented Programming concepts and design patterns using C++.'
  },
  {
    title: 'DBMS',
    icon: <FaDatabase className="w-12 h-12 text-purple-500 mb-4" />,
    description: 'Explore database design, SQL, and data management principles.'
  },
  {
    title: 'Computer Graphics',
    icon: <FaCode className="w-12 h-12 text-yellow-500 mb-4" />,
    description: 'Dive into 2D/3D graphics programming and visualization techniques.'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Diploma Coding Journey</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Showcasing practicals and learning in Data Structures, OOP, DBMS, and CG
          </p>
        </div>
      </section>

      {/* Subject Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore My Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  {subject.icon}
                  <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
                  <p className="text-gray-600">{subject.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Hello! I&apos;m a passionate computer science student currently pursuing my diploma. 
                I have a strong interest in software development, algorithms, and problem-solving. 
                This portfolio showcases my journey through various computer science subjects and 
                the projects I&apos;ve worked on during my academic career.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with fellow students. I believe in 
                continuous learning and applying theoretical knowledge to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">My Mission</h2>
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed mb-6">
                My mission is to master the fundamentals of computer science and apply them to 
                create meaningful solutions. I aim to develop a strong foundation in data structures, 
                algorithms, and software engineering principles that will enable me to tackle complex 
                challenges in the tech industry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through this portfolio, I want to document my learning journey, showcase my projects, 
                and demonstrate my growth as a developer. I believe in the power of sharing knowledge 
                and hope that my work can inspire and help others in their learning journey as well.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Learn more about our company and what we do.
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Our Story</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                How we got started and where we're going.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <p className="text-sm text-gray-900">
                  Founded in 2023, PoShow is dedicated to creating amazing web experiences using modern technologies. 
                  Our team of passionate developers and designers work together to build applications that make a difference.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                What drives us every day.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <p className="text-sm text-gray-900">
                  To empower businesses and individuals by creating beautiful, functional, and accessible web applications 
                  that solve real-world problems and deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Our Team</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Meet the people behind PoShow
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <p className="text-sm text-gray-900">
                  We&apos;re a diverse team of developers, designers, and problem-solvers who are passionate about 
                  creating high-quality software that makes a difference in people&apos;s lives.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
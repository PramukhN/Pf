import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Software Engineer',
      company: 'StorrSec LLC',
      location: 'Washington, DC',
      period: 'May 2025 – Present',
      type: 'Full-time',
      description: [
        'Spearheaded the development and deployment of a microservice-based application hosted on Microsoft Azure using Docker and Kubernetes, which improved the system’s fault tolerance and reduced service downtime by 30%',
        'Led the implementation of a CI/CD pipeline using GitHub Actions, integrated with automated testing and rollback logic, which accelerated production releases by 25% without compromising code quality',
        'Developed and maintained robust REST APIs in Node.js and Express, with optimised database queries and middleware logic, leading to a 40% improvement in overall backend response performance',
        'Designed and built reusable UI components in React that adhered to accessibility standards and performance optimisation techniques, enhancing the frontend responsiveness for over 10,000 monthly active users',
        'Conducted rigorous code reviews, automated test coverage enhancements, and bug triaging processes, reducing production-level errors by more than 35% within two quarters',
        'Strengthened access control by architecting and deploying role-based access mechanisms across the platform, securing sensitive administrative operations and maintaining compliance with internal security policies'
      ],
      technologies: ['Microsoft Azure', 'Docker', 'Kubernetes', 'Node.js', 'Express', 'React', 'GitHub Actions']
    },
    {
      title: 'Software Development Intern',
      company: 'SWAPS Tech Pvt Ltd',
      location: 'Bengaluru, India',
      period: 'Jul 2020 – Jul 2021',
      type: 'Internship',
      description: [
        'Collaborated with senior developers to refactor and modularise core backend services in Python and MySQL, which resulted in a 25% decrease in API latency across core transaction endpoints',
        'Automated backend admin tasks by scripting token-based workflows and building web interfaces, which collectively saved more than 10 hours of manual labour per week',
        'Designed and implemented a secure authentication module with encrypted token-based session handling and password hashing, significantly reducing login vulnerabilities in internal systems',
        'Took ownership of writing and maintaining detailed API documentation and developer handoff guides, improving onboarding time for new engineers and increasing codebase transparency',
        'Resolved over 40 critical bugs and integration issues across multiple sprints by conducting structured debugging and regression testing sessions, improving the overall platform stability',
        'Participated in sprint reviews and daily standups, presenting deliverables and blockers clearly while contributing to agile team velocity improvements throughout the internship'
      ],
      technologies: ['Python', 'MySQL', 'Web Development', 'API Documentation', 'Token Authentication']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My professional journey and the impactful projects I've contributed to
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold text-white mb-1">{experience.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-blue-400 font-semibold">{experience.company}</span>
                      <span className="text-slate-400">|</span>
                      <span className="text-slate-300">{experience.location}</span>
                      <span className="text-slate-400">|</span>
                      <span className="text-slate-300">{experience.period}</span>
                    </div>
                    <div className="space-y-2 text-slate-300 mb-4">
                      {experience.description.map((item, i) => (
                        <p key={i}>{item}</p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-700 text-xs text-slate-200 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code, Zap, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud-Based Airline Seat Reservation System',
      description:
        'Enhanced customer boarding efficiency by developing a dynamic QR-code-based boarding pass system that seamlessly integrated with the booking engine and displayed live updates. Delivered a complete system deployment on GCP with real-time monitoring and logging tools, improving the visibility of system health and reducing troubleshooting time by 50%.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Google Cloud Platform', 'PHP', 'JavaScript', 'MySQL'],
      github: '', // Add your GitHub link if available
      live: '',   // Add your live demo link if available
      featured: true
    },
    {
      title: 'Smart Invoice Generator',
      description:
        'Designed and developed a full-stack invoice management system with a real-time invoice generation engine supporting tax, currency, and discount logic, streamlining accounting workflows by over 30%. Developed detailed audit logging and analytics capabilities for all invoice activities, aiding in compliance reporting and financial analysis workflows.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Firebase'],
      github: '', // Add your GitHub link if available
      live: '',   // Add your live demo link if available
      featured: true
    },
    {
      title: 'Credit Card Fraud Detection',
      description:
        'Developed a machine learning pipeline for fraud detection using PCA for dimensionality reduction, which increased fraud classification. Presented results to academic peers and instructors, demonstrating how intelligent thresholds can dynamically adapt fraud detection strategies.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
      github: '', // Add your GitHub link if available
      live: '',   // Add your live demo link if available
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
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
              Technical Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of selected projects demonstrating my technical skillset and problem-solving approach.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 rounded-2xl shadow-lg overflow-hidden border border-slate-700 flex flex-col"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-xs font-semibold rounded-full px-3 py-1 shadow-md flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                  <Code className="text-blue-400" size={20} />
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-xs text-slate-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:underline"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

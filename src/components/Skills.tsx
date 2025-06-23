import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Wrench, Zap, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Programming',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript (Node.js, React.js)', level: 95, icon: '⚡' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'C++', level: 80, icon: '💻' },
        { name: 'SQL', level: 88, icon: '🗄️' },
        { name: 'Shell Scripting', level: 80, icon: '🐚' }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Palette,
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'HTML5', level: 95, icon: '📝' },
        { name: 'CSS3', level: 92, icon: '🎨' },
        { name: 'React.js', level: 95, icon: '⚛️' },
        { name: 'Bootstrap', level: 87, icon: '🎀' },
        { name: 'Tailwind CSS', level: 92, icon: '🌈' },
        { name: 'Responsive Design', level: 90, icon: '📱' },
        { name: 'RESTful Integration', level: 88, icon: '🔗' }
      ]
    },
    {
      title: 'Backend & API Development',
      icon: Server,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚀' },
        { name: 'Python (Flask/Django)', level: 85, icon: '🐍' },
        { name: 'REST APIs', level: 92, icon: '🌐' },
        { name: 'Microservices Architecture', level: 80, icon: '🧩' },
        { name: 'GraphQL (basic)', level: 60, icon: '🔗' }
      ]
    },
    {
      title: 'Databases',
      icon: Cpu,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'PostgreSQL', level: 87, icon: '🐘' },
        { name: 'MongoDB', level: 83, icon: '🍃' },
        { name: 'Firebase', level: 80, icon: '🔥' },
        { name: 'Redis', level: 75, icon: '🟥' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Wrench,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Microsoft Azure', level: 80, icon: '☁️' },
        { name: 'Google Cloud Platform (GCP)', level: 80, icon: '☁️' },
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'Kubernetes', level: 75, icon: '⚙️' },
        { name: 'GitHub Actions', level: 80, icon: '💡' },
        { name: 'CI/CD Pipelines', level: 80, icon: '🔄' },
        { name: 'Heroku', level: 70, icon: '🚀' }
      ]
    },
    {
      title: 'Version Control & Collaboration',
      icon: Zap,
      color: 'from-green-400 to-blue-400',
      skills: [
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'GitHub', level: 90, icon: '🐙' },
        { name: 'GitLab', level: 80, icon: '🦊' },
        { name: 'Bitbucket', level: 70, icon: '🧺' },
        { name: 'Agile (Scrum/Kanban)', level: 80, icon: '🏃' },
        { name: 'Jira', level: 75, icon: '📋' },
        { name: 'Confluence', level: 70, icon: '📖' }
      ]
    },
    {
      title: 'Testing & Debugging',
      icon: Wrench,
      color: 'from-red-500 to-yellow-500',
      skills: [
        { name: 'Jest', level: 75, icon: '🧪' },
        { name: 'Mocha', level: 70, icon: '☕' },
        { name: 'Postman', level: 85, icon: '📬' },
        { name: 'Selenium (basic)', level: 60, icon: '🕷️' },
        { name: 'Unit Testing', level: 80, icon: '🧩' },
        { name: 'API Testing', level: 80, icon: '🔗' },
        { name: 'Debugging Tools (Chrome DevTools, VSCode)', level: 85, icon: '🛠️' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Cpu,
      color: 'from-blue-700 to-cyan-700',
      skills: [
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Postman', level: 85, icon: '📬' },
        { name: 'Firebase', level: 80, icon: '🔥' },
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'NGINX', level: 70, icon: '🌀' },
        { name: 'Linux/Unix', level: 85, icon: '🐧' },
        { name: 'Visual Studio', level: 75, icon: '🖥️' }
      ]
    },
    {
      title: 'Software Engineering Principles',
      icon: Code,
      color: 'from-emerald-400 to-lime-400',
      skills: [
        { name: 'Object-Oriented Programming (OOP)', level: 88, icon: '🏗️' },
        { name: 'Data Structures & Algorithms', level: 85, icon: '🧮' },
        { name: 'System Design', level: 80, icon: '🗂️' },
        { name: 'SDLC', level: 80, icon: '🔄' },
        { name: 'API Design Patterns', level: 75, icon: '📐' },
        { name: 'MVC', level: 80, icon: '🏛️' },
        { name: 'TDD', level: 70, icon: '🧪' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Cpu className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
          </motion.div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.07 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <div className="flex-1">
                        <div className="text-white font-medium">{skill.name}</div>
                        <div className="w-full bg-slate-600 rounded-full h-2 mt-1">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                      <span className="text-xs text-slate-300 w-10">{skill.level}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

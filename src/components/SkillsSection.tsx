import React from 'react';

const SkillsSection = ({skills}) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center p-4 bg-white rounded-lg shadow-md">
              <div className="mr-4">
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


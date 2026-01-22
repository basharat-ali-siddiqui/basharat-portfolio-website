'use client';

interface Skill {
  name: string;
  percentage: number;
}

export function Skills() {
  const skills: Skill[] = [
    { name: 'HTML/CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'Node.js', percentage: 75 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'PostgreSQL', percentage: 70 },
    { name: 'Python', percentage: 60 },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                <span className="text-primary font-bold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-card rounded-full h-3 overflow-hidden border border-primary/20">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

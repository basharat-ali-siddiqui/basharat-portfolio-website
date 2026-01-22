'use client';

export function About() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">About</span> Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        <div className="space-y-6 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I'm a passionate full-stack developer with a keen interest in building scalable web applications and digital solutions. With expertise spanning frontend, backend, and database technologies, I bridge the gap between design and functionality.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I have hands-on experience with modern JavaScript frameworks, Node.js backend development, and working with both NoSQL and relational databases. My work focuses on creating intuitive user experiences while maintaining robust, efficient server-side logic.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and learning about emerging trends in web development. I believe in continuous learning and staying updated with industry best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

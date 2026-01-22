'use client';

import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <a
            href="mailto:basiddiqui27@gmail.com"
            className="group bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary mb-4 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground hover:text-primary transition-colors">basiddiqui27@gmail.com</p>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+923312958112"
            className="group bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary mb-4 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground hover:text-primary transition-colors">+92 331 295 8112</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/basharatalee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/siddiqui-b-548606317/?originalSubdomain=pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Basharat Ali Siddiqui. All rights reserved. | Built with React & Next.js
          </p>
        </div>
      </div>
    </section>
  );
}

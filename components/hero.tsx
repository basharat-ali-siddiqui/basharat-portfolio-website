'use client';

import React from "react"

import { Mail, Phone, ArrowDown } from 'lucide-react';

export function Hero() {
  const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = document.getElementById('profile-image') as HTMLImageElement;
        if (img) {
          img.src = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center gap-8 text-center">
        {/* Profile Image */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
          
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
            Hi, I'm <span className="text-primary">Basharat</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance">
            Full Stack Developer crafting digital experiences with modern technologies
          </p>
          <p className="text-base text-muted-foreground mb-8 text-pretty">
            Specializing in web development, APIs, and database design. I build elegant solutions for complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:basiddiqui27@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="tel:+923312958112"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              <Phone size={20} />
              +92 331 295 8112
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center animate-bounce">
            <ArrowDown className="text-primary" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

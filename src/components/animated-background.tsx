'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { createNoise2D } from 'simplex-noise';
import { useTheme } from 'next-themes';

interface ParticleConfig {
  count: number;
  maxDistance: number;
  speed: number;
  size: { min: number; max: number };
  opacity: { min: number; max: number };
}

class Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  opacity: number;
  baseOpacity: number;
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  velocityX: number;
  velocityY: number;
  life: number;
  maxLife: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number, config: ParticleConfig) {
    this.ctx = ctx;
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * (config.size.max - config.size.min) + config.size.min;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
    this.baseOpacity = Math.random() * (config.opacity.max - config.opacity.min) + config.opacity.min;
    this.opacity = this.baseOpacity;
    this.velocityX = (Math.random() - 0.5) * 0.5;
    this.velocityY = (Math.random() - 0.5) * 0.5;
    this.life = 0;
    this.maxLife = Math.random() * 1000 + 500;
  }

  draw(color: string, isActive: boolean = false, resolvedTheme?: string) {
    this.ctx.save();
    
    // Enhanced glow effect for active particles
    if (isActive) {
      this.ctx.shadowBlur = resolvedTheme === 'dark' ? 20 : 10;
      this.ctx.shadowColor = color;
      this.opacity = Math.min(this.baseOpacity * 1.8, 1);
    } else {
      this.ctx.shadowBlur = resolvedTheme === 'dark' ? 8 : 4;
      this.ctx.shadowColor = color;
      this.opacity = this.baseOpacity * (0.4 + 0.6 * Math.sin(this.life * 0.01));
    }
    
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
    
    this.ctx.restore();
  }

  update(noise2D: (x: number, y: number) => number, time: number, mouseX: number, mouseY: number) {
    const noiseFactor = 0.002;
    const angle = noise2D(this.x * noiseFactor, this.y * noiseFactor + time) * Math.PI * 2;
    
    // Mouse interaction
    const mouseDistance = Math.hypot(this.x - mouseX, this.y - mouseY);
    const mouseInfluence = Math.max(0, 1 - mouseDistance / 150);
    
    if (mouseInfluence > 0) {
      const mouseAngle = Math.atan2(this.y - mouseY, this.x - mouseX);
      this.velocityX += Math.cos(mouseAngle) * mouseInfluence * 0.02;
      this.velocityY += Math.sin(mouseAngle) * mouseInfluence * 0.02;
    }
    
    // Apply noise-based movement
    this.velocityX += Math.cos(angle) * this.density * 0.001;
    this.velocityY += Math.sin(angle) * this.density * 0.001;
    
    // Apply velocity with damping
    this.velocityX *= 0.98;
    this.velocityY *= 0.98;
    
    this.x += this.velocityX;
    this.y += this.velocityY;
    
    // Boundary wrapping
    if (this.x > this.canvasWidth + this.size) this.x = -this.size;
    if (this.x < -this.size) this.x = this.canvasWidth + this.size;
    if (this.y > this.canvasHeight + this.size) this.y = -this.size;
    if (this.y < -this.size) this.y = this.canvasHeight + this.size;
    
    // Update life cycle
    this.life++;
    if (this.life > this.maxLife) {
      this.reset();
    }
  }

  reset() {
    this.x = Math.random() * this.canvasWidth;
    this.y = Math.random() * this.canvasHeight;
    this.velocityX = (Math.random() - 0.5) * 0.5;
    this.velocityY = (Math.random() - 0.5) * 0.5;
    this.life = 0;
    this.maxLife = Math.random() * 1000 + 500;
  }
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  const config: ParticleConfig = {
    count: 80,
    maxDistance: 120,
    speed: 0.3,
    size: { min: 0.5, max: 2 },
    opacity: { min: 0.3, max: 0.8 }
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    const noise2D = createNoise2D();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      
      // Responsive particle count
      const area = canvas.width * canvas.height;
      const numberOfParticles = Math.min(config.count, Math.max(20, area / 8000));
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(ctx, canvas.width, canvas.height, config));
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    let time = 0;
    let frameCount = 0;

    const animate = () => {
      time += 0.005;
      frameCount++;
      
      // Clear canvas with subtle fade effect
      ctx.fillStyle = resolvedTheme === 'dark' 
        ? 'rgba(0, 0, 0, 0.05)' 
        : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create dynamic gradients using portfolio color palette
      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      const gradient2 = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (resolvedTheme === 'dark') {
        // Dark theme: Cyan to Magenta gradient (synthwave/outrun aesthetic)
        const cyanIntensity = 0.5 + 0.3 * Math.sin(time * 2);
        const magentaIntensity = 0.5 + 0.3 * Math.sin(time * 2 + Math.PI);
        
        gradient1.addColorStop(0, `hsla(180, 100%, 50%, ${cyanIntensity * 0.8})`);
        gradient1.addColorStop(1, `hsla(334, 100%, 65%, ${magentaIntensity * 0.8})`);
        gradient2.addColorStop(0, `hsla(180, 100%, 50%, ${cyanIntensity * 0.3})`);
        gradient2.addColorStop(1, `hsla(334, 100%, 65%, ${magentaIntensity * 0.2})`);
      } else {
        // Light theme: Blue to Coral gradient (professional and energetic)
        const blueIntensity = 0.4 + 0.2 * Math.sin(time * 1.5);
        const coralIntensity = 0.4 + 0.2 * Math.sin(time * 1.5 + Math.PI);
        
        gradient1.addColorStop(0, `hsla(210, 100%, 50%, ${blueIntensity * 0.6})`);
        gradient1.addColorStop(1, `hsla(0, 100%, 71%, ${coralIntensity * 0.6})`);
        gradient2.addColorStop(0, `hsla(210, 100%, 50%, ${blueIntensity * 0.2})`);
        gradient2.addColorStop(1, `hsla(0, 100%, 71%, ${coralIntensity * 0.15})`);
      }

      const activeParticles = new Set<number>();
      const connections: Array<{p1: Particle, p2: Particle, distance: number}> = [];

      // Update particles and find connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(noise2D, time, mouseRef.current.x, mouseRef.current.y);
        
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          
          if (distance < config.maxDistance) {
            connections.push({p1, p2, distance});
            activeParticles.add(i);
            activeParticles.add(j);
          }
        }
      }

      // Draw connections with enhanced effects
      connections.forEach(({p1, p2, distance}) => {
        const opacity = 1 - (distance / config.maxDistance);
        const lineWidth = opacity * 1.5;
        
        ctx.beginPath();
        ctx.strokeStyle = gradient1;
        ctx.lineWidth = lineWidth;
        ctx.globalAlpha = opacity * 0.7;
        
        // Add slight curve to connections
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        const offset = Math.sin(time * 2 + distance * 0.01) * 5;
        
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(midX + offset, midY + offset, p2.x, p2.y);
        ctx.stroke();
        
        ctx.globalAlpha = 1;
      });

      // Draw particles with portfolio color palette
      if (resolvedTheme === 'dark') {
        // Dark theme: Alternating cyan and magenta particles with glow
        particles.forEach((particle, index) => {
          const isCyan = index % 2 === 0;
          const baseColor = isCyan ? 'hsl(180, 100%, 50%)' : 'hsl(334, 100%, 65%)';
          const glowIntensity = activeParticles.has(index) ? 1.2 : 0.8;
          const pulseFactor = 0.7 + 0.3 * Math.sin(time * 3 + index * 0.1);
          
          particle.draw(baseColor, activeParticles.has(index), resolvedTheme);
        });
      } else {
        // Light theme: Alternating blue and coral particles
        particles.forEach((particle, index) => {
          const isBlue = index % 2 === 0;
          const baseColor = isBlue ? 'hsl(210, 100%, 50%)' : 'hsl(0, 100%, 71%)';
          const opacity = activeParticles.has(index) ? 0.9 : 0.7;
          
          particle.draw(baseColor, activeParticles.has(index), resolvedTheme);
        });
      }

      // Performance optimization: skip frames if needed
      if (frameCount % 3 === 0) {
        // Occasional particle regeneration to keep things fresh
        if (Math.random() < 0.01) {
          const randomIndex = Math.floor(Math.random() * particles.length);
          particles[randomIndex].reset();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme, handleMouseMove]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
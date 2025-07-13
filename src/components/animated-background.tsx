
'use client';

import React, { useRef, useEffect } from 'react';
import { createNoise2D } from 'simplex-noise';
import { useTheme } from 'next-themes';

class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    ctx: CanvasRenderingContext2D;
    canvasWidth: number;
    canvasHeight: number;

    constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.ctx = ctx;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
    }

    draw(color: string) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    update(noise2D: (x: number, y: number) => number, time: number) {
        const noiseFactor = 0.002;
        const angle = noise2D(this.x * noiseFactor, this.y * noiseFactor + time) * Math.PI * 2;
        this.x += Math.cos(angle) * this.density * 0.1;
        this.y += Math.sin(angle) * this.density * 0.1;

        if (this.x > this.canvasWidth + this.size || this.x < -this.size || this.y > this.canvasHeight + this.size || this.y < -this.size) {
            this.x = Math.random() * this.canvasWidth;
            this.y = 0;
        }
    }
}

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

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
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle(ctx, canvas.width, canvas.height));
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        let time = 0;

        const animate = () => {
            time += 0.0005;
            
            const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
            const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            if (resolvedTheme === 'dark') {
                gradient.addColorStop(0, `hsla(${primaryColor}, 0.2)`);
                gradient.addColorStop(1, `hsla(${secondaryColor}, 0.2)`);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            } else {
                gradient.addColorStop(0, `hsla(${primaryColor}, 0.1)`);
                gradient.addColorStop(1, `hsla(${secondaryColor}, 0.1)`);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            }
            
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(noise2D, time);
                
                const p1 = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.2;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
}

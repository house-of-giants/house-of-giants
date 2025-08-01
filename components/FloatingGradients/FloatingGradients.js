'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export const FloatingGradients = ({ variant = 'cyber', intensity = 'high', interactive = false, heroMode = false }) => {
	const canvasRef = useRef(null);
	const animationRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const gradientVariants = {
		cyber: {
			colors: [
				{ r: 212, g: 255, b: 53 }, // #d4ff35
				{ r: 0, g: 255, b: 224 }, // #00ffe0
				{ r: 142, g: 61, b: 253 }, // #8e3dfd
				{ r: 230, g: 30, b: 94 }, // #e61e5e
			],
		},
		green: {
			colors: [
				{ r: 120, g: 200, b: 80 }, // Muted cyber green
				{ r: 80, g: 180, b: 160 }, // Teal-green blend
				{ r: 100, g: 220, b: 120 }, // Softer lime
				{ r: 60, g: 160, b: 140 }, // Deep teal
			],
		},
		purple: {
			colors: [
				{ r: 155, g: 77, b: 255 }, // #9b4dff
				{ r: 255, g: 42, b: 109 }, // #ff2a6d
				{ r: 142, g: 61, b: 253 }, // #8e3dfd
				{ r: 230, g: 30, b: 94 }, // #e61e5e
			],
		},
	};

	const intensityLevels = {
		low: {
			baseOpacity: 0.1,
			maxOpacity: 0.18,
			ballCount: 4,
			speed: 0.1,
		},
		medium: {
			baseOpacity: 0.35,
			maxOpacity: 0.5,
			ballCount: 4,
			speed: 0.6,
		},
		high: {
			baseOpacity: 0.45,
			maxOpacity: 0.65,
			ballCount: 5,
			speed: 0.8,
		},
		hero: {
			baseOpacity: 0.55,
			maxOpacity: 0.8,
			ballCount: 6,
			speed: 1.0,
		},
	};

	const currentIntensity = heroMode ? intensityLevels.hero : intensityLevels[intensity] || intensityLevels.medium;
	const currentVariant = gradientVariants[variant] || gradientVariants.cyber;

	const createMetaballs = useCallback(() => {
		const balls = [];
		const colors = currentVariant.colors;

		for (let i = 0; i < currentIntensity.ballCount; i++) {
			const baseRadius = 0.12 + Math.random() * 0.2;
			balls.push({
				x: Math.random(),
				y: 0.6 + Math.random() * 0.5,
				vx: (Math.random() - 0.5) * currentIntensity.speed * 0.5,
				vy: (Math.random() - 0.5) * currentIntensity.speed * 0.3,
				radius: baseRadius,
				baseRadius: baseRadius,
				color: colors[i % colors.length],
				phase: Math.random() * Math.PI * 2,
				originalVx: (Math.random() - 0.5) * currentIntensity.speed,
				originalVy: (Math.random() - 0.5) * currentIntensity.speed * 0.7,
			});
		}
		return balls;
	}, [currentVariant.colors, currentIntensity]);

	const drawMetaballs = useCallback(
		(ctx, balls) => {
			const canvas = ctx.canvas;
			const width = canvas.width;
			const height = canvas.height;

			ctx.clearRect(0, 0, width, height);

			const stepSize = 4;
			const threshold = 0.05;

			for (let x = 0; x < width; x += stepSize) {
				for (let y = 0; y < height; y += stepSize) {
					let sum = 0;
					let totalR = 0,
						totalG = 0,
						totalB = 0,
						totalWeight = 0;

					const normalizedX = x / width;
					const normalizedY = y / height;

					for (const ball of balls) {
						const dx = normalizedX - ball.x;
						const dy = normalizedY - ball.y;
						const distanceSquared = dx * dx + dy * dy;
						const radiusSquared = ball.radius * ball.radius;

						if (distanceSquared < radiusSquared * 16) {
							const influence = Math.exp(-distanceSquared / (radiusSquared * 1.5));
							sum += influence;

							totalR += ball.color.r * influence;
							totalG += ball.color.g * influence;
							totalB += ball.color.b * influence;
							totalWeight += influence;
						}
					}

					if (sum > threshold && totalWeight > 0) {
						const r = totalR / totalWeight;
						const g = totalG / totalWeight;
						const b = totalB / totalWeight;

						const normalizedSum = Math.min(1, sum);
						const smoothAlpha = Math.pow(normalizedSum, 0.7);
						const alpha =
							currentIntensity.baseOpacity + (currentIntensity.maxOpacity - currentIntensity.baseOpacity) * smoothAlpha;

						ctx.fillStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha})`;
						ctx.fillRect(x, y, stepSize, stepSize);
					}
				}
			}
		},
		[currentIntensity]
	);

	const updateBalls = useCallback(
		(balls) => {
			balls.forEach((ball, index) => {
				ball.phase += 0.012 + index * 0.003;

				const speedMultiplier = currentIntensity.speed * 10;
				const waveX = Math.sin(ball.phase) * 0.1 * speedMultiplier;
				const waveY = Math.cos(ball.phase * 1.4) * 0.08 * speedMultiplier;
				const spiralX = Math.sin(ball.phase * 0.4) * 0.06 * speedMultiplier;
				const spiralY = Math.cos(ball.phase * 0.4) * 0.05 * speedMultiplier;

				ball.vx = ball.originalVx * 0.3 + waveX + spiralX;
				ball.vy = ball.originalVy * 0.3 + waveY + spiralY;

				ball.x += ball.vx * 0.006 * speedMultiplier;
				ball.y += ball.vy * 0.005 * speedMultiplier;

				ball.radius = ball.baseRadius + Math.sin(ball.phase * 2.5) * 0.08;

				const padding = 0.3;
				if (ball.x < -padding) {
					ball.x = -padding + 0.001;
					ball.originalVx = Math.abs(ball.originalVx);
				}
				if (ball.x > 1 + padding) {
					ball.x = 1 + padding - 0.001;
					ball.originalVx = -Math.abs(ball.originalVx);
				}
				if (ball.y < 0.4) {
					ball.y = 0.4 + 0.001;
					ball.originalVy = Math.abs(ball.originalVy);
				}
				if (ball.y > 1.3) {
					ball.y = 1.3 - 0.001;
					ball.originalVy = -Math.abs(ball.originalVy);
				}
			});
		},
		[currentIntensity]
	);

	useEffect(() => {
		if (!isClient || !canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const balls = createMetaballs();
		let lastTime = 0;
		const targetFPS = 45;
		const frameInterval = 1000 / targetFPS;

		const resize = () => {
			if (!canvas || !canvas.parentElement) return;

			const container = canvas.parentElement;
			const rect = container.getBoundingClientRect();
			const scale = 0.2;
			const newWidth = Math.floor(window.innerWidth * scale);
			const newHeight = Math.floor(window.innerHeight * scale);

			canvas.width = newWidth;
			canvas.height = newHeight;
			canvas.style.width = '100%';
			canvas.style.height = '100%';
		};

		// Use ResizeObserver for better resize detection
		let resizeObserver;
		if (window.ResizeObserver) {
			resizeObserver = new ResizeObserver(() => {
				resize();
			});
			resizeObserver.observe(canvas.parentElement);
		}

		// Fallback to window resize events
		const handleWindowResize = () => {
			resize();
		};

		// Initial resize
		resize();

		// Listen to window resize as fallback
		window.addEventListener('resize', handleWindowResize);

		const animate = (currentTime) => {
			if (currentTime - lastTime >= frameInterval) {
				updateBalls(balls);
				drawMetaballs(ctx, balls);
				lastTime = currentTime;
			}
			animationRef.current = requestAnimationFrame(animate);
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [isClient, createMetaballs, updateBalls, drawMetaballs]);

	if (!isClient) {
		return <div className="fixed inset-0 pointer-events-none z-[-1]" />;
	}

	return (
		<div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-primary-dark">
			<canvas
				ref={canvasRef}
				className="w-full h-full"
				style={{
					filter: 'blur(18px)',
					opacity: 1,
					mixBlendMode: 'overlay',
					WebkitMaskImage:
						'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 65%)',
					maskImage:
						'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 65%)',
					willChange: 'auto',
					transform: 'translateZ(0)',
				}}
			/>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					opacity: 0.15,
					mixBlendMode: 'soft-light',
					background: `
						radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
						radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
						radial-gradient(circle at 40% 40%, rgba(255,255,255,0.06) 0%, transparent 50%),
						repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
						repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)
					`,
					WebkitMaskImage:
						'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 65%)',
					maskImage:
						'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 65%)',
				}}
			/>
		</div>
	);
};

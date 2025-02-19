'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useVelocity, useInView } from 'framer-motion';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { extend } from '@react-three/fiber';

const createCRTShaderMaterial = () =>
	new THREE.ShaderMaterial({
		uniforms: {
			uTime: { value: 0 },
			uTexture: { value: null },
			uEffect: { value: 0 },
		},
		vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
		fragmentShader: `
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform float uEffect;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // CRT curve effect
      vec2 curved = uv * 2.0 - 1.0;
      float d = length(curved);
      uv = uv + curved * (d * d * 0.05 * uEffect);
      
      // RGB shift
      float r = texture2D(uTexture, uv + vec2(0.005, 0.0) * uEffect).r;
      float g = texture2D(uTexture, uv).g;
      float b = texture2D(uTexture, uv - vec2(0.005, 0.0) * uEffect).b;

      // Scanlines
      float scanline = sin(uv.y * 800.0 + uTime * 10.0) * 0.04 * uEffect;
      
      // Noise
      float noise = fract(sin(dot(uv, vec2(12.9898,78.233))) * 43758.5453);
      
      vec4 color = vec4(r, g, b, 1.0) + scanline + (noise * 0.05 * uEffect);
      gl_FragColor = color;
    }
  `,
		transparent: true,
	});

const aspectRatio = 27 / 13;

function Scene({ imageUrl, inView, isHovered }) {
	const materialRef = useRef();
	const textureLoader = new THREE.TextureLoader();
	const texture = textureLoader.load(imageUrl);
	const shaderMaterial = useMemo(() => createCRTShaderMaterial(), []);

	useFrame((state) => {
		if (materialRef.current) {
			materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
			materialRef.current.uniforms.uEffect.value = THREE.MathUtils.lerp(
				materialRef.current.uniforms.uEffect.value,
				isHovered ? 0 : inView ? 1 : 0,
				0.02
			);
		}
	});

	return (
		<mesh>
			<planeGeometry args={[aspectRatio * 10, 10]} />
			<shaderMaterial
				ref={materialRef}
				{...shaderMaterial}
				uniforms={{
					...shaderMaterial.uniforms,
					uTexture: { value: texture },
				}}
			/>
		</mesh>
	);
}

export const CRTImage = ({ src, alt, className }) => {
	const containerRef = useRef();
	const isInView = useInView(containerRef, { once: false, amount: 0.5 });
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			ref={containerRef}
			className={`relative aspect-[27/13] w-full ${className}`}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<Canvas>
				<Scene imageUrl={src} inView={isInView} isHovered={isHovered} />
			</Canvas>
		</motion.div>
	);
};

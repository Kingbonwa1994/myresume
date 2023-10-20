//Use three.js to create an interactive 3D component or scene that reflects your creativity and showcases your expertise. It could be an animated 3D logo or any other visually appealing 3D element.
'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GardenOfEden = () => {
  const containerRef = useRef();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  // Add additional objects and elements to your scene here

  useEffect(() => {
    const container = containerRef.current;

    // Set up the renderer
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Set up the camera and position it
    camera.position.set(0, 5, 10);

    // Handle window resize
    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update your scene elements here

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default GardenOfEden;

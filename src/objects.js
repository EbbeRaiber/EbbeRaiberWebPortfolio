import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import './style/styles.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Objects = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        //creating a new scene and setting it to our scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            canvas: document.querySelector('#bg')
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        const diceGeo = new THREE.IcosahedronGeometry(10, 0);
        const diceMat = new THREE.MeshBasicMaterial( {color: 0xFF6347, wireframe: true});
        const dice = new THREE.Mesh(diceGeo, diceMat);

        scene.add(dice);

        const controls = new OrbitControls(camera, renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            dice.rotation.y += 0.001;
            controls.update();
            };
        animate();

        canvasRef.current.appendChild(renderer.domElement);

        }, []);

    return <div ref={canvasRef} />;
  };
  
  export default Objects;
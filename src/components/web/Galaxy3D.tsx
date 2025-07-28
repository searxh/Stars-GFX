"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import {
    Bloom,
    EffectComposer,
    ToneMapping,
    Vignette,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize, Resolution } from "postprocessing";

const Galaxy3D = ({ progress }: { progress: number }) => {
    // Load the GLTF model
    const galaxyGltf = useLoader(GLTFLoader, "/models/big_galaxy/scene.gltf");
    const skyGltf = useLoader(GLTFLoader, "/models/galaxy_sky/scene.gltf");

    const galaxyRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
    const skyRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);

    useMemo(() => {
        galaxyGltf.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                if (mesh.material instanceof THREE.MeshPhysicalMaterial) {
                    mesh.material.metalness = 0;
                    mesh.material.roughness = 0;
                    mesh.material.opacity = 0.1;
                } else if (
                    mesh.material instanceof THREE.MeshStandardMaterial
                ) {
                    mesh.material.metalness = 0;
                    mesh.material.roughness = 0;
                    mesh.material.opacity = 0.1;
                }
            }
        });
    }, [galaxyGltf]);

    useFrame((_, delta) => {
        if (galaxyRef.current) {
            galaxyRef.current.rotation.y = galaxyRef.current.rotation.y +=
                delta * 0.05;
        }
        if (skyRef.current) {
            skyRef.current.rotation.y = skyRef.current.rotation.y +=
                delta * 0.01;
        }
    });

    return (
        <>
            {/* Lighting */}
            <ambientLight
                intensity={5}
                color={new THREE.Color().setHex(0x5cc9ff)}
            />
            <pointLight
                intensity={5}
                distance={8}
                color="red"
                position={[0, 0.1, 0]}
                castShadow={false}
            />

            <primitive
                ref={galaxyRef}
                object={galaxyGltf.scene}
                scale={[1, 1, 1]} // Adjust scale
                rotation={[0.1, 0, 0.1]}
                position={[0, 0, 0]} // Adjust position to bring it into view
            />
            <primitive
                ref={skyRef}
                object={skyGltf.scene}
                scale={[6, 6, 6]} // Adjust scale
                rotation={[50, 0, 10]}
                position={[0, 0, 0]} // Adjust position to bring it into view
            />
            <PerspectiveCamera
                makeDefault
                position={[-1, 0.8, 5]}
                rotation={[
                    THREE.MathUtils.degToRad((progress / 100) * 360 * 2),
                    -THREE.MathUtils.degToRad((progress / 100) * 360 * 5),
                    0,
                ]}
            />
            <EffectComposer multisampling={2}>
                <Vignette eskil offset={0.1} darkness={1.5} />
                <Bloom
                    intensity={0.75}
                    luminanceThreshold={0}
                    luminanceSmoothing={0.5}
                    height={50}
                    kernelSize={KernelSize.MEDIUM}
                    resolutionX={Resolution.AUTO_SIZE}
                    resolutionY={Resolution.AUTO_SIZE}
                    mipmapBlur={true}
                />
                <ToneMapping
                    blendFunction={BlendFunction.NORMAL} // blend mode
                    adaptive={true} // toggle adaptive luminance map usage
                    resolution={256} // texture resolution of the luminance map
                    middleGrey={0.1} // middle grey factor
                    maxLuminance={16.0} // maximum luminance
                    averageLuminance={1.0} // average luminance
                    adaptationRate={1.0} // luminance adaptation rate
                />
            </EffectComposer>
        </>
    );
};

export default Galaxy3D;

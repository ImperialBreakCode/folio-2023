import { Canvas, RootState, extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, SphereGeometry } from 'three';

extend(SphereGeometry);

const LeftSphere = () => {

    const onCreation = ({camera, gl} : RootState) => {

		gl.setClearColor(0x8a88ff);

        camera.position.y = 1;
        camera.lookAt(0, 0, 0);
        camera.rotation.z = 0.5;
    }

	return (
		<div className='w-full aspect-square mb-24'>
			<Canvas onCreated={onCreation}>
				<SphereMesh/>
			</Canvas>
		</div>
	);
};

const SphereMesh = () => {
	const sphere = useRef<Mesh>(null);

	useFrame(({ clock }: RootState) => {

        if (sphere.current) {
            sphere.current.rotation.y = clock.getElapsedTime() / 4;
        }

	});

	return (
		<mesh ref={sphere}>
			<sphereGeometry args={[2.5, 24, 24]} />
			<meshBasicMaterial color={'black'} wireframe />
		</mesh>
	);
};

export default LeftSphere;

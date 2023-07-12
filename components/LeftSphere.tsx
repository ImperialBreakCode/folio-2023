'use client';

import { Canvas, extend } from '@react-three/fiber';
import { MeshBasicMaterial, SphereGeometry } from 'three';

extend(SphereGeometry);

const LeftSphere = () => {
	return (
		<div className='w-full'>
			<Canvas>
				<mesh>
                    <color attach={'background'} args={[0, 0, 16]}/>
					<sphereGeometry args={[1, 16, 16]} />
					<meshBasicMaterial color={0x6720ff} />
				</mesh>
			</Canvas>
		</div>
	);
};

export default LeftSphere;

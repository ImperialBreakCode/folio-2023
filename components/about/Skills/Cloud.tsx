import SkillBox from '../SkillBox';

import linux from '@/public/about/cloud/linux_logo.png';
import docker from '@/public/about/cloud/docker_logo.png';
import kubernetes from '@/public/about/cloud/k8_logo.png';

const Cloud = () => {
	return (
		<>
            <SkillBox name='linux' src={linux} />
            <SkillBox name='docker' src={docker} />
            <SkillBox name='kubernetes (minikube) - basic experience' src={kubernetes} />
		</>
	);
};

export default Cloud;

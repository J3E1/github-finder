import { Fragment } from 'react';
import { FaGithub } from 'react-icons/fa';

const About = () => {
	return (
		<Fragment>
			<h1 className='text-6xl mb-4 font-bold'>Github Finder</h1>
			<p className='mb-4 text-2xl font-light'>
				A React app to search GitHub profiles and see profile details.
			</p>

			<div className='flex-none pr-2 mr-2 '>
				<a
					href='https://github.com/Sad-Machin3'
					className='flex text-lg font-bold items-center '>
					<FaGithub className='inline pr-2 text-3xl' />
					Sad-Machin3
				</a>
			</div>
			<p className='text-lg text-gray-400'>
				Version <span className='text-white'>1.0.0</span>
			</p>
			<p className='text-lg text-gray-400'>
				By:
				<a
					className='text-white ml-2'
					href='https://twitter.com/hassibmoddasser'>
					Sad-Machin3
				</a>
			</p>
		</Fragment>
	);
};
export default About;

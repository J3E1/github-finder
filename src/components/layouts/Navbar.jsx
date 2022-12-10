import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';

const Navbar = ({ title }) => {
	const themeValues = [
		'light',
		'dark',
		'cupcake',
		'halloween',
		'aqua',
		'synthwave',
		'cyberpunk',
		'retro',
		'forest',
		'pastel',
		'black',
		'luxury',
		'night',
		'dracula',
	];

	useEffect(() => {
		themeChange(false);
	});

	return (
		<nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<FaGithub className='inline pr-2 text-3xl' />
					<Link to='/' className='text-lg font-bold align-middle '>
						{title}
					</Link>
				</div>
				<div className='flex-1 px-2 mx-2 '>
					<div className='flex justify-end items-center '>
						{/* <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
							Home
						</Link>
						<Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
							About
						</Link> */}
						<select
							className='select select-ghost select-sm ml-4 rounded-md'
							data-choose-theme>
							<option disabled value=''>
								Pick a theme
							</option>
							{themeValues.map((theme, index) => (
								<option
									key={index}
									value={theme}
									defaultValue={theme === 'dark' ? true : false}>
									{theme.charAt(0).toUpperCase() + theme.slice(1)}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
};

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;

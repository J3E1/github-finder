import { GiCyberEye } from 'react-icons/all';
import { Link } from 'react-router-dom';

const Footer = () => {
	const footerYear = new Date().getFullYear();

	return (
		<footer className='footer p-10 text-neutral-content bg-neutral'>
			<div>
				<GiCyberEye className='block my-2 text-4xl' />
				<p>Copyright &copy; {footerYear}</p>
			</div>
			<div>
				<div className='grid grid-flow-row gap-4'>
					<Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
						Home
					</Link>
					<Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
						About
					</Link>
				</div>
			</div>
		</footer>
	);
};
export default Footer;

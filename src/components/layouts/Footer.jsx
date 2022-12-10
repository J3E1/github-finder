import { GiCyberEye } from 'react-icons/all';

const Footer = () => {
	const footerYear = new Date().getFullYear();

	return (
		<footer className='footer p-10 text-neutral-content bg-neutral footer-center '>
			<div>
				<GiCyberEye className='block my-2 text-4xl' />
				<p>Copyright &copy; {footerYear}</p>
			</div>
		</footer>
	);
};
export default Footer;

import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

import { MdError } from 'react-icons/all';

const Alert = () => {
	const { alert } = useContext(AlertContext);

	return (
		alert !== null && (
			<div className='flex items-start mb-4 space-x-2 '>
				{alert.type === 'error' && (
					<MdError className='inline mr-2 text-3xl fill-red-600 ' />
				)}
				<p className='flex-1 text-base font-semibold leading-7 text-white'>
					<strong>{alert.message}</strong>
				</p>
			</div>
		)
	);
};
export default Alert;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({ user: { login, avatar_url } }) => {
	return (
		<div className='card shadow-md compact side bg-base-100'>
			<div className='flex-row items-center space-x-4 card-body'>
				<div>
					<div className='avatar'>
						<div className='shadow rounded-full w-14 h-14'>
							<img src={avatar_url} alt='Profile Image' />
						</div>
					</div>
				</div>
				<div>
					<h2 className='card-title px-3 '>{login}</h2>
					<Link
						className='text-base-content text-opacity-40 btn btn-ghost btn-sm mt-2'
						to={`/user/${login}`}>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

UserItem.propType = {
	user: PropTypes.object.isRequired,
};
export default UserItem;

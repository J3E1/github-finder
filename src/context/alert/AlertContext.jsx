import { useReducer } from 'react';
import { createContext } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
	const initialState = null;

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	const setAlert = (message, type) => {
		dispatch({ type: 'SET_ALERT', payload: { message, type } });

		setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
	};

	const contextValue = {
		alert: state,
		setAlert,
	};

	return (
		<AlertContext.Provider value={contextValue}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;

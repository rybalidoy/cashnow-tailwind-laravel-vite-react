import { useNavigate } from "react-router";
import axios from "axios";

const promiseResolver = (error) => {
	return Promise.resolve(error);
}


const AxiosInterceptor = () => {
	// Auth
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		axios.interceptors?.response?.use(undefined, function (error) {
			switch (error?.response?.status) {
				/**
				 *  Unauthenticated
				 */
				case 401: 
					return promiseResolver(error);
				case 403:
					navigate("/unauthorized");
					return promiseResolver(error);
				case 404:
					navigate(`/404?origin=${location.pathname}`);
					return promiseResolver(error);
			}

			return Promise.reject(error);
		});
	},[]);

	return undefined;
}

export default AxiosInterceptor;
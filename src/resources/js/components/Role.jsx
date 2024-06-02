import UnauthorizedPage from "../pages/UnauthorizedPage";
import useAuthStore from "../store/AuthStore"


export const detectRole = (userRole) => {
	const { role } = useAuthStore();

	if(role == userRole) return true;
};

export const permitWithFallback = ({ role, fallback, ...props }) => {
	fallback = fallback || <UnauthorizedPage />

	if(detectRole(role)) return props.children;

	return fallback;
};

const Role = ({ role, ...props }) => {
	if(!detectRole(role)) return undefined;

	return <React.Fragment {...props}></React.Fragment>
}

export default Role;
import { useMatch, useResolvedPath } from "react-router";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import useAuthStore from "../store/AuthStore";


const Navbar = () => {
	const { email, authenticated } = useAuthStore();
	return (
		<div>
			
		</div>
	);
}

export default Navbar;
import { UserLinks } from "../routes/UserLinks";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
	return (
		<nav>
			{UserLinks?.map((item) => (
				<Link
					key={item?.title}
					to={item?.href}
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						'group relative flex h-12 justify-start gap-x-3'
					)}
				>
					{item?.icon && <span className="icon">{item.icon}</span>}
					{item?.title}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
import { DashboardIcon, PersonIcon } from "@radix-ui/react-icons";

export const UserLinks = [
	{
		title: "Dashboard",
		icon: <DashboardIcon />,
		href: "/",
	},
	{
		title: "Profile",
		icon: <PersonIcon />,
		href: "/user-profile",
	},
	{
		title: "Loans",
		href: "/user-loans",
	},
];
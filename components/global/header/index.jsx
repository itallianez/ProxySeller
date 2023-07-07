import Link from "next/dist/client/link";
import Logo from "../../icons/logo";
import Facebook from "../../icons/facebook";
import GitHub from "../../icons/github";
import Instagram from "../../icons/instagram";
import LinkedIn from "../../icons/linkedin";
import styles from "./header.module.css";

const Header = () => {
	const socialList = [
		{
			icon: <Facebook color="#fff" />,
			link: "#",
		},
		{
			icon: <GitHub color="#fff" />,
			link: "#",
		},
		{
			icon: <Instagram color="#fff" />,
			link: "#",
		},
		{
			icon: <LinkedIn color="#fff" />,
			link: "#",
		},
	];

	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<Link href="/">
					<a className={styles.logo} rel="nofollow">
						<Logo />
					</a>
				</Link>
				<div className={styles.socialList}>
					{socialList.map((item, index) => (
						<a
							href={item.link}
							key={index}
							className={styles.socialLink}
							rel="nofollow"
						>
							{item.icon}
						</a>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;

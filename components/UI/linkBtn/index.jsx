import Link from "next/link";
import styles from "./linkBtn.module.css";

const LinkBtn = ({ href, title, light }) => {
	const isLight = light ? styles.linkLight : styles.linkDefault;
	return (
		<Link href={href} rel="nofollow">
			<a className={`${styles.link} ${isLight}`}>{title}</a>
		</Link>
	);
};

export default LinkBtn;

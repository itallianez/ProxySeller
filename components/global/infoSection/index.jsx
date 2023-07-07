import styles from "./infoSection.module.css";

const InfoSection = ({ background, title }) => {
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className={styles.titleWrapper}>
				<h1 style={{ color: "#fff" }}>{title}</h1>
			</div>
		</div>
	);
};

export default InfoSection;

import Link from "next/dist/client/link";
import styles from "./albumCard.module.css";

const AlbumCard = ({ album }) => {
	return (
		<div
			className={styles.albumWrapper}
			style={{ backgroundImage: "url('../images/2.jpg')" }}
		>
			<Link href="#">
				<a rel="nofollow" className={styles.link}>
					<h3 className={styles.title}>{album.title}</h3>
				</a>
			</Link>
		</div>
	);
};

export default AlbumCard;

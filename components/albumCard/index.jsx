import Link from "next/dist/client/link";
import styles from "./albumCard.module.css";
import bg from "../../public/images/2.jpg";

const AlbumCard = ({ album }) => {
	console.log(bg);
	return (
		<div
			className={styles.albumWrapper}
			style={{ backgroundImage: `url(${bg})` }}
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

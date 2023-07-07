import Link from "next/dist/client/link";
import styles from "./postCard.module.css";
import bg from "../../public/images/2.jpg";

const PostCard = ({ post }) => {
	return (
		<div className={styles.postWrapper}>
			<Link href="#">
				<a rel="nofollow" className={styles.postImg}>
					<img src={bg} alt={post.title} />
				</a>
			</Link>
			<div className={styles.postInfo}>
				<h3 className={styles.title}>{post.title}</h3>
				<p className={styles.description}>{post.body}</p>
			</div>
		</div>
	);
};

export default PostCard;

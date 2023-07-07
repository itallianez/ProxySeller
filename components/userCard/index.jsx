import LinkBtn from "../UI/linkBtn";
import avatar from "../../public/images/1.png";
import phone from "../../public/images/phone.png";
import email from "../../public/images/email.png";
import website from "../../public/images/website.png";
import styles from "./userCard.module.css";

const UserCard = ({ user }) => {
	const userContacts = [
		{
			icon: email,
			info: user.email,
			alt: `email of ${user.name}`,
		},
		{
			icon: phone,
			info: user.phone,
			alt: `phone of ${user.name}`,
		},
		{
			icon: website,
			info: user.website,
			alt: `website of ${user.name}`,
		},
	];

	return (
		<div className={styles.userCardWrapper}>
			<div className={styles.avatarWrapper}>
				<img
					className={styles.avatar}
					src={avatar}
					alt={`Avatar by ${user.name}`}
				/>
			</div>
			<h3>{user.username}</h3>
			<div className={styles.userInfoWrapper}>
				{userContacts.map(item => (
					<div key={item.info} className={styles.userInfo}>
						<div className={styles.iconWrapper}>
							<img src={item.icon} alt={item.alt} className={styles.icon} />
						</div>
						<div className={styles.info}>{item.info}</div>
					</div>
				))}
			</div>
			<div className={styles.buttonsWrapper}>
				<LinkBtn light href={`/posts/${user.id}`} title="Posts" />
				<LinkBtn href={`/albums/${user.id}`} title="Albums" />
			</div>
		</div>
	);
};

export default UserCard;

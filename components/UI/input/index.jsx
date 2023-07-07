import styles from "./input.module.css";

const Input = ({ value, onChange, placeholder }) => {
	return (
		<input
			value={value}
			onChange={onChange}
			placeholder={placeholder || ""}
			className={styles.input}
		/>
	);
};

export default Input;

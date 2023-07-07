import styles from "./select.module.css";

const Select = ({ value, defaultValue, onChange, selectList }) => {
	return (
		<select value={value} onChange={onChange} className={styles.select}>
			<option disabled value="">
				{defaultValue}
			</option>
			{selectList?.map(select => (
				<option value={select.value} key={select.value}>
					{select.title}
				</option>
			))}
		</select>
	);
};

export default Select;

import { useState, useMemo } from "react";
import { getUserList } from "../api";
import PageContainer from "../components/global/pageContainer";
import UserCard from "../components/userCard";
import Input from "../components/UI/input";
import Select from "../components/UI/select";

const selectList = [
	{
		value: "asc",
		title: "Ascending",
	},
	{
		value: "desc",
		title: "Descending",
	},
];

const Index = ({ users }) => {
	const [sortOrder, setSortOrder] = useState("");
	const [search, setSearch] = useState("");
	const [userList, setUserList] = useState(users);

	const sortUsers = value => {
		if (value === "asc") {
			return [...users].sort((a, b) => a.username.localeCompare(b.name));
		} else if (value === "desc") {
			return [...users].sort((a, b) => b.username.localeCompare(a.name));
		}
		setSortOrder(value);
	};

	const sortedUsers = useMemo(() => {
		if (sortOrder) {
			return sortUsers(sortOrder);
		}
		return userList;
	}, [sortOrder]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedUsers.filter(user =>
			user.username.toLowerCase().includes(search.toLowerCase())
		);
	}, [search, sortedUsers]);

	return (
		<PageContainer infoBg={"/images/2.jpg"} infoTitle="User's list">
			<div className="section">
				<h2 className="textCenter mb-40">Users</h2>
				<div className="searchWrapper mb-40">
					<Input
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder="Let search by users"
					/>
					<Select
						value={sortOrder}
						defaultValue="not sorted"
						onChange={e => setSortOrder(e.target.value)}
						selectList={selectList}
					/>
				</div>
				<div className="listWrapper">
					{sortedAndSearchedPosts.length ? (
						sortedAndSearchedPosts.map(user => (
							<UserCard key={user.id} user={user} />
						))
					) : (
						<h3>Users not found</h3>
					)}
				</div>
			</div>
		</PageContainer>
	);
};

export default Index;

export async function getStaticProps(context) {
	const users = await getUserList();
	return {
		props: { users },
	};
}

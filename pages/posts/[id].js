import { getIdList, getPostsByUserId } from "../../api";
import PageContainer from "../../components/global/pageContainer";
import PostCard from "../../components/postCard";

const PostPage = ({ posts }) => {
	return (
		<PageContainer infoBg={"/images/2.jpg"} infoTitle="Posts Page">
			<div className="section">
				<h2 className="textCenter mb-40">Posts page</h2>
				<div className="listWrapper">
					{posts.map(item => (
						<PostCard key={item.id} post={item} />
					))}
				</div>
			</div>
		</PageContainer>
	);
};
export default PostPage;

export async function getStaticPaths() {
	const paths = await fetch("https://jsonplaceholder.typicode.com/posts")
		.then(res => res.json())
		.then(data =>
			data.map(item => {
				return {
					params: {
						id: item.id.toString(),
					},
				};
			})
		);
	console.log("paths: ", paths);
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const posts = await getPostsByUserId(params.id);
	return {
		props: { posts },
	};
}

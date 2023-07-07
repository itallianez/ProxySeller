import { getPostsByUserId } from "../../api";
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

export async function getServerSideProps({ params }) {
	const posts = await getPostsByUserId(params.id);
	return {
		props: { posts },
	};
}

import { getAlbumsByUserId } from "../../api";
import AlbumCard from "../../components/albumCard";
import PageContainer from "../../components/global/pageContainer";

const AlbumPage = ({ albums }) => {
	return (
		<PageContainer infoBg={"/images/2.jpg"} infoTitle="Albums page">
			<div className="section">
				<h2 className="textCenter mb-40">Albums page</h2>
				<div className="listWrapper">
					{albums.map(item => (
						<AlbumCard key={item.id} album={item} />
					))}
				</div>
			</div>
		</PageContainer>
	);
};

export default AlbumPage;

export async function getServerSideProps({ params }) {
	const albums = await getAlbumsByUserId(params.id);
	return {
		props: { albums },
	};
}

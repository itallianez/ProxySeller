import PageContainer from "../components/global/pageContainer";
import LinkBtn from "../components/UI/linkBtn";

const ErrorPage = () => {
	return (
		<PageContainer>
			<div className="errorPageWrapper">
				<h1>404</h1>
				<h3 className="mb-40">page not found</h3>
				<LinkBtn href="/" title="Go home page" />
			</div>
		</PageContainer>
	);
};

export default ErrorPage;

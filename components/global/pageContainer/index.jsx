import { seoData } from "../../../constants/seoData";
import useWrapperMinHeight from "../../../utils/hooks/useWrapperMinHeight";
import Footer from "../footer";
import Header from "../header";
import Head from "next/head";
import InfoSection from "../infoSection";

const PageContainer = ({
	children,
	title,
	keywords,
	description,
	infoBg,
	infoTitle,
}) => {
	const contentMinHeight = useWrapperMinHeight();
	return (
		<>
			<Head>
				<title>{title || seoData.title}</title>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="description" content={description || seoData.description} />
				<meta name="keywords" content={keywords || seoData.keywords} />
				<link rel="icon" href="./images/favicon.png" sizes="any" />
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			<main className="wrapper" style={{ minHeight: contentMinHeight }}>
				{infoBg && infoTitle && (
					<InfoSection background={infoBg} title={infoTitle} />
				)}
				<div className="container">{children}</div>
			</main>
			<Footer />
		</>
	);
};

export default PageContainer;

import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import HomePage from "../components/global/home/HomePage.jsx";

export default function Home() {
	return (
		<Layout>
			<Head title='home' />
			<HomePage />
		</Layout>
	);
}

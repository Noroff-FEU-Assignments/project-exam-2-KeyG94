import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import ContactPage from "../../components/global/contact/ContactPage.jsx";

export default function Contact() {
	return (
		<Layout>
			<Head title='Contact' />
			<ContactPage />
		</Layout>
	);
}

import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";

export default function Home() {
  return (
    <Layout>
      <Head title="home" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  );
}

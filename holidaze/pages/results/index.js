import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import ResultsPage from "../../components/global/results/ResultsPage";

export default function index() {
  return (
    <Layout>
      <Head title="Results" />
      <ResultsPage />
    </Layout>
  );
}

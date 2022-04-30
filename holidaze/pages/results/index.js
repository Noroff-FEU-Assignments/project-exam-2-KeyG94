import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import ResultsPage from "../../components/global/results/ResultsPage";
import { BASE_URL, HOTELS } from "../../constants/baseUrl";
import axios from "axios";

export default function index({ hotel }) {
  return (
    <Layout>
      <Head title="Results" />
      <ResultsPage data={hotel} />
    </Layout>
  );
}

export async function getStaticProps() {
  // in case there is an error in the API call
  // we'll send an empty array in as the prop
  const url = BASE_URL + HOTELS;
  let hotel = [];

  try {
    const response = await axios.get(url);

    // the log here will happen on the server, you can check the console in your editor
    if (response.statusText !== "OK") {
      console.log(
        `Status: ${response.status} \n Status text: ${response.statusText}`
      );
    }
    // the array is on the response.data.data property
    hotel = response.data.data;
  } catch (error) {
    console.log(error);
  }

  // the props object we return here will become the props in the component
  return {
    props: {
      hotel,
      revalidate: 60,
    },
  };
}

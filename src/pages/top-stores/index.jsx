import Layout from "@/components/layout/Layout";
import BrakingNews from "@/components/top-stores/BrakingNews";
import Head from "next/head";

const TopStores = () => {
  return (
    <>
      <Head>
        <title>Top Stores | Relight News </title>
      </Head>
      <Layout>
        <div className="pt-16">
          <BrakingNews />
        </div>
      </Layout>
    </>
  );
};

export default TopStores;

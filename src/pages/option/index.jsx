import Layout from "@/components/layout/Layout";
import RecentNews from "@/components/option/RecentNews";
import Head from "next/head";

const Option = () => {
  return (
    <>
      <Head>
        <title>Option | Relight News </title>
      </Head>
      <Layout>
        <div className="pt-16">
          <RecentNews />
        </div>
      </Layout>
    </>
  );
};

export default Option;

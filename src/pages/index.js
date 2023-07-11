import Banner from "@/components/home/Banner";
import ContactUs from "@/components/home/ContactUs";
import RecentIssues from "@/components/home/RecentIssues";
import Reviews from "@/components/home/Reviews";
import Sections from "@/components/home/Sections";
import Subscribe from "@/components/home/Subscribe";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Sections />
      <Subscribe />
      <RecentIssues />
      <Reviews />
      <ContactUs />
    </Layout>
  );
};

export default Home;

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners1 from "@/components/Partners1";
import OurServises from "@/components/OurServises";
export const metadata = {
  title: "NexasLeads",
  description:
    "Demand Generation for B2B companies, Outbound Marketing campaigns , Lead Generation and appointment setting to Generate You Meetings And Clients.",
  keywords:
    "email marketing, go to market, growth hacking, demand generation, B2B Growth, lead generation, appointment setting, LinkedIn marketing, WhatsApp marketing, SMS marketing",
  icons: {
    icon: ["/favicon.ico?v=1"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
const HomePage = () => {
  return(
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <Hero />
      <div className="-mt-[19rem] sm:-mt-24 md:-mt-20 xl:-mt-28 2xl:-mt-36 py-2">
        <Partners1 />
      </div>
      <OurServises />
    </div>
  ) 
};

export default HomePage;

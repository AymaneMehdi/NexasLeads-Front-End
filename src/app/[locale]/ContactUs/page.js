import React from 'react';
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NexasLeads - Contact Us",
  description: "Get tailored B2B growth strategies. Reach out for a free consultation and discover how we can accelerate your business success.",
  keywords: "email marketing, go to market, growth hacking, demand generation, B2B Growth, lead generation, appointment setting, LinkedIn marketing, WhatsApp marketing, SMS marketing",
  icons:{
    icon:['/favicon.ico?v=1'],
  },
  robots: {
    index: true,
    follow: true,
  }
};
const ContactUs = () => {
  return (
  <div>
  <Head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={metadata.keywords} />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </Head>
  <Navbar />
  <Footer />
  </div>
  );
};

export default ContactUs;

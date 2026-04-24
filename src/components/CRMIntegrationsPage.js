"use client";
import React from "react";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";
import Image from "next/image";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import HubSpot from "../assets/Hubspot2.webp";
import Link from "next/link";
import SectionComponent from "./SectionComponent";
const CRMIntegrationsPage = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.CRMIntegrations : En.CRMIntegrations;
  return (
    <>
      <section className="bg-gradient-to-b from-[#9bdcf7]  to-white">
        <div className="relative z-10   min-w-full pt-8 px-4 md:px-8 lg:px-16 xl:pt-32 ">
          <p className="w-full text-center text-4xl font-bold hacking">
            {data.title}
          </p>
          <p className="text-start md:text-center text-[30px] md:text-[50px] md:leading-[61px] font-[700] text-gray-900">
            {data.heading}
            <span className="hacking">{data.heading2}</span>
            <span>{data.heading3}</span>{" "}
            <div className="flex justify-center pt-4">
              <Image
                className=""
                src={HubSpot}
                width={175}
                height={150}
                alt="Description of image 1"
                data-value="2"
              />
            </div>
          </p>
          <div class="h-fit w-fit relative mx-auto rounded-3xl bg-gradient-to-r from-[#e24545] vida-red-500 to-yellow-400 px-[2.5px] py-[2.6px] group">
            <Link
              href={`/${locale}/ContactUs`}
              class="flex h-fit w-fit items-center justify-center bg-white group-hover:bg-[#e24545] rounded-3xl px-4 py-2"
            >
              <h1 class="text-md font-semibold text-[#e24545] group-hover:text-white text-nowrap px-2">
                {data.button}
              </h1>
            </Link>
          </div>
          <Image
            className="object object2 hidden md:absolute w-64 end-6 top-28 -z-10"
            src={image2}
            width={550}
            height={550}
            alt="Description of image 2"
            data-value="1"
          />{" "}
          <Image
            className="object object1 hidden md:absolute w-80 start-5 bottom-0 -z-10"
            src={image1}
            width={550}
            height={550}
            alt="Description of image 1"
            data-value="2"
          />
        </div>
        <p className="px-8 md:px-16 lg:px-48 text-[16px] text-start md:text-center">
          {data.text}
        </p>
      </section>{" "}
      <div className="container mx-auto p-4">
        {Object.keys(data)
          .filter((key) => key.startsWith("card"))
          .map((key, index) => (
            <SectionComponent
              id={index + 1}
              key={key}
              title={data[key]}
              description={data[`description${index + 1}`]}
              imageUrl={index}
              imageAlt={"section.imageAlt"}
              reverse={index % 2 != 1}
            />
          ))}
      </div>
    </>
  );
};
export default CRMIntegrationsPage;

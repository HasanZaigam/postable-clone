"use client";

import React, { useState } from "react";

// Define the type for each tab's data
type TabData = {
  title: string;
  description1: string;
  description: string[];
  imgSrc: string;
};

// Define the tab data in a structured way
const tabs: Record<string, TabData> = {
  tab1: {
    title: "Individuals",
    description1:
      "Postable is perfect for individuals who want to elevate their social media presence without the hassle. Whether you're sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets.",
    description: [
      "Effortless Post Creation",
      "Enhanced Visual Appeal",
      "Easy Sharing Across Platforms",
      "Consistent Social Media Presence",
    ],
    imgSrc: "Individual_fe1fis.webp",
  },
  tab2: {
    title: "Influencers",
    description1:
      "For influencers, maintaining a consistent and visually appealing social media presence is crucial. Postable empowers you to convert your tweets into captivating images that align with your brand, helping you to keep your content fresh and engaging across all platforms.",
    description: [
      "Quick Post Creation",
      "Boosted Follower Engagement",
      "Consistent Multi-Platform Presence",
      "Content Diversification",
    ],
    imgSrc: "Influencers_x5kswv.webp",
  },
  tab3: {
    title: "Businesses",
    description1:
      "Businesses need to stay agile and maintain a strong social media presence. Postable helps you quickly turn tweets into polished visuals that resonate with your audience, reinforcing your brand and driving engagement without the need for a full design team.",
    description: [
      "Content Repurposing",
      "Cross-Platform Marketing",
      "Consistent Branding",
      "Higher Engagement",
    ],
    imgSrc: "Businesses_tc1bbp.webp",
  },
};

const Solution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("tab1");
  const [rotateImage, setRotateImage] = useState<boolean>(false);

  const handleTabClick = (tab: keyof typeof tabs) => {
    setActiveTab(tab);
    setRotateImage(false);
    setTimeout(() => {
      setRotateImage(true);
    }, 50);
  };

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 py-4 md:-mb-8 md:flex-row md:py-24 xl:pe-4 xl:ps-0">
      <div className="w-full md:w-2/3">
        {/* Heading */}
        <h3 className="text-3xl font-semibold tracking-tight md:text-[40px] md:leading-[42px]">
          One Solution for All!
        </h3>
        {/* Sub-heading */}
        <p className="mt-1 max-w-80 mb-5 text-xs font-medium leading-[20px] text-neutral-700 md:mt-4 md:max-w-full md:text-xl md:text-neutral-950">
          Postable helps everyone to share their thoughts across multiple platforms
        </p>

        {/* Tab header */}
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="inline-flex h-fit items-center justify-center rounded-md mb-10 bg-gray-200 p-1 text-muted-foreground w-full md:w-fit md:rounded-[20px]"
          style={{ outline: "none" }}
        >
          {Object.keys(tabs).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => handleTabClick(tabKey as keyof typeof tabs)}
              role="tab"
              aria-selected={activeTab === tabKey}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-2.5 text-sm font-medium ring-offset-background transition-all hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex-1 md:rounded-2xl md:px-10 md:py-4 md:text-lg ${
                activeTab === tabKey
                  ? "bg-white text-foreground shadow-md"
                  : "text-muted-foreground"
              }`}
              aria-controls={`radix-:r5:-content-${tabKey}`}
              data-state={activeTab === tabKey ? "active" : "inactive"}
            >
              {tabs[tabKey].title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-6">
          {/* Paragraph description */}
          <p className="mb-4 text-gray-600 md:text-xl">
            {tabs[activeTab].description1}
          </p>
          {/* Bullet points */}
          <ul className="list-disc pl-5 space-y-2">
            {tabs[activeTab].description.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image section */}
      <div className="mx-auto flex h-full w-full items-center justify-center md:w-1/3">
        <div
          className={`flex transform-gpu flex-col gap-4 transition-transform ease-linear ${
            rotateImage ? "rotate-360" : ""
          }`}
          onClick={() => setRotateImage(!rotateImage)}
        >
          <img
            src={tabs[activeTab].imgSrc}
            alt={tabs[activeTab].title}
            className="h-auto w-full max-w-sm object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Solution;

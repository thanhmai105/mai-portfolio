import { Icons } from "../assets";
import ContactItem from "./contact/ContactItem";
import { Typography } from "./libs/Typography";
import { data } from "../data";
import Experience from "./about/Experience";
import React from "react";
import { Container, AnimatedRouter } from "./libs";

export default function About() {
  const { me, workSummary } = data;

  return (
    <AnimatedRouter>
      <Container className="py-[120px]">
        <Typography.TextItalic className="pb-4">
          Nice to meet you !
        </Typography.TextItalic>
        <h1 className="uppercase pb-8">Welcome to...</h1>
        <div className="grid grid-cols-3 gap-4 space-x-20">
          {/* introduce */}
          <div className="col-span-1 flex items-center">
            <div>
              <Icons.Avatar className="pb-4" />
              <div className="flex flex-col items-center">
                <h1 className="bg-gradient !bg-clip-text text-transparent transition pb-4">
                  {me.name}
                </h1>
                <div className="flex space-x-2 leading-6 pb-4">
                  <Typography.TextItalic className="!text-2md">
                    {workSummary.summary.name}
                  </Typography.TextItalic>
                  <span className="text-2md">based in</span>
                  <Typography.TextItalic className="!text-2md">
                    {workSummary.summary.workPlace}
                  </Typography.TextItalic>
                </div>
                <a href="ff" className="flex group space-x-2 w-fit">
                  <Typography.Paragraph className="underline underline-offset-2 group-hover:bg-gradient group-hover:!bg-clip-text group-hover:text-transparent group-hover:transition">
                    Download CV
                  </Typography.Paragraph>
                  <Icons.ArrowBgBlack className="group-hover:bg-gradient bg-black" />
                </a>
              </div>
            </div>
          </div>
          {/* contact and summary */}
          <div className="col-span-2 flex items-center">
            <div className="w-full">
              <div className="grid grid-cols-2 gap-8 py-8">
                <ContactItem title={me.phoneNumber} icon={<Icons.Phone />} />
                <ContactItem
                  title={workSummary.summary.experience.years + "yrs"}
                  icon={<Icons.User />}
                />
                <ContactItem title={me.email} icon={<Icons.Mail />} />
                <ContactItem title={me.address} icon={<Icons.Location />} />
              </div>
              <div className="h-[2px] bg-slate-100"></div>
              <div className="grid grid-cols-2 gap-8 py-8">
                {workSummary.details.map((item, index) => (
                  <AboutItem
                    key={index}
                    years={item.years}
                    title={item.position}
                    description={item.description}
                  />
                ))}
              </div>
              <div className="h-16 bg-white"></div>
              <div className="bg-black flex space-x-4 text-white p-10">
                <Icons.OpenQuotes style={{ width: "40%", height: "40%" }} />
                <Typography.TextItalic>
                  " {workSummary.summary.introduction} "
                </Typography.TextItalic>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Experience />
    </AnimatedRouter>
  );
}

type AboutItemProps = {
  years: number | string;
  title: string;
  description: string;
};

const AboutItem = ({ years, title, description }: AboutItemProps) => {
  return (
    <div>
      <div className="flex flex-row space-x-4 items-center">
        <h1 className="bg-gradient !bg-clip-text text-transparent pb-5">
          {years}
        </h1>
        <Typography.TextItalic>{title}</Typography.TextItalic>
      </div>
      <Typography.Paragraph>{description}</Typography.Paragraph>
    </div>
  );
};

import { forwardRef } from "react";
import { Icons } from "../assets";
import { data } from "../data";
import ContactItem from "./contact/ContactItem";
import { AnimatedRouter, Button, Container } from "./libs";
import { Typography } from "./libs/Typography";
import { motion } from "framer-motion";

export default function Home() {
  const { me, workSummary } = data;

  return (
    <AnimatedRouter>
      <Container>
        <div className="grid grid-cols-2 gap-4 space-x-20 py-[120px]">
          {/* introduce */}
          <div className="col-span-1 flex items-center relative">
            <div className="absolute z-20">
              <h1
                style={{ fontSize: "102px", lineHeight: "90px" }}
                className="pb-6 uppercase"
              >
                <span className="font-light">My name is</span> {me.name}
              </h1>
              <div className="flex space-x-2 leading-6 pb-12">
                <Typography.TextItalic className="!text-2md">
                  {workSummary.summary.name}
                </Typography.TextItalic>
                <span className="text-2md">based in</span>
                <Typography.TextItalic className="!text-2md">
                  {workSummary.summary.workPlace}
                </Typography.TextItalic>
              </div>
              <Button label="Let’s talk with me" icon={<Icons.Arrow />}>
                <a href="../public/MyCV.pdf" download></a>
              </Button>
              <div className="flex space-x-12 pt-14">
                <ContactItem icon={<Icons.Phone />} title="0395067721" />
                <ContactItem
                  icon={<Icons.Mail />}
                  title="mainguyency@gmail.com"
                />
              </div>
            </div>
            <PartCircle />
          </div>
          {/* contact and summary */}
          <div className="col-span-1 flex items-center">
            <Icons.Avatar2 />
          </div>
        </div>
      </Container>
    </AnimatedRouter>
  );
}

const PartCircle = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "-43px",
        left: "-249px",
        transform: "rotate(-30.065deg)",
      }}
    >
      <div
        style={{
          width: "348px",
          height: "348px",
          flexShrink: 0,
          background:
            "linear-gradient(270deg, #FFB147 5.74%, #FF6C63 50.64%, #B86ADF 92.05%)",
          position: "absolute",
          top: "0",
          left: "0",
          borderRadius: "100%",
        }}
      ></div>
      <div
        style={{
          width: "350px",
          height: "350px",
          flexShrink: 0,
          background: "white",
          position: "absolute",
          top: "-42px",
          left: "0",
        }}
      ></div>
    </div>
  );
};

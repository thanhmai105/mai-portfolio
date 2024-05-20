import { useParams } from "react-router-dom";
import { data } from "../../data";
import { Typography } from "../libs/Typography";
import { AnimatedRouter, Badge, Container, Divider, Modal } from "../libs";
import { ProjectItemResponse } from "../../data/model";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function ProjectDetails() {
  const { id } = useParams();
  const { project } = data;
  const [isShowImage, setIsShowImage] = useState<boolean>(false);

  const singleProject = (project.find((item) => item.id === id) ||
    {}) as ProjectItemResponse;

  const formatDate = (date: string) => {
    return date.replaceAll("-", "/").substring(3, date.length);
  };

  return (
    <AnimatedRouter>
      <Container className="py-[120px]">
        <div className="flex justify-between">
          <h2>{singleProject?.name}</h2>
          <Typography.Paragraph>
            {formatDate(singleProject.startDate)} -{" "}
            {formatDate(singleProject.endDate)}
          </Typography.Paragraph>
        </div>
        <Divider className="!h-12" />
        <div className="grid grid-cols-3 space-x-12">
          <div className="col-span-1 space-y-4 ">
            <motion.div
              onClick={() => setIsShowImage(true)}
              className="pointer-events-auto"
            >
              <img
                src={singleProject?.imageUrl}
                alt=""
                className="rounded-lg w-full"
              />
            </motion.div>
            {id === "1" ? (
              <Typography.TextItalic className="text-[0.8rem] font-light text-center text-slate-800">
                Illustration: The same <b> Vietin iplan </b>
              </Typography.TextItalic>
            ) : (
              <Divider className="!h-5" />
            )}
            <div className="space-y-12">
              <div className="space-y-3">
                <Typography.Subtitle className="!text-2md font-semibold">
                  Base information
                </Typography.Subtitle>
                <div className="space-y-1">
                  <TextItem label={"Company"} value={singleProject.company} />
                  <TextItem label={"Client"} value={singleProject.client} />
                  <TextItem label={"Platform"} value={singleProject.platform} />
                  <TextItem
                    label={"Team size"}
                    value={singleProject.teamSize}
                  />
                  <TextItem label={"Role"} value={singleProject.role} />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Typography.Subtitle className="!text-2md font-semibold">
                  Technologies
                </Typography.Subtitle>
                <Typography.Paragraph className="flex flex-wrap gap-4">
                  {singleProject.technologies.map((item) => (
                    <Badge>{item}</Badge>
                  ))}
                </Typography.Paragraph>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-12">
            <div className="space-y-3">
              <Typography.Subtitle className="!text-2md font-semibold">
                Description
              </Typography.Subtitle>
              <Typography.Paragraph>
                {singleProject.description}
              </Typography.Paragraph>
            </div>
            <div className="space-y-3">
              <Typography.Subtitle className="!text-2md font-semibold">
                Responsibilities
              </Typography.Subtitle>
              <div>
                {singleProject.responsibilities.map((item, index) => (
                  <Typography.Paragraph key={index}>
                    {item}
                  </Typography.Paragraph>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <Typography.Subtitle className="!text-2md font-semibold">
                Skill studied
              </Typography.Subtitle>
              <Typography.Paragraph>
                {singleProject?.skillStudied}
              </Typography.Paragraph>
            </div>
          </div>
        </div>
      </Container>

      <Modal
        isOpen={isShowImage}
        children={
          <img
            src={singleProject?.imageUrl}
            alt=""
            className="rounded-lg w-full"
          />
        }
        headerComponent={"Nhu cc"}
      />
    </AnimatedRouter>
  );
}

const TextItem = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) => {
  return (
    <div className={`flex space-x-1 items-start leading-5 ${className}`}>
      <Typography.Paragraph className="font-semibold">
        {label}:
      </Typography.Paragraph>
      <Typography.Paragraph>{value || ""}</Typography.Paragraph>
    </div>
  );
};

const TestRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (inputRef !== null && inputRef?.current) {
      inputRef?.current.focus(); // Thay đổi focus đến input
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click to focus</button>
    </div>
  );
};

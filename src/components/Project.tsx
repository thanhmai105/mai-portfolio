import { forwardRef, useState } from "react";
import { Icons } from "../assets";
import { data } from "../data";
import { Container, Divider, Button, AnimatedRouter } from "./libs";
import { Typography } from "./libs/Typography";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const IMAGE_WIDTH = 315;
const IMAGE_HEIGHT = 248;

export default function Project() {
  const { project } = data;
  return (
    <AnimatedRouter>
      <Container className="py-[120px]">
        <Typography.TextItalic>Project</Typography.TextItalic>
        <Divider className="!h-4" />
        <h1 className="uppercase">Recent project</h1>
        <Divider className="!h-12" />
        <div className="grid grid-cols-2 space-x-12">
          {project.map((item, index) => (
            <Link key={index} to={`${item.id}`}>
              <ProjectItem item={item} />
            </Link>
          ))}
        </div>
        <Divider className="!h-16" />
        <div className="flex flex-col items-center">
          <Button label="Load more" icon={<Icons.Arrow />} />
        </div>
      </Container>
    </AnimatedRouter>
  );
}

const ProjectItem = ({ item }: { item: any }) => {
  const [image, setImage] = useState(null);

  return (
    <div className="grid grid-cols-7 justify-between p-4 space-x-5 rounded-lg transition-all ease-in-out duration-500 hover:shadow-2xl hover:scale-[1.05]">
      <div className="col-span-3">
        <Typography.TextItalic>{item.platform}</Typography.TextItalic>
        <Divider className="!h-4" />
        <h2>{item.name}</h2>
        <Divider className="!h-6" />
        <button className="w-fit block transition ease-in-out duration-300">
          <Icons.ArrowBlack />
        </button>
      </div>

      <div className="col-span-4">
        <div style={{ height: IMAGE_HEIGHT }}>
          <img
            src={item.imageUrl}
            alt=""
            style={{ height: "248px", width: "100%" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

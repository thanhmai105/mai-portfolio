import { forwardRef, useState } from "react";
import { useScreen } from "./hooks/useScreen";
import { Divider } from "./libs";
import { Typography } from "./libs/Typography";
import { data } from "../data";
import { useNavigate } from "react-router-dom";

type NavbarProps = {
  homeRef?: any;
  aboutRef?: any;
  contactRef?: any;
  workRef?: any;
};

export default forwardRef(function Navbar(
  { homeRef, aboutRef, workRef, contactRef }: NavbarProps,
  _
) {
  const { width } = useScreen();
  const { me } = data;
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="bg-black text-white p-10 flex flex-col justify-between"
      style={{ width: width / 6 }}
    >
      <div>
        <h2 className="text-white">{me.shortName}</h2>
        <Divider className="!h-28" />
        <div className={`flex flex-col space-y-4`}>
          <TabItem
            className={activeTab === 0 ? "active" : ""}
            label={"Home"}
            onClick={() => {
              setActiveTab(0);
              navigate("./");
            }}
          />
          <TabItem
            className={activeTab === 1 ? "active" : ""}
            label={"About"}
            onClick={() => {
              setActiveTab(1);
              navigate("about");
            }}
          />
          <TabItem
            className={activeTab === 2 ? "active" : ""}
            label={"Work"}
            onClick={() => {
              setActiveTab(2);
              navigate("project");
            }}
          />
          <TabItem
            className={activeTab === 3 ? "active" : ""}
            label={"Contact"}
            onClick={() => {
              setActiveTab(3);
              navigate("contact");
            }}
          />
        </div>
      </div>
      <Typography.Paragraph className="text-white bottom-10">
        Copyright ©2024 by {me.name}. All right reserved.
      </Typography.Paragraph>
    </div>
  );
});

type TabItemProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const TabItem = ({ label, onClick, className }: TabItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        font-normal relative inline-block w-fit text-[20px] uppercase cursor-pointer transition-all duration-300 after:bg-gradient after:absolute after:h-[2px] after:w-0 after:bottom-[40%] after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:!font-bold ${
          className === "active"
            ? "!font-bold after:!w-full after:!h-[3px] "
            : ""
        }`}
    >
      {label}
    </div>
  );
};

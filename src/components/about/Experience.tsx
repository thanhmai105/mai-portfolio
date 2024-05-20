import { Icons } from "../../assets";
import { data } from "../../data";
import { ExperienceItemResponse } from "../../data/model";
import Button from "../libs/Button";
import Container from "../libs/Container";
import Divider from "../libs/Divider";
import { Typography } from "../libs/Typography";

export default function Experience() {
  const { workSummary } = data;
  return (
    <div className="bg-gradient !text-white py-[120px]">
      <Container>
        <div className="grid grid-cols-3 space-x-20">
          <div className="col-span-1">
            <Typography.TextItalic className="pb-4">
              Experience
            </Typography.TextItalic>
            <h1 className="uppercase pb-6 text-white">My experience</h1>
            <Typography.Paragraph className="pb-12">
              {workSummary.summary.experience.introduction}
            </Typography.Paragraph>
            <Button label="Download my resume" icon={<Icons.Arrow />}></Button>
          </div>
          <div className="col-span-2 space-y-5">
            {workSummary.details.map((item, index) => (
              <div key={index}>
                <ExperienceItem item={item} />
                {index + 1 !== workSummary.details.length && (
                  <Divider className="opacity-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

const REGEX_NUMBER = /\d/;

const ExperienceItem = ({ item }: { item: ExperienceItemResponse & any }) => {
  const formatDate = (date: string) => {
    if (!REGEX_NUMBER.test(date)) {
      return date;
    }
    return date.replaceAll("-", "/").substring(3, date.length);
  };

  return (
    <div className="py-5">
      <div className="flex flex-row justify-between">
        <Typography.TextItalic>
          {formatDate(item.startDate)} - {formatDate(item.endDate)}
        </Typography.TextItalic>
        <Typography.Paragraph className="font-medium">
          - {item.company}
        </Typography.Paragraph>
      </div>
      <Divider className="!h-6 bg-transparent" />
      <h2 className="uppercase text-white">{item.position}</h2>
    </div>
  );
};

import { TextInput } from "./libs/TextInput";
import { Controller, useForm } from "react-hook-form";
import { Icons } from "../assets";
import { Typography } from "./libs/Typography";
import { forwardRef } from "react";
import { Container, Button, TextArea, AnimatedRouter } from "./libs";

export default function Contact() {
  const { control, setValue, watch } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      content: "",
    },
  });

  const { fullName, email, content, subject } = watch();

  return (
    <AnimatedRouter>
      <Container>
        <div className="grid grid-cols-3 gap-4 space-x-20 py-[120px]">
          {/* info contact me */}
          <div className="col-span-1 flex items-center">
            <div>
              <div className="pb-20">
                <Typography.TextItalic className="pb-4">
                  Contact
                </Typography.TextItalic>
                <h1 className="pb-7.5">Reach out me</h1>
                <p>Thuan Thanh, Bac Ninh</p>
                <div className="space-y-4 pt-24">
                  <Typography.Subtitle>0395067721</Typography.Subtitle>
                  <Typography.Subtitle>mainguyen@gmail.com</Typography.Subtitle>
                </div>
              </div>
              {/* info link me */}
              <div className="flex space-x-6">
                <LinkContact url={""} label={"Facebook"} />
                <LinkContact url={""} label={"Twitter"} />
                <LinkContact url={""} label={"Instagram"} />
                <LinkContact url={""} label={"Linkedin"} />
              </div>
            </div>
          </div>
          {/* form contact */}
          <div className="col-span-2 bg-gradient px-2xl py-xl space-y-8">
            <h2 className="text-white uppercase">Any message ?</h2>
            <div className="flex flex-col space-y-8">
              <div className="flex flex-row space-x-8">
                <Controller
                  control={control}
                  name={"fullName"}
                  render={({ fieldState, field, formState }) => (
                    <TextInput
                      type={"text"}
                      placeholder="Full name"
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={"email"}
                  render={({ fieldState, field, formState }) => (
                    <TextInput type={"email"} placeholder="Mail" {...field} />
                  )}
                />
              </div>

              <Controller
                control={control}
                name={"subject"}
                render={({ fieldState, field, formState }) => (
                  <TextInput type={"text"} placeholder="Subject" {...field} />
                )}
              />
              <Controller
                control={control}
                name={"content"}
                render={({ fieldState, field, formState }) => (
                  <TextArea
                    type={"text"}
                    placeholder="Content"
                    {...field}
                    rows={5}
                  />
                )}
              />
            </div>
            <Button label="Submit now" icon={<Icons.Arrow />} />
          </div>
        </div>
      </Container>
    </AnimatedRouter>
  );
}

type LinkContactProps = {
  url: string;
  label: string;
};

const LinkContact = ({ url, label }: LinkContactProps) => {
  return (
    <a
      href={url}
      className="hover:bg-gradient hover:!bg-clip-text hover:text-transparent hover:transition "
    >
      <Typography.Paragraph className="uppercase">{label}</Typography.Paragraph>
    </a>
  );
};

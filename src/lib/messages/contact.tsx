import { EmailIcon, GitHubIcon } from "@/components/common/Icons";

export interface ContactInfo {
  key: string;
  value: string;
  link: string;
  icon: React.ReactNode;
}

export const contactInfo = [
  {
    value: "haileydeveloper@gmail.com",
    link: "mailto:haileydeveloper@gmail.com",
    icon: <EmailIcon />,
    key: "email",
  },
  {
    value: "github.com/thisishailey",
    link: "https://github.com/thisishailey",
    icon: <GitHubIcon />,
    key: "github",
  },
];

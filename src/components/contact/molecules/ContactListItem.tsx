import type { ContactInfo } from "@/lib/messages/contact";
import { CursorToNormal, CursorToPointer } from "@/components/common/Cursor";

interface Props {
  contact: ContactInfo;
  title: string;
}

export default function ContactListItem({ contact, title }: Props) {
  return (
    <li className="flex items-center gap-3 px-4">
      <div className="flex items-center gap-3 w-14 sm:w-40">
        <div>{contact.icon}</div>
        <div className="hidden sm:block font-medium">{title}</div>
      </div>
      <a
        href={contact.link}
        target="_blank"
        rel="noreferrer noopener"
        onMouseOver={CursorToPointer}
        onMouseLeave={CursorToNormal}
      >
        <div>{contact.value}</div>
      </a>
    </li>
  );
}

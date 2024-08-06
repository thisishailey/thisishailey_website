import { useTranslations } from "next-intl";
import { contactInfo } from "@/lib/messages/contact";
import ContactListItem from "@/components/contact/molecules/ContactListItem";

export default function ContactList() {
  const t = useTranslations("Contact");

  return (
    <ul className="self-center flex flex-col gap-6 sm:gap-10 py-3 text-lg xs:text-xl sm:text-2xl">
      {contactInfo.map((contact) => (
        <ContactListItem
          key={contact.key}
          contact={contact}
          title={t(contact.key).toUpperCase()}
        />
      ))}
    </ul>
  );
}

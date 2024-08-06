import type { Wiki } from "@/lib/firebase/wiki";
import { formatDate } from "@/lib/utils";

interface Props {
  item: Wiki;
}

export default function WikiListItem({ item }: Props) {
  return (
    <div
      key={item.id}
      className="space-y-6 pb-6 border-b last:border-0 border-neutral-500"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium">{`[${item.tag}] ${item.title}`}</h4>
        <span className="text-sm">{formatDate(item.createdDate.toDate())}</span>
      </div>
      <p
        className="w-full break-all whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
    </div>
  );
}

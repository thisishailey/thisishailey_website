import type { Wiki } from "@/lib/firebase/wiki";
import { formatDate } from "@/lib/utils";

interface Props {
  item: Wiki;
}

export default function WikiListItem({ item }: Props) {
  return (
    <div
      key={item.id}
      className="space-y-6 p-6 rounded-xl shadow-inner shadow-theme/50 border border-theme/20 hover:ring-1 ring-theme transition duration-300"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium">{`[${item.tag}] ${item.title}`}</h4>
        <span className="text-sm">{formatDate(item.createdDate.toDate())}</span>
      </div>
      <p
        className="w-full overflow-x-auto underline-offset-2"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
    </div>
  );
}

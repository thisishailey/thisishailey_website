import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase/config";

export default async function storeMessage(name: string, content: string) {
  let result: string | null = null,
    error: Error | null = null;

  try {
    await addDoc(collection(firestore, "message"), {
      name,
      content,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    error = e as Error;
  }

  if (!error) {
    result = "successfully stored";
  }

  return { result, error };
}

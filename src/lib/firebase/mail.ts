import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase/config";

export default async function sendEmail(name: string, content: string) {
  let result: string | null = null,
    error: Error | null = null;

  try {
    await addDoc(collection(firestore, "mail"), {
      to: ["haileydeveloper@gmail.com"],
      message: {
        subject: `Visitor "${name}" sent you a message from thisishailey.com`,
        text: content,
      },
    });
  } catch (e) {
    error = e as Error;
  }

  if (!error) {
    result = "successfully sent";
  }

  return { result, error };
}

import { cache } from "react";
import {
  type DocumentData,
  type Timestamp,
  collection,
  getDocs,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase/config";

export interface Wiki {
  id: string;
  tag: string;
  title: string;
  content: string;
  createdDate: Timestamp;
}

export const getWikis = cache(async () => {
  let result: Wiki[] = [],
    error: string | null = null;

  const querySnapshot = await getDocs(collection(firestore, "wiki"));

  if (querySnapshot.empty) {
    error = "requested data does not exist";
  } else {
    querySnapshot.forEach((doc) =>
      result.push({ ...doc.data(), id: doc.id } as Wiki)
    );
  }

  return { result, error };
});

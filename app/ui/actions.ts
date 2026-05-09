import { refresh, revalidatePath, revalidateTag, updateTag } from "next/cache";

export async function create(formData: FormData) {
  "use server";
  // await fetch(`https://api.vercel.app/blog`, {
  //   body: formData,
  //   method: "post",
  // });
  revalidatePath("/dashboard");
  // refresh();
  // revalidatePath("/isr");
  // updateTag("bro");
  // revalidateTag("bro", "max");
  return {};
}

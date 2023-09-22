"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics`, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      const lastId = result.id;
      router.refresh();
      router.push(`/read/${lastId}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea
          name="body"
          id=""
          cols={30}
          rows={10}
          placeholder="body"
        ></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}

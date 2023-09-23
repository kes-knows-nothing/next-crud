"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const title1: string = e.currentTarget.title1.value;
    const body: string = e.currentTarget.body.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title1, body }),
    };
    fetch("http://localhost:9999/topics", options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const lastid = result.id;
        router.push(`/read/${lastid}`);
      });
  };

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch("http://localhost:9999/topics", options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.refresh();
            router.push(`/read/${lastid}`);
          });
      }}
    >
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

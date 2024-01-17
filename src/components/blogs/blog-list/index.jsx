"use client";

import SingleBlog from "../single-blog";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogList({ lists }) {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  async function handleDelete(id) {
    console.log(id);

    const res = await fetch(`/api/blog-post/delete-post?id=${id}`, {
      method: "DELETE",
      cache: "no-store",
    });

    const data = await res.json();

    if (data && data.success) router.refresh();
  }

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 grid grid-cols-3 gap-2">
          {lists && lists.length
            ? lists.map((listItem) => (
                <div className="px-4" key={listItem.id}>
                  <SingleBlog handleDelete={handleDelete} blogItem={listItem} />
                  
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
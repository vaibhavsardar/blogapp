import BlogDetailsHome from "@/components/blogs/blog-details";



async function extractBlogDetails(id) {
  const res = await fetch(
    `https://blogapp-two-gamma.vercel.app/api/blog-post/blog-details`,
    {
      method: "GET",
      next : {
        revalidate : 0
      }
    }
  );

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function BlogDetails({ params }) {
  const { id } = params;
    console.log("blog id ", id);


  const blogData = await extractBlogDetails(id);
  console.log("blog data ", blogData);
  return <BlogDetailsHome blogData={blogData} />;
}

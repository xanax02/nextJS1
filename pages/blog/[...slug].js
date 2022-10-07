import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>This is dynamic catch all route page</h1>;
};

export default BlogDetail;

import { useRouter } from "next/router";

const AboutPageItems = () => {
  const router = useRouter();

  return <h1>This is Page {router.query.id}</h1>;
};

export default AboutPageItems;

import { useRouter } from "next/router";

const SpecificClient = () => {
  const router = useRouter();
  return <h1>This is the Page of Client having id: {router.query.id}</h1>;
};

export default SpecificClient;

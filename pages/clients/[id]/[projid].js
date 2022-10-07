import { useRouter } from "next/router";

const ClientProject = () => {
  const router = useRouter();

  return (
    <h1>
      This is project: {router.query.projid} of Client: {router.query.id}
    </h1>
  );
};

export default ClientProject;

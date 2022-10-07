import { useRouter } from "next/router";

const SpecificClient = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const loadHandler = () => {
    router.push("/clients/abhay/prject-a");
  };

  return (
    <>
      <h1>This is the Page of Client having id: {router.query.id}</h1>
      <button onClick={loadHandler}>Load project A</button>
    </>
  );
};

export default SpecificClient;

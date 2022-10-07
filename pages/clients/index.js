import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "abh", name: "abhay" },
    { id: "th", name: "thakur" },
  ];

  return (
    <>
      <h1>This is the clients page</h1>
      {clients.map((client) => {
        return (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default ClientPage;

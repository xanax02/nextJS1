const UserIdPage = (props) => {
  return <h1>{props.user}</h1>;
};

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: { user: `userId-${userId}` },
  };
  // in GSSP we dont need GSSPaths as all the dynamic pages are render on servers at the time of request.
}

// there are some pages which we dont want to pre-render on build time
// for eg this userProfile page as this is different for every user and it depends upon the cookies;
// for this we use getServerSideProps which is used to pre-render the page on server on every request.
// this is for proper server side pre-rendering other two (getStaticProps, getStaticPaths) are for static page generation during build
// time.

const UserProfilePage = (props) => {
  // props are provided by getServerSideProps

  return <h1>{props.userName}</h1>;
};

export async function getServerSideProps(context) {
  // SSR context will have params and also objects of requests i.e. req,res.

  const { params, req, res } = context;
  console.log(params);
  console.log(req);
  console.log(res);

  return {
    props: {
      userName: "abhay",
    },
  };
}

export default UserProfilePage;

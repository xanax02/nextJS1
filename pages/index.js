const HomePage = (props) => {
  const { Products } = props;

  return (
    <div>
      {Products.map((item) => {
        return <li>{item.title}</li>;
      })}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      Products: [{ prodId: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;

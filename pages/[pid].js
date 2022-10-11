// prerendering this product detail page for the product of specific id
import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>; // For the fallback when set to true, till the time data arrives...
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

// only getStaticProps will give error for this page when pre-rendering
// as nextJS doesnot know how many pages is to be pre-rendered
// so with this we have to use getStaticPath function too.
export async function getStaticProps(context) {
  // context => object having value of dynamic segments (url/path).

  const { params } = context; //{params} -> (one of the key of context) having keys which are identifiers of dynamic path
  const productId = params.pid;

  const prodPath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(prodPath);
  const data = JSON.parse(jsonData);

  const prodData = data.products.find((item) => item.id === productId);

  if (!prodData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: prodData,
    },
  };
}

// getStaticPath function :
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      //   { params: { pid: "p2" } },
      //   { params: { pid: "p3" } },

      // if we dont want to pre-render last 2 items page on buils time, but only on request time
      // set fallBack to :
      // ->when set to true it has been handled in Functional COmponent of the page.
      // -> when set to "blocking" it is handling everything on its own by only loading page when data is available.
    ],
    fallback: true,
  };
  //getStaticPath will return object having:
  // ->path => array of objects having dynamic routers as a key
  // -> fallback => boolean this is used when we dont want to pre-render all the pages and render then only just in-time
  //                i.e render the page when only request is send for it on the server
  //                -> true is for the above but for the time when data is not avialable we have to handle this manully
  //                -> "blocking" on the other hand hanles everything on its own.
}

export default ProductDetailPage;

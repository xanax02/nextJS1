import fs from "fs/promises"; // all imports which are used in getStaticProps will not be provided
import path from "path"; // for the client side rendered page

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
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  console.log("revalidated");
  // path module is use for building paths
  //  process.cwd() => this method will give the current woking directory of this code file when its executed.
  // current directory will not be the pages folder as:
  // when nextJS executes the file it treats all the files as they are in root folder
  // so the current working directory is the overall folder ie (next-course) here.
  // other arguments are the folder and file from which the data is to be read.

  const jsonData = await fs.readFile(filePath);
  // Here fs.readfile will return a promise (new version of readfile from fs/promises)
  // and it will take path from which the data should be read

  const data = JSON.parse(jsonData);

  return {
    props: {
      Products: data.products,
    },
    revalidate: 10,
  };
}
// getStaticProps will run on server and pre-renders the page, it is partially true as it runs when the whole project is build for deployement
// so if the data changes in the server(dummy-backend.json) here getStatic props will not run again it the static page will only have the
// outdated data. To Avoid this there are two options:
//    ->show the pre-rendered page with outdated data and after that with useEffect request to server for new data
//    -> use of INCREMETAL_STATIC_GENERATION.
//        =>here we return a {revalidate} property in getStaticProps function.
//          => this will always re-render the page on server when the request to page made is after the certain time span given eg(10sec).

export default HomePage;

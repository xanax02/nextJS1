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
  };
}

export default HomePage;

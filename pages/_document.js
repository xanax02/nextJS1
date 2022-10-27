// for customizing entire html document.
// all the element that make html doc.

// it is a class based component as it has to extends some of the next js components
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    // ///////this is the default structure of nextjs html doc.
    // return (
    //     <Html>
    //         <Head />
    //         <body>
    //             <Main />
    //             <NextScript />
    //         </body>
    //     </Html>
    // )
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlay"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

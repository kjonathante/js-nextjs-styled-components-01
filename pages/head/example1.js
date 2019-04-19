import Head from "next/head";

// function IndexPage() {
//   return (
//     <div>
//       <Head>
//         <title>My page title</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <p>Hello world!</p>
//     </div>
//   );
// }

// export default IndexPage;

export default () => (
  <div>
    <Head>
      <title>This page has a title 🤔</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <h1>This page has a title 🤔</h1>
  </div>
);

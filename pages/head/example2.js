import Head from "next/head";

/*
To avoid duplicate tags in your <head> 
you can use the key property, which will 
make sure the tag is only rendered once:

In this case only the second 
<meta name="viewport" /> is rendered.
*/
function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.2, width=device-width"
          key="viewport"
        />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}

export default IndexPage;

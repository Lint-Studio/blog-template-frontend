import MarkdownIt from "markdown-it/lib";

function PostPage({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);
  return (
    <article>
      <header>
        <h1>{post.attributes.title}</h1>
        <h2>{post.attributes.description}</h2>
      </header>
      <section dangerouslySetInnerHTML={{__html:htmlContent}}></section>
    </article>
  );
}

export default PostPage;

export async function getStaticProps({ params }) {
  let response = await fetch(`http://localhost:1337/api/posts/${params.id}`);
  let data_array = await response.json();

  return {
    props: {
      post: data_array.data,
    },
  };
}

export async function getStaticPaths() {
  let response = await fetch("http://localhost:1337/api/posts/");
  let data_array = await response.json();

  const paths = data_array.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

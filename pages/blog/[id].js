import Link from "next/link"

function Post(post) {
  return (
    <>
    <h1>posts</h1>
    <Link href='/blog'>
      <a>Retour</a>
      </Link>
    <hr />
    <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const res = await fetch(URL)
  const posts = await res.json()
  const paths = posts.map(p => ({ params: {id: p.id.toString()}}))

 return {
  paths,
  fallback:false
 }

}

export async function getStaticProps ({params}) {
  const URL = 'https://jsonplaceholder.typicode.com/posts/' + params.id;
 const res = await fetch(URL)
 const post = await res.json()
 return {
   props: {post}
 }
}

import Link from "next/link";

function blog({posts}) {

  return (
    <>
    <h1>blog</h1>
   {
    posts?.map(p =>   (
    <Link href={"/blog/" + p.id} key={p.id} >

        <a><h5>{p.title}</h5></a>
    </Link>
         
            ))}

    <hr />
   
    </>
  )
}

export default blog
 //creer sur le serveur
export async function getStaticProps () {
   const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
   const res = await fetch(URL)
   const posts = await res.json()
   return {
     props: {posts}
   }
}
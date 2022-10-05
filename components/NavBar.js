import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"
import { UserContext } from "../Contexts/UserContext"

function NavBar() {
  const {user, setUser} = useContext(UserContext)
  const router = useRouter()
  const quitter = () => {
    setUser(null)
  }

  return (
    <nav>
      <Link href='/'><a className={router.pathname === '/' ? 'active' : ''}>Home</a></Link>
      <Link href='/contact'><a className={router.pathname === '/contact' ? 'active' : ''}>Contact</a></Link>
      <Link href='blog/articles'><a className={router.pathname === '/blog/articles' ? 'active' : ''}>Articles</a></Link>
     {user && <Link href='/dashboard'><a className={router.pathname === '/dashboard' ? 'active' : ''}>DashBoard</a></Link>}
      {!user &&   <Link href='/user/auth'>
        <a className={router.pathname === '/user/auth' ? 'active' : ''}>Connectez vous</a>
        </Link>}
        {user && <button onClick={quitter}>Bonjour <strong>{user}</strong> . Deconnecter-vous</button>}
     </nav>
  )
}

export default NavBar
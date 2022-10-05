import { UserContext } from "../Contexts/UserContext"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { useState } from "react";

function MyLayout({children}) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="container">
          <header>Site header</header>
          <NavBar/>
          {children}
          <Footer/>
       </div>
    </UserContext.Provider>
    )

}

export default MyLayout
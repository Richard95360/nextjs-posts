import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

function Auth() {

    const [userName, setUserName] = useState('');

    const {setUser} = useContext(UserContext)

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userName){
         setUser(userName)
         console.log(router)
         router.push('/')
        }
            
    }

    const handleChange = (e) => {
        setUserName(e.target.value)
    }

    return ( 
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={userName}  onChange={handleChange} />
            <button>Enter</button>
            
        </form>
        </>
     );
}

export default Auth;
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function Dashboard() {
    const {user} = useContext(UserContext)
    return ( 
        <>
       
        {user &&  <h1>DashBoard</h1>}
        {!user &&  <h1>Vous devez avoir un compte pour accerder à DasBorad</h1>}
        </>
     );
}

export default Dashboard;
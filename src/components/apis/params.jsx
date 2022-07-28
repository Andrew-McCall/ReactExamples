import { useNavigate , useParams } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();
    const { id  } = useParams();
    
    const nextUrl = parseInt(id)+3

    const click = (e) =>{
        navigate(`/users/${nextUrl}`)
    } 

    if (nextUrl<100){
        return(
            <>
                <h1>Page3</h1>
                <h3>{id}</h3>
                <button type="button" onClick={click}> Checkout {nextUrl} </button>
                {nextUrl%2 == 0 && <p>Even</p>}
            </>
        )
    }else{
        return(<p>"Error"</p>)
    }
    

}

export default Users
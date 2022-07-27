import { useNavigate , useParams } from "react-router-dom";

const PageThree = () => {
    const navigate = useNavigate();
    const { id  } = useParams();
    
    const nextUrl = parseInt(id)+263

    const click = (e) =>{
        navigate(`/page3/${nextUrl}`)
    } 

    return(
        <>
            <h1>Page3</h1>
            <h3>{id}</h3>
            <button type="button" onClick={click}> Checkout {nextUrl} </button>
        </>
    )

}

export default PageThree
import { useEffect, useState } from "react"
import getStats from "../../data/api"
import ShowStats from "./showStats"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "./statspage.css"

const StatsPage = () =>{

    const [username,setUsername] = useState("")
    const [accountType,setaccountType] = useState("")
    const [data,setData] = useState({})
    const [btnState,setBtnState] = useState(false)
    const [error,setError] = useState({"msg":"","err":false})
    useEffect(() => {
        
    }, [data])
    
    const loadDataHandler = async()=>{
        if(username.length>0){
            const stats = await getStats(username,accountType)

            if(Object.keys(stats).length === 0){
                errorAlert("Ups!! No se encontro el usuario que buscas")
                setData({})
            }else{
                console.log(stats)
            if (Object.keys(stats).length === 0) {
                setData({})
            }else{
                setData(stats)   
            }
            }
            
        }else{
            errorAlert("Ups!! no ingresaste un usuario")
        }
    }

    const errorAlert = (msg) =>{

        setError({msg,"err":true})

        setTimeout(()=>{
            setError({"msg":"","err":false})
        },6000)
    }
    
    return (
        <>
            
            <div className="container  mt-5">
                <div className="mt-1 d-grid gap-2" >
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target ={`#searchForm`} onClick={()=>{setBtnState(!btnState)}}>{btnState?"OCULTAR":"BUSCAR"}</button>
                    </div>

                    <div className="collapse" id="searchForm">
                        <div className="card card-body">
                            <form className="form-control needs-validation" noValidate>
                                <div className="mb-3">
                                <label className="form-label">Plataforma</label>
                                    <select className="form-select" onChange={(e)=>{setaccountType(e.target.value)}}>
                                        <option value = "epic">EPIC</option>
                                        <option value = "psn">PSN</option>
                                        <option value = "xbl">XBOX</option>
                                    </select>
                                </div>

                                <div className="mb-3 has-validation">
                                    <label for="username" className="form-label">Nombre de Usuario</label>
                                    <input type="text" className="form-control" id="username" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="NOMBRE DE USUARIO" required/>

                                </div>



                                <div className="mb-3">
                                    <input className="btn btn-primary btn" type="button" value="BUSCAR" onClick={(e)=>{loadDataHandler(e)}}></input>
                                </div>
                            </form>
                            
                        </div>
                </div>
                <SwitchTransition>
                    <CSSTransition 
                        classNames="fade"
                        key={error.err?error.msg:""}
                        addEndListener={(node,done)=>{node.addEventListener("transitionend",done,false)}}
                        >
                        <div className="">
                        {
                                error.err && <div class="alert alert-danger mt-3" role="alert">
                                 {error.msg}
                                </div>
                            }
                        </div>
                    </CSSTransition>
                </SwitchTransition>   
                <section>
                                    
                {Object.keys(data).length===0?"":<ShowStats data={data}/>}  

                           
                </section>
                            
                
                
            </div>
            
        </>
        
    )
}

export default StatsPage
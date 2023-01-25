import { useEffect, useState } from "react"
import getStats from "../../data/api"
import ShowStats from "./showStats"
const StatsPage = () =>{

    const [username,setUsername] = useState("")
    const [accountType,setaccountType] = useState("")
    const [data,setData] = useState({})
    const [btnState,setBtnState] = useState(false)
    useEffect(() => {
        
    }, [data])
    
    const loadDataHandler = async()=>{
        const stats = await getStats(username,accountType)
        if (Object.keys(stats).length === 0) {
            setData({})
        }else{setData(stats)}
    }
    
    return (
        <>
            
            <div className="container  mt-5">
                <div className="mt-1 d-grid gap-2" >
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target ={`#searchForm`} onClick={()=>{setBtnState(!btnState)}}>{btnState?"OCULTAR":"BUSCAR"}</button>
                    </div>

                    <div className="collapse" id="searchForm">
                        <div className="card card-body">
                            <form className="form-control">
                                <div className="mb-3">
                                <label className="form-label">Plataforma</label>
                                    <select className="form-select" onChange={(e)=>{setaccountType(e.target.value)}}>
                                        <option value = "epic">EPIC</option>
                                        <option value = "psn">PSN</option>
                                        <option value = "xbl">XBOX</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Nombre de Usuario</label>
                                    <input type="text" className="form-control" id="username" onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="NOMBRE DE USUARIO"/>
                                </div>



                                <div className="mb-3">
                                    <input className="btn btn-primary btn" type="button" value="BUSCAR" onClick={(e)=>{loadDataHandler(e)}}></input>
                                </div>
                            </form>
                        </div>
                </div>
                <section>
                    
                        
                    
                </section>
                {Object.keys(data).length===0?"":<ShowStats data={data}/>}
            </div>
            
        </>
        
    )
}

export default StatsPage
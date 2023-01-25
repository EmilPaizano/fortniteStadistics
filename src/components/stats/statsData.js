
const StatsData = ({dataStats,typeControl}) =>{


    const showStadistics = (itemStats) =>{

        if(itemStats != null){
            const items = Object.keys(itemStats)
            const result = items.map((item,index)=>{
                return(
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-6">{item}</div>
                            <div className="col-6">{itemStats[item]}</div>
                        </div>
                    </li>
                )
            })

            return(<>
                <ul className="list-group">
                    {result}
                </ul>
            </>)
        }else return(<></>)

    }

    const showAllStats = () =>{
        if(dataStats){
            const data = Object.keys(dataStats)
        const result = data.map((item,index)=>{
            
            return(<>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link text-dark ${index==0?"active":""}`} id="home-tab" data-bs-toggle="tab" data-bs-target={`#${typeControl}-${index}`} type="button" role="tab" aria-controls="home-tab-pane" aria-selected={index==0?"true":"false"}>{item}</button>
                </li>
            </>)
        })
            return result
        }else return(<></>)
    }

    const showDataStats = () =>{
        if(dataStats){
            const data = Object.keys(dataStats)
            const result = data.map((item,index)=>{
                
                return(<>
                    <div className={`tab-pane fade show ${index==0?"active":""}`} id={`${typeControl}-${index}`} role="tabpanel" aria-labelledby="home-tab" >
                        {showStadistics(dataStats[item])}
                    </div>
                </>)
            })
            return result
        }else return (<></>)
    }

    

    return(
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {showAllStats()}
            </ul>

            <div className="tab-content" id="myTabContent">
                {showDataStats()}
            </div>
        </>
    )
}

export default StatsData
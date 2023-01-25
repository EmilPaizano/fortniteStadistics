import StatsData from "./statsData"

const ShowStats = ({data}) =>{

    const stats = Object.keys(data.data.stats)

    const optionsStats = () =>{
        const result = stats.map((item,index)=>{
            const dataStats = data.data.stats[item]
            return(
                <>
                    <div className="mt-1 d-grid gap-2" key={`btn${index}`}>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${item}`}>{item}</button>
                    </div>

                    <div className="collapse" key={`dat${index}`} id={item}>
                        <div className="card card-body">
                            <StatsData dataStats={dataStats} typeControl={item}/>
                        </div>
                    </div>
                </>
            )
        })
        return result
    }

    const showControlTypes = () =>{
        console.log(stats)
        const result = stats.map((item,index)=>{
            
            return(
                <li className="nav-item" role="presentation">
                    <button className={`text-dark nav-link ${index==0?"active":""}`} id="home-tab" data-bs-toggle="tab" data-bs-target={`#${item}-${index}`} type="button" role="tab" aria-controls="home-tab-pane" aria-selected={index==0?"true":"false"}>{item}</button>
                </li>
            )
        })
        return result
    }

    const showDataControlTypes = () =>{
        
        const result = stats.map((item,index)=>{
            const dataStats = data.data.stats[item]
            return(
                <div className={`tab-pane fade show ${index==0?"active":""}`} id={`${item}-${index}`} role="tabpanel" aria-labelledby="home-tab" >
                        <StatsData dataStats={dataStats} typeControl={item}/>
                    </div>
            )
        })
        return result
    }

    

    return(
        <section className="mt-3">

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {showControlTypes()}
            </ul>

            <div className="mt-2 tab-content" id="myTabContent">
                {showDataControlTypes()}
            </div>
            

        </section>
    )
}

export default ShowStats;
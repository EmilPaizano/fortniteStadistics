import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
const getStats = async(name,accountType)=>{
    let data
    const request = await axios.get(
        "https://fortnite-api.com/v2/stats/br/v2/",{
            headers:{
                "Authorization":API_KEY
            },
            params:{
                "name":name,
                "accountType":accountType
            }
        }
    ).then((res)=>{
        data = res.data
    }).catch((err)=>{
        console.log(err)
        data = {}
    })
    return data

}

export default getStats;
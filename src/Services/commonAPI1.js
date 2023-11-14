import axios from "axios"
import { json } from "react-router-dom"

export const commonAPI= async (httpmethod,url,reqBody)=>{
    let reqConfig={
        method:httpmethod,
        url,
        data:reqBody,
        Headers:{
        "Content-Type":"application/json"
        }

    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}
/* here we create a common api for all http request */
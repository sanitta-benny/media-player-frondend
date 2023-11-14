
import Category from "../Pages/Comonents/Category";
import { commonAPI } from "./commonAPI1";
import { serverURL } from "./serverURL";
//api to upload video
export const uploadAllVideo = async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/video`,reqBody) //here reqbody means the contents of add component 
}

//api to get all video 
export const getAllVideos = async()=>{
    return await commonAPI("GET",`${serverURL}/video`,"")
}

/* api to delete a video */

export const deleteVidoes = async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/video/${id}`,{}) /* we pase {} becase here we pass object not string so replace string with 
    {}*/

    
}
//add watch history

export const addToWatch= async (videoDetails)=>{
    return await commonAPI('POST',`http://localhost:5000/History`,videoDetails)
 }
 /* to get the data from history */
 export const getAllHistory= async()=>{
    return await commonAPI(`GET` ,`${serverURL}/history`,"")
 }
 /* api to add category */
  export const addCategorey = async(Body)=>{
    return await commonAPI(`POST`,`${serverURL}/category`,Body)
  }
  /* api to delete history */
 
  export const deleteHistory = async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
  }

  /* api to get all category */
  export const getAllcategory= async()=>{
    return await commonAPI(`GET` ,`${serverURL}/category`,"")
  }
/* api to delete categorey */

export const deleteCategory= async(id)=>{
  return await commonAPI(`DELETE` ,`${serverURL}/category/${id}`,{})
}
/* api to get a video */
export const getVideo= async(id)=>{
  return await commonAPI(`GET` ,`${serverURL}/video/${id}`,"")
}
//api call to update the categorey

export const updateCategorey = async(id,body)=>{
  return await commonAPI(`PUT`,`${serverURL}/Category/${id}`,body)
}

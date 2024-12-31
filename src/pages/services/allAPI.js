

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// saveVedioAPI-POST gttp request, add compontent


export const saveVedioAPI= async (videoDetails)=>{
  return  await commonAPI(`POST`,`${SERVERURL}/uploadVideos`, videoDetails)
}

//getAllVideoAPI -get method, called  view compontent whwn component displays in browser inside  its uswEeffect Hook
export const getAllVideoAPI= async ()=>{
  return  await commonAPI(`GET`,`${SERVERURL}/uploadVideos`,"")
}

//saveHistoryAPI -post http method to http://localhost:3000/history called by vediocard when weclicked on video
export const saveHistoryAPI =async(historyDetails) =>{
  return await commonAPI(`POST`,`${SERVERURL}/history`,historyDetails)
}
//getAllHistoryAPI -get http request to http://localhost:3000/history called by history compontent,when is open to brower, inside its useEffect

export const getAllHistoryAPI =async () =>{
  return await commonAPI(`GET`,`${SERVERURL}/history`,"")
}

//deleteHistoryAPI - delect method to http://localhost:3000/history/id called by history when clicked on delect button
export const deleteHistoryAPI=async(id)=>{
  return await commonAPI(`DELETE`,`${SERVERURL}/history/${id}`,{})
}
// videoDelectAPI -delect method to http://localhost:3000/uploadVideos/id called by videoCard when clicked on delect button
export const videoDelectAPI=async(id)=>{
  return await commonAPI(`DELETE`,`${SERVERURL}/uploadVideos/${id}`,{})
}
//saveCategoryAPI - POST requst http://localhost:3000/catagory called by catagrory on add button
// catagoryDetalis ={catagoryName,allVideos}
export const saveCategoryAPI =async(catagoryDatails)=>{
  return await commonAPI(`POST`,`${SERVERURL}/category`, catagoryDatails)

}
//getAllCatagoryAPI - get method http://localhost:3000/catagory called catgory compontent ,when componteds loaded in browser
export const getAllCatagoryAPI  =async()=>{
  return await commonAPI(`GET`,`${SERVERURL}/category`,{})

}
//deleteCatagoryAPI - delect method to http://localhost:3000/catagory/id called by catagory when clicked on delect button
export const deleteCatagoryAPI=async(id)=>{
  return await commonAPI(`DELETE`,`${SERVERURL}/category/${id}`,{})
}
// // update category - PUT http method http://localhost:3000/categories/id called by categories component whwn the veideo metod over the cartegory
export const updateCatagoryAPI =async (catagoryDatails)=>{
  return await commonAPI(`PUT`,`${SERVERURL}/category/${catagoryDatails.id}`,catagoryDatails)
}


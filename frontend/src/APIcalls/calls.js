import { axiosInstance } from ".";

export const performRecoPred = async(payload)=>{
  try {
    const response = await axiosInstance.post('/recommend',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}

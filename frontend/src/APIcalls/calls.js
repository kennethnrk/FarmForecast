import { axiosInstance } from ".";

export const performRecoPred = async(payload)=>{
  try {
    const response = await axiosInstance.post('/recommend',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}
export const performPredOnly = async(payload)=>{
  try {
    const response = await axiosInstance.post('/predict',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}

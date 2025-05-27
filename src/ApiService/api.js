import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getAllProducts = async () => {
    try{
        const response=await axios.get(`${BASE_URL}`) 
        return response.data;

    }catch(e){
        console.error(e)
    }
};

export const getProductId=async(id)=>{
    const response=await axios.get(`${BASE_URL}/${id}`) 

    return response.data
}


export const getProductsImage=async(id)=>{
    const response=await axios.get(`${BASE_URL}/${id}/image`) 

    return response.data
}


//////
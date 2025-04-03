const pathUrl_product = `http://localhost:8080/api/product`

export const getAllProduct = async () => {
    const res = await fetch(`${pathUrl_product}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const result = await res.json()
    return result
}
export const getProductById = async (id: number | string) => {
    const res = await fetch(`${pathUrl_product}/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const result = await res.json()
    return result
}

export const createProduct = async (data: any) => {
    const res =await fetch(`${pathUrl_product}`,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    if(!res.ok){
        throw new Error(result.messsage)
    }
    return result
}

export const updateProductById = async (id:number|string,data: any) => {
    const res =await fetch(`${pathUrl_product}/${id}`,{
        method: 'PUT',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    if(!res.ok){
        throw new Error(result.messsage)
    }
    return result
}

export const deleteUserById = async (id:number|string) => {
    const res =await fetch(`${pathUrl_product}/${id}`,{
        method: 'DELETE',
        headers:{
            "Content-Type": "application/json"
        },
    })
    const result = await res.json()
    if(!res.ok){
        throw new Error(result.messsage)
    }
    return result
}

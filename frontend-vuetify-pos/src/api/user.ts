const pathUrl_user = `http://localhost:8080/api/user`


export const getAllEmployees = async () => {
    const res = await fetch(`${pathUrl_user}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const result = await res.json()
    return result
}
export const getEmployeesById = async (id: number | string) => {
    const res = await fetch(`${pathUrl_user}/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const result = await res.json()
    return result
}

export const createEmployee = async (data: any) => {
    const res =await fetch(`${pathUrl_user}`,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    return result
}

export const updateEmployeeById = async (id:number|string,data: any) => {
    const res =await fetch(`${pathUrl_user}/${id}`,{
        method: 'PUT',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    return result
}

export const deleteEmployeeById = async (id:number|string) => {
    const res =await fetch(`${pathUrl_user}/${id}`,{
        method: 'DELETE',
        headers:{
            "Content-Type": "application/json"
        },
    })
    const result = await res.json()
    return result
}
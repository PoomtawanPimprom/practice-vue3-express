const pathUrl = `http://localhost:8080/api/user`


export const getAlluser = async () => {
    const res = await fetch(`${pathUrl}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data
}

export const createUser = async (data: any) => {
    const res = await fetch(`${pathUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(res.toString());
    const result = await res.json();
    return result
}

export const updateUserById = async (id: number | string, data: any) => {
    const res = await fetch(`${pathUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(res.toString())
    const result = await res.json();
    return result
}

export const deleteUserById = async (id: number | string) => {
    const res = await fetch(`${pathUrl}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!res.ok) throw new Error(res.toString())
    const result = await res.json();
    return result
}
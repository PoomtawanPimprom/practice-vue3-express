const pathUrl_role = `http://localhost:8080/api/role`

export const getAllProduct = async () => {
    const res = await fetch(`${pathUrl_role}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const result = await res.json()
    return result
}
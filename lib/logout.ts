import { api } from "./axios";

export async function logout() {
    await api.post('logout', null)
        .then((response) => { 
            console.log(response.data)
        })
        .catch((error) => { 
            console.log(error.response.data)
        })
}
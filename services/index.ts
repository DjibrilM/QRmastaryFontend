import axios from "axios";

interface params {
    color: string,
    background: string,
    text: string
}

export const generateImage = (color: string, background: string, text: string):any => {
    const promise = new Promise((success, reject) => {
        axios.post("http://localhost:8080/qrmastaryV1/main/create", {
            color: color,
            background: background,
            text: text
        })
            .then(result => {
                success(result.data)
            }).catch(error => {
                reject(error)
            })
    })

    return promise;
}
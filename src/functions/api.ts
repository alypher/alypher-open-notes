export const fetchApi = (method, url, body, header) => {
    return fetch(url, {
        method: method,
        credentials: 'same-origin',
        body: body ? JSON.stringify(body) : null,
        headers: header
            ? JSON.stringify(header)
            : {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              }
    })
    .then(response => {
        if (response.ok) return response.json()
        else return response.status
    })
    .then(json => ({ data: json, ok: true }))
    .catch(err => {
        console.error(err)
        return { data: err, ok: false }
    })
}

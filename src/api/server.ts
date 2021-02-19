const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6ImEzMjg1ZmM5MzgzYjg0YzBiMzE5ZGM5MDAwZTkyNWVlYjRlMTc5ODE5MjM5Y2Q4NCIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE5IDE2OjQ5OjI5LjU1MDI0M1wiIn0.8BbQ2mpI9YMyopWFLYH7kFXqANz7gApxTvxYKTB0H-4' // TODO: Add API-Access-Key

const heroku_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6ImVmNzJmYjcxYTY3Y2IwZDlkYTEzZjAwYTBkMDVhMjk0NmQ4ZTdkNDIyZTM0YmZkMyIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE5IDE4OjMyOjQ3Ljc5MDA0NlwiIn0.sVJguaRb7jckl4rfvYvl42R9w8lv5MdMhbeDyBaVaR0'
export const server_calls = {
    get: async () => {
        const response = await fetch(`/marvel_chars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`/marvel_chars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete data from server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`/marvel_chars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
    create: async (data:any = {}) => {
        const response = await fetch(`/marvel_chars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    }
}
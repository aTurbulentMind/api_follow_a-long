import type { RequestHandler } from "@sveltejs/kit";


//get requ
export const GET: RequestHandler = async (event) => {
    const options: ResponseInit = {
        status: 418,
        headers : {
            X: 'Done time' 
        }
    }

    return new Response('Hello', options)
}  

// api post
export const Post: RequestHandler = async (event) => {
    const data = await event.request.formData()
    const email = data.get('email')


    //sub the  user
    console.log(email)

    return new Response(
        JSON.stringify({ success: true }), {
            headers: {
                'Content_Type' : 'application/json'
            }
        }
    )
}
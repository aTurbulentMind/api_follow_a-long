import { json } from '@sveltejs/kit'
import type { RequestHandler } from "./$types";

import db from '$lib/database'

export const GET: RequestHandler = async (event) => {
    
    const posts = await db.post.findMany()
    return json(posts)
}

/**
import { json } from '@sveltejs/kit'
import type { RequestHandler } from "./$types";

import db from '$lib/database'

export const GET: RequestHandler = async ({url}) => {

    const limit = Number(url.searchParams.get
        ('limit') ?? 30)
    const order = url.searchParams.get('order') ?? 'asc'
    
    const posts = await db.post.findMany({
        orderBy: { id: order },
        take: limit
    })
    return json(posts)
}


get params
  
 
export const GET: RequestHandler = async ({url, route, params}) => {

    console.log(url, route, params)
    const posts = await db.post.findMany()
    return json(posts)
}
 */


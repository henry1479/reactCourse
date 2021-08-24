import { endpoints } from "../endpoints";
import { attempt } from "../lib/attempt";
// import cors from 'cors';

export const config = {
    mode: 'cors',
    cashe: 'no-cashe',
    headers: {
        'Content-type': 'application/json'
    }
}
export const postApi = {
    getTest: async () => attempt(endpoints.test, config),
    getPosts: async () => attempt(endpoints.posts, config),
    getPost: async (id)=> attempt(endpoints.post.replace(':id',id),config),
    getComments: async (id)=> attempt(endpoints.comments.replace(':id',id),config),

}

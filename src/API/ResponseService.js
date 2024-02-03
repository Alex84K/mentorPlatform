import axios from 'axios';


export default class ResponseServise {
    static async getAll(limit = 10, page = 1) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
        return response;
    }

    ///////////////////////////////////////////

    static async getAllPosts(limit = 10, page = 1) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getPostById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }

}

import { Request, Response } from 'express';

export default {
    async index(request: Request, response: Response): Promise<Response> {
        return response.json('{}')
    },
};

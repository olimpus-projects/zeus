import { Request, Response } from "express";
import { GetUserService } from "@services/getUserService";
import { ResponseError } from "@utils/error/ResponseError";


export class getUserController {
    constructor(
        private getuserUseCase: GetUserService,
    ) {}

    async handle(request: Request, response: Response): Promise<Response | undefined> {
        let { _id, email } = request.query;

        _id = _id?.toString();
        email = email?.toString();

        try {
                const user = await this.getuserUseCase.execute({
                    _id,
                    email,
                });
                if (!user) {
                    return response.status(400).send('User not found');
                }
                return response.status(200).json(user);
        } catch {
            throw new ResponseError(500, 'Server Error');
        }
    }
}
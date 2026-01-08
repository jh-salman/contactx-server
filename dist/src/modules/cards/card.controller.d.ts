import { Request, Response } from "express";
export declare const cardController: {
    createCard: (req: Request, res: Response, next: any) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllCard: (req: Request, res: Response) => Promise<void>;
    updateCard: (req: Request, res: Response, next: any) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteCard: (req: Request, res: Response, next: any) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=card.controller.d.ts.map
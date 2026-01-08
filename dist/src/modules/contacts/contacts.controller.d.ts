import { Request, Response } from "express";
export declare const contactController: {
    saveContactController: (req: Request, res: Response, next: any) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllContactsController: (req: Request, res: Response, next: any) => Promise<void>;
    updateContactController: (req: Request, res: Response, next: any) => Promise<void>;
    deleteContactController: (req: Request, res: Response, next: any) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=contacts.controller.d.ts.map
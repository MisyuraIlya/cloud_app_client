import { User } from "./auth.dto";

export interface FileItem {
    filename: string;
    originalName: string;
    size: number;
    mimetype:number;
    user: User;
    deletedAt: string | null;
    id: number
}
import { Document, Types } from 'mongoose';
export declare class SupportTicket extends Document {
    memberId: Types.ObjectId;
    subject: string;
    description: string;
    status: string;
    priority: string;
    replies: any[];
}
export declare const SupportTicketSchema: import("mongoose").Schema<SupportTicket, import("mongoose").Model<SupportTicket, any, any, any, any, any, SupportTicket>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SupportTicket, Document<unknown, {}, SupportTicket, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SupportTicket & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SupportTicket, Document<unknown, {}, SupportTicket, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SupportTicket & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, SupportTicket, Document<unknown, {}, SupportTicket, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SupportTicket & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    memberId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SupportTicket, Document<unknown, {}, SupportTicket, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SupportTicket & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, SupportTicket, Document<unknown, {}, SupportTicket, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SupportTicket & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subject?: import("mongoose").SchemaDefinitionProperty<string, SupportTicket, Document<unknown, {}, SupportTicket, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SupportTicket & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    priority?: import("mongoose").SchemaDefinitionProperty<string, SupportTicket, Document<unknown, {}, SupportTicket, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SupportTicket & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    replies?: import("mongoose").SchemaDefinitionProperty<any[], SupportTicket, Document<unknown, {}, SupportTicket, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SupportTicket & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SupportTicket>;

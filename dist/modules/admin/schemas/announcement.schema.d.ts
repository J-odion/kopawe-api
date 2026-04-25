import { Document } from 'mongoose';
export declare class Announcement extends Document {
    title: string;
    content: string;
    targetAudience: string;
    type: string;
}
export declare const AnnouncementSchema: import("mongoose").Schema<Announcement, import("mongoose").Model<Announcement, any, any, any, any, any, Announcement>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Announcement, Document<unknown, {}, Announcement, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Announcement & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Announcement, Document<unknown, {}, Announcement, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Announcement & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, Announcement, Document<unknown, {}, Announcement, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Announcement & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, Announcement, Document<unknown, {}, Announcement, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Announcement & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, Announcement, Document<unknown, {}, Announcement, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Announcement & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    targetAudience?: import("mongoose").SchemaDefinitionProperty<string, Announcement, Document<unknown, {}, Announcement, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Announcement & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Announcement>;

import { Document, Types } from 'mongoose';
export declare class CommunityPost extends Document {
    authorId: Types.ObjectId;
    content: string;
    state: string;
    lga: string;
    images: string[];
    likes: number;
}
export declare const CommunityPostSchema: import("mongoose").Schema<CommunityPost, import("mongoose").Model<CommunityPost, any, any, any, any, any, CommunityPost>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CommunityPost, Document<unknown, {}, CommunityPost, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    state?: import("mongoose").SchemaDefinitionProperty<string, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lga?: import("mongoose").SchemaDefinitionProperty<string, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    images?: import("mongoose").SchemaDefinitionProperty<string[], CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    authorId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    likes?: import("mongoose").SchemaDefinitionProperty<number, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CommunityPost>;

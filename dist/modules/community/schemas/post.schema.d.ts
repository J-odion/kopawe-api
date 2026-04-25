import { Document, Types } from 'mongoose';
export declare enum PostCategory {
    NEWS = "NEWS",
    SPORTS = "SPORTS",
    RELIGIOUS = "RELIGIOUS",
    PROGRAMS = "PROGRAMS",
    COUNSELING = "COUNSELING",
    DISCUSSION = "DISCUSSION"
}
export declare enum PostType {
    OFFICIAL = "OFFICIAL",
    VERIFIED = "VERIFIED",
    GENERAL = "GENERAL"
}
export declare class CommunityPost extends Document {
    authorId: Types.ObjectId;
    content: string;
    category: PostCategory;
    type: PostType;
    state: string;
    lga: string;
    images: string[];
    upvotes: Types.ObjectId[];
    parentId: Types.ObjectId;
    isDevotional: boolean;
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
    type?: import("mongoose").SchemaDefinitionProperty<PostType, CommunityPost, Document<unknown, {}, CommunityPost, {
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
    content?: import("mongoose").SchemaDefinitionProperty<string, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<PostCategory, CommunityPost, Document<unknown, {}, CommunityPost, {
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
    images?: import("mongoose").SchemaDefinitionProperty<string[], CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    upvotes?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    parentId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isDevotional?: import("mongoose").SchemaDefinitionProperty<boolean, CommunityPost, Document<unknown, {}, CommunityPost, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CommunityPost>;
export declare class Poll extends Document {
    question: string;
    options: string[];
    results: Map<string, number>;
    state: string;
}
export declare const PollSchema: import("mongoose").Schema<Poll, import("mongoose").Model<Poll, any, any, any, any, any, Poll>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Poll, Document<unknown, {}, Poll, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Poll & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Poll, Document<unknown, {}, Poll, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Poll & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    state?: import("mongoose").SchemaDefinitionProperty<string, Poll, Document<unknown, {}, Poll, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Poll & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    question?: import("mongoose").SchemaDefinitionProperty<string, Poll, Document<unknown, {}, Poll, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Poll & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    options?: import("mongoose").SchemaDefinitionProperty<string[], Poll, Document<unknown, {}, Poll, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Poll & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    results?: import("mongoose").SchemaDefinitionProperty<Map<string, number>, Poll, Document<unknown, {}, Poll, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Poll & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Poll>;
export declare class CommunityEvent extends Document {
    title: string;
    description: string;
    date: Date;
    location: string;
    state: string;
    rsvps: Types.ObjectId[];
}
export declare const CommunityEventSchema: import("mongoose").Schema<CommunityEvent, import("mongoose").Model<CommunityEvent, any, any, any, any, any, CommunityEvent>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CommunityEvent, Document<unknown, {}, CommunityEvent, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<CommunityEvent & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, CommunityEvent, Document<unknown, {}, CommunityEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityEvent & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    state?: import("mongoose").SchemaDefinitionProperty<string, CommunityEvent, Document<unknown, {}, CommunityEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityEvent & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, CommunityEvent, Document<unknown, {}, CommunityEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityEvent & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<Date, CommunityEvent, Document<unknown, {}, CommunityEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityEvent & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, CommunityEvent, Document<unknown, {}, CommunityEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityEvent & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, CommunityEvent, Document<unknown, {}, CommunityEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityEvent & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rsvps?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], CommunityEvent, Document<unknown, {}, CommunityEvent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CommunityEvent & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CommunityEvent>;

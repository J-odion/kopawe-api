import { Document } from 'mongoose';
export declare class Member extends Document {
    callUpNumber: string;
    stateCode: string;
    fullName: string;
    state: string;
    lga: string;
    cdsGroup: string;
    isVerified: boolean;
    isAdmin: boolean;
    fraudSignals: any;
    creditScore: number;
}
export declare const MemberSchema: import("mongoose").Schema<Member, import("mongoose").Model<Member, any, any, any, any, any, Member>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Member, Document<unknown, {}, Member, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    callUpNumber?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    stateCode?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fullName?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    state?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lga?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cdsGroup?: import("mongoose").SchemaDefinitionProperty<string, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isVerified?: import("mongoose").SchemaDefinitionProperty<boolean, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isAdmin?: import("mongoose").SchemaDefinitionProperty<boolean, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fraudSignals?: import("mongoose").SchemaDefinitionProperty<any, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    creditScore?: import("mongoose").SchemaDefinitionProperty<number, Member, Document<unknown, {}, Member, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Member & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Member>;

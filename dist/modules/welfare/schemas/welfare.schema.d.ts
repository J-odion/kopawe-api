import { Document, Types } from 'mongoose';
export declare class WelfareFund extends Document {
    totalPool: number;
    totalDisbursed: number;
    currency: string;
}
export declare const WelfareFundSchema: import("mongoose").Schema<WelfareFund, import("mongoose").Model<WelfareFund, any, any, any, any, any, WelfareFund>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WelfareFund, Document<unknown, {}, WelfareFund, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<WelfareFund & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, WelfareFund, Document<unknown, {}, WelfareFund, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareFund & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<string, WelfareFund, Document<unknown, {}, WelfareFund, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareFund & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalPool?: import("mongoose").SchemaDefinitionProperty<number, WelfareFund, Document<unknown, {}, WelfareFund, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareFund & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalDisbursed?: import("mongoose").SchemaDefinitionProperty<number, WelfareFund, Document<unknown, {}, WelfareFund, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareFund & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, WelfareFund>;
export declare class WelfareRequest extends Document {
    memberId: Types.ObjectId;
    amount: number;
    reason: string;
    status: string;
    adminNote: string;
}
export declare const WelfareRequestSchema: import("mongoose").Schema<WelfareRequest, import("mongoose").Model<WelfareRequest, any, any, any, any, any, WelfareRequest>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WelfareRequest, Document<unknown, {}, WelfareRequest, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<WelfareRequest & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, WelfareRequest, Document<unknown, {}, WelfareRequest, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareRequest & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reason?: import("mongoose").SchemaDefinitionProperty<string, WelfareRequest, Document<unknown, {}, WelfareRequest, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareRequest & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    memberId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, WelfareRequest, Document<unknown, {}, WelfareRequest, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareRequest & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, WelfareRequest, Document<unknown, {}, WelfareRequest, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareRequest & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, WelfareRequest, Document<unknown, {}, WelfareRequest, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareRequest & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    adminNote?: import("mongoose").SchemaDefinitionProperty<string, WelfareRequest, Document<unknown, {}, WelfareRequest, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<WelfareRequest & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, WelfareRequest>;

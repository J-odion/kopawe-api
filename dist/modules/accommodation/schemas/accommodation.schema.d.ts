import { Document, Types } from 'mongoose';
export declare class Accommodation extends Document {
    title: string;
    location: string;
    price: number;
    ownerId: Types.ObjectId;
    status: string;
    isVerified: boolean;
    amenities: string[];
    roommateWanted: boolean;
}
export declare const AccommodationSchema: import("mongoose").Schema<Accommodation, import("mongoose").Model<Accommodation, any, any, any, any, any, Accommodation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Accommodation, Document<unknown, {}, Accommodation, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isVerified?: import("mongoose").SchemaDefinitionProperty<boolean, Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number, Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ownerId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amenities?: import("mongoose").SchemaDefinitionProperty<string[], Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    roommateWanted?: import("mongoose").SchemaDefinitionProperty<boolean, Accommodation, Document<unknown, {}, Accommodation, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Accommodation & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Accommodation>;

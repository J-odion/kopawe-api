import { Document, Types } from 'mongoose';
export declare class Wallet extends Document {
    memberId: Types.ObjectId;
    balance: number;
    savingsBalance: number;
    groupSavingsBalance: number;
    isLocked: boolean;
    currency: string;
}
export declare const WalletSchema: import("mongoose").Schema<Wallet, import("mongoose").Model<Wallet, any, any, any, any, any, Wallet>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Wallet, Document<unknown, {}, Wallet, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    memberId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    balance?: import("mongoose").SchemaDefinitionProperty<number, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    savingsBalance?: import("mongoose").SchemaDefinitionProperty<number, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    groupSavingsBalance?: import("mongoose").SchemaDefinitionProperty<number, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isLocked?: import("mongoose").SchemaDefinitionProperty<boolean, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    currency?: import("mongoose").SchemaDefinitionProperty<string, Wallet, Document<unknown, {}, Wallet, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Wallet & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Wallet>;
export declare class Loan extends Document {
    memberId: Types.ObjectId;
    amount: number;
    interest: number;
    repaymentDate: Date;
    status: string;
    repaymentSchedule: any[];
    purpose: string;
}
export declare const LoanSchema: import("mongoose").Schema<Loan, import("mongoose").Model<Loan, any, any, any, any, any, Loan>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Loan, Document<unknown, {}, Loan, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Loan, Document<unknown, {}, Loan, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    memberId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Loan, Document<unknown, {}, Loan, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, Loan, Document<unknown, {}, Loan, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    interest?: import("mongoose").SchemaDefinitionProperty<number, Loan, Document<unknown, {}, Loan, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    repaymentDate?: import("mongoose").SchemaDefinitionProperty<Date, Loan, Document<unknown, {}, Loan, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Loan, Document<unknown, {}, Loan, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    repaymentSchedule?: import("mongoose").SchemaDefinitionProperty<any[], Loan, Document<unknown, {}, Loan, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    purpose?: import("mongoose").SchemaDefinitionProperty<string, Loan, Document<unknown, {}, Loan, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Loan & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Loan>;

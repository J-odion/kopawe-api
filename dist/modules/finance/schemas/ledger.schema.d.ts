import { Document, Types } from 'mongoose';
export declare enum AccountType {
    MAIN = "MAIN",
    SAVINGS = "SAVINGS",
    ESCROW = "ESCROW",
    SYSTEM = "SYSTEM"
}
export declare enum TransactionType {
    TRANSFER = "TRANSFER",
    LOAN_DISBURSEMENT = "LOAN_DISBURSEMENT",
    LOAN_REPAYMENT = "LOAN_REPAYMENT",
    MARKETPLACE_PAYMENT = "MARKETPLACE_PAYMENT",
    ESCROW_RELEASE = "ESCROW_RELEASE",
    BILL_PAYMENT = "BILL_PAYMENT"
}
export declare class LedgerEntry extends Document {
    transactionId: Types.ObjectId;
    memberId: Types.ObjectId;
    accountType: AccountType;
    amount: number;
    balanceAfter: number;
    description: string;
}
export declare const LedgerEntrySchema: import("mongoose").Schema<LedgerEntry, import("mongoose").Model<LedgerEntry, any, any, any, any, any, LedgerEntry>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LedgerEntry, Document<unknown, {}, LedgerEntry, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<LedgerEntry & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LedgerEntry, Document<unknown, {}, LedgerEntry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LedgerEntry & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, LedgerEntry, Document<unknown, {}, LedgerEntry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LedgerEntry & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    memberId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LedgerEntry, Document<unknown, {}, LedgerEntry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LedgerEntry & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, LedgerEntry, Document<unknown, {}, LedgerEntry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LedgerEntry & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    transactionId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LedgerEntry, Document<unknown, {}, LedgerEntry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LedgerEntry & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    accountType?: import("mongoose").SchemaDefinitionProperty<AccountType, LedgerEntry, Document<unknown, {}, LedgerEntry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LedgerEntry & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    balanceAfter?: import("mongoose").SchemaDefinitionProperty<number, LedgerEntry, Document<unknown, {}, LedgerEntry, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LedgerEntry & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, LedgerEntry>;
export declare class TransactionRecord extends Document {
    type: TransactionType;
    amount: number;
    fromMemberId: Types.ObjectId;
    toMemberId: Types.ObjectId;
    status: string;
    metadata: any;
}
export declare const TransactionRecordSchema: import("mongoose").Schema<TransactionRecord, import("mongoose").Model<TransactionRecord, any, any, any, any, any, TransactionRecord>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TransactionRecord, Document<unknown, {}, TransactionRecord, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<TransactionRecord & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, TransactionRecord, Document<unknown, {}, TransactionRecord, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TransactionRecord & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<TransactionType, TransactionRecord, Document<unknown, {}, TransactionRecord, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TransactionRecord & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    amount?: import("mongoose").SchemaDefinitionProperty<number, TransactionRecord, Document<unknown, {}, TransactionRecord, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TransactionRecord & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, TransactionRecord, Document<unknown, {}, TransactionRecord, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TransactionRecord & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fromMemberId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, TransactionRecord, Document<unknown, {}, TransactionRecord, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TransactionRecord & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    toMemberId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, TransactionRecord, Document<unknown, {}, TransactionRecord, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TransactionRecord & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<any, TransactionRecord, Document<unknown, {}, TransactionRecord, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TransactionRecord & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TransactionRecord>;

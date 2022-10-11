import { Producer } from "apps/producer/src/producer/producer.entity";
import { Transaction } from "apps/transaction/src/transaction/transaction.entity";

export function reducerState(transaction:Transaction,producer:Producer){
    return{
        ...transaction,
        status:producer.data.status,
    };
};

export function reducerStep(transaction:Transaction,producer:Producer){
    return{
        ...transaction,
        step:producer.data.step,
    };
};


import { Reducer } from './reducer.type';

export const EVENT_TYPE =
  'statusChanged';

export const reducer: Reducer = (producer: any, transaction: any) => {


  return {
    ...transaction,
    
    status: producer.data.status,
        
 
  };
};
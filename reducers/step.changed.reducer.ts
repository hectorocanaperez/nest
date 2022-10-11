import { Reducer } from './reducer.type';

export const EVENT_TYPE =
  'step1';

export const reducer: Reducer = (producer: any, transaction: any) => {


  return {
    ...transaction,
    
    step: producer.data.step,
            
    
  };
};
//PRUEBA PARA PRACTICAR CON REDUCER/STORE

  //   const STATUS_FIRST = 'ESPERANDO'
  //   const STATUS_FINAL = 'COMPLETADO'
  //   const STEP_FIRST='INICIO'
  //   const STEP_FINAL='FINALIZANDO'

  //   const transactiond = {
  //     status:'en proceso'
  //   }

  //   const stepd = {
  //     step:'iniciando'
  //   }

   
  //   const producerd={
  //       transactionId:"7660c4ad-daf4-4cc6-b1d0-03173b8b80c2",
  //       flowId:"esse",
  //       time:"dafdsfsdf",
  //       tipo:"status changed",
  //       data:{
  //           step:"1ºstep",
  //           status:"esperando"
  //       }
  //   }
        
      
  //   const stateReducer = (transaction=transactiond, producer) => {
  //     switch (producer.type) {
  //       case STATUS_FIRST:
  //         return {
  //           ...transactiond,
  //              status:producerd.data.status,
  //         }
  //       case STATUS_FINAL:
  //         return {
  //           ...transactiond,
  //              status:'suceed',
  //         }
  //       default:
  //         return transactiond
  //     }
  //   }
  
  
  //   const stepReducer = (step = stepd, producer) => {
  //     switch (producer.type) {
  //       case STEP_FIRST:
  //         return {
  //           ...step,
  //           step:producerd.data.step
  //         }
  //       case STEP_FINAL:
  //         return {
  //           ...step,
  //           step: "full"
  //         }
  //       default:
  //         return stepd
  //     }
  //   }
  //   function orderStatus() {
  //     return {
  //       type: STATUS_FIRST,
        
  //     }
  //   }
  //   function restockStatus() {
  //     return {
  //       type: STATUS_FINAL
        
  //     }
  //   }
  //   function orderStep() {
  //     return {
  //       type: STEP_FIRST,
        
  //     }
  //   }
  //   function restockStep() {
  //     return {
  //       type: STEP_FINAL,
        
  //     }
  //   }
  
  //   const rootReducer = combineReducers({
  //     transaction: stateReducer,
  //     step: stepReducer
  //   })
  
  
  //   const store = createStore(rootReducer)
  
  // console.log('Initial State ', store.getState())
  // const unsubscribe = store.subscribe(() => {
  //   console.log('Updated State ', store.getState())
  // })
  
  
  
  // const actions = bindActionCreators(
  //   { orderStatus,restockStatus,restockStep, orderStep },
  //   store.dispatch
  // )
  // actions.orderStatus()
  // actions.orderStatus()
  // actions.orderStep()
  // actions.restockStep()
  // actions.orderStep()
  // actions.orderStatus()
  // actions.restockStatus()
  // unsubscribe()


    
  

   //query para modificar el estado


    // const searchState= await this.dataSource
    // .createQueryBuilder()
    // .update(Producer)
    // .set({data:{
    //   status:"suceed"}})
    // .where("type= 'statusChanged'")
    // .execute()


    // const searchStateFinal= await this.dataSource
    // .createQueryBuilder()
    // .update(Producer)
    // .set({data:{
    //   step:"full"}})
    // .where("type= 'stepChanged'")
    // .execute()


     // const searchStep= await this.dataSource
    // .createQueryBuilder()
    // .update(Transaction)
    // .set({process:true})
    // .where("process= 'false'")
    // .execute()


    






//CREACION DE CLIENTE

//const client=new Client({
      //host:'localhost',
      //type: 'postgres',
      //port:5433,
      //username:'postgres',
      //password:'Complutense123?',
      //database:'actividad'
    //});
    //client.connect();
        //await client.query({
      //text:'Select * from "producer" where "status"=$1 FOR UPDATE LIMIT $2',
      //values:['CREATED',this.numeroConsumers]
       /*.then(result=>{
      //consumers= result.rows;
      consumers.forEach(e=>{
        this.producerRepository.findOne({
          where:{
            transactionId:e.transactionId
          }
        }).then((consumer)=>{
          this.producerRepository.save(consumer);
          this.transactionRepository.findOne({
            where:{
              transactionId:consumer.transaction.transactionId
            }
          }).then(transaction=>{
            transaction.status='suceed';
            this.transactionRepository.save(transaction)
          });
        });
      });
    }).catch(e=> console.error(e.stack))*/




    //pruebas de test con superagent

    // import assert from 'assert';
// import { resolve } from 'path';
// import * as req from 'superagent'
// describe('TransactionEvent', () => {

//   describe('createTransaction', () => {

//     it('should return a 201 status', async () => {

//       const res = await ( req.post('http://localhost:3003/transactions/transactions')).send({

//         "transactionId":"",
//         "flowId":"17d41e84-9dac-4ff3-8f86-84af998c9e8b",
//         "process":false,
//         "customId":"123-abc",
//         "time":"2022-10-17 10:09:08.607381",
//         "data":{}

//       });

//       expect(res.status).toBe(201);
//     });

//   });

//   describe('checkTransaction', () => {

//     it('should return transactionId is ok ', async () => {
//       let transactionId: string;
//       const res = await ( req.post('http://localhost:3003/transactions/transactions')).send({

//         "transactionId":'',
//         "flowId":"17d41e84-9dac-4ff3-8f86-84af998c9e8b",
//         "process":false,
//         "customId":"1234-abc",
//         "time":"2022-10-17 10:09:08.607381",
//         "data":{}

//       });

//       expect(res.body.transactionId).not.toBe(undefined);
//       // eslint-disable-next-line prefer-const
//       transactionId = res.body.transactionId;
//     });

//   });

//   describe('getTransaction', () => {

//     it('should return a 200 status', async () => {

//       const res = await ( req.get('http://localhost:3003/transactions/todos'))

//       expect(res.status).toBe(200);

//     });

//   });
 

//   describe('getProducer', () => {

//     it('should return a 200 status', async () => {

//       const res = await ( req.get('http://localhost:3002/producers/todos'))

//       expect(res.status).toBe(200);

//     });

//   });
  

//   describe('createProducer', () => {

//     it('should return a 201 status', async () => {

//       const res = await ( req.post('http://localhost:3002/producers/producers')).send({
//         "transactionId":"705ad8ae-a245-4f58-a394-05c96282b03b",
//         "flowId":"25627da7-a2f3-46a8-9995-48676b453327",
//         "time":"2022-10-17 10:09:08.607381",
//         "process":false,
//         "type":"statusChanged",
//         "data":{
//             "status":"esperando"
//         }
//       })

//       expect(res.status).toBe(201);
//     });

//   });

// });

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

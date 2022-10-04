// const consumers= await this.producerRepository.find({
     
    //   where:{
    //     tipo:'facephi79'
    //   }
    // })
    // console.log("consumidores(type)",consumers)


    // this.producerRepository
    // .createQueryBuilder('estado')
    // .select()
    // .where('estado.data.state ::jsonb @> :data.state', {
      
    // })
    // .printSql()
    // .getMany();
   
    
   
    // const resultado = (await constructBaseQuery({ entity: Producer })
    // .select()
    // .where(`Producer.data.status ::jsonb=:suceed `,
    
    // )
    // .getMany()) as Producer;



    // console.log("resultadooo",resultado)
      
    // const consumidores= await this.producerRepository.find({

     
    //   where:{
       
    //   status:'suceed'
    //   }
    // })

    
    // console.log("consumidores(estado)",consumidores)
    
    // Con esta query actualizamos el estado

    // const search= await this.dataSource
    // .createQueryBuilder()
    // .update(Producer)
    // .set({data:{
    //   status:"suceed"}})
    // //.where("status= 'esperando'")
    // .where(`data.status ::jsonb @> Producer.data.status=esperando`,)
    
    // .execute()

    // console.log("estado",search)


    
  

  






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

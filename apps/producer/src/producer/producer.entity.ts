import { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import {Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, Generated, UsingJoinColumnIsNotAllowedError} from 'typeorm'
//import { JsonSchemaService } from 'libs/schemaRegistryLibrary/jsonService';
import { type } from 'os';

@Entity()
export class Producer extends BaseEntity{
   @PrimaryGeneratedColumn()
    id:string;


    @Column()
    transactionId: string;

    @Column({nullable:true})
    flowId: string;
    
    

    @Column({nullable:true})
    time: string;

    

    @Column({nullable:true})
    tipo: string;


    @Column({type:'jsonb',
        nullable:true})
    
    data:{
        
    }
   
  
    @ManyToOne(() => Transaction, (Transaction) => Transaction.transactionId, { cascade: true })

    @JoinColumn({ name: 'transactionId' })
    
    transaction: Transaction;
   
}


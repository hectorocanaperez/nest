/* eslint-disable @typescript-eslint/ban-types */
import { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import {Entity,Column,PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, CreateDateColumn} from 'typeorm'


@Entity()
export class Producer extends BaseEntity{
   @PrimaryGeneratedColumn()
    id?:string;


    @Column()
    transactionId: string;

    @Column({nullable:true})
    flowId: string;
    
    

    @CreateDateColumn({nullable:true})
    time: string;

    

    @Column({nullable:true})
    type: string;

    
    @Column({nullable:true})
    process:boolean;


    @Column({type:'jsonb',
        nullable:true})
    
    data:{
        // status:string;
        // step:string;
    }
   
  
    @ManyToOne(() => Transaction, (Transaction) => Transaction.transactionId, { cascade: true })

    @JoinColumn({ name: 'transactionId' })
    
    transaction: Transaction;
    producer: {};
   
}


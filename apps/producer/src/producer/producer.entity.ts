import { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import {Entity,Column,PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne, JoinColumn, CreateDateColumn} from 'typeorm'

@Entity()
export class Producer extends BaseEntity{
   @PrimaryGeneratedColumn()
    id:string;


    @Column()
    transactionId: string;
    
    

    @CreateDateColumn({nullable:true})
    time: Date;

    @Column({nullable:true})
    type: string;


    @Column({nullable:true})
    status:string;
  
  

    
    @ManyToOne(() => Transaction, (Transaction) => Transaction.transactionId, { cascade: true })

    @JoinColumn({ name: 'transactionId' })
    
    transaction: Transaction;
  

   
    
    

    

    
}
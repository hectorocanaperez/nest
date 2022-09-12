import { Producer } from 'apps/producer/src/producer/producer.entity';
import { IsEmpty, IsString } from 'class-validator';
import {Entity,Column,PrimaryGeneratedColumn,BaseEntity, CreateDateColumn, OneToMany, ManyToOne, JoinColumn} from 'typeorm'

@Entity()
export class Transaction extends BaseEntity {
    @IsString()
    @PrimaryGeneratedColumn('uuid')
    transactionId:string;

    
   

    

    @Column({nullable:false})
    customId: string;

    @Column({nullable:false})
    process:boolean;

    @CreateDateColumn({nullable:true})
    time: Date;

    //status:string;
  transaction: string 
  

   /* @ManyToOne(() => Transaction, (Transaction) => Transaction.transactionId, { cascade: true })

    @JoinColumn({ name: 'transactionId' })

  
    
    transaction: Transaction;*/

    
  

    
}
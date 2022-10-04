import { Producer } from 'apps/producer/src/producer/producer.entity';
import { IsEmpty, IsString, UUIDVersion } from 'class-validator';
import {Entity,Column,PrimaryGeneratedColumn,BaseEntity, CreateDateColumn, OneToMany, ManyToOne, JoinColumn, Generated} from 'typeorm'

@Entity()
export class Transaction extends BaseEntity {
    @IsString()
    @PrimaryGeneratedColumn('uuid')
    transactionId:string;

    @Column({nullable:true})
    @IsString()
   //@Generated('uuid')
   flowId:string;


    @Column({nullable:true})
    customId: string;

    @Column({nullable:true})
    process:boolean;

    @Column({nullable:true})
    time: string;

    @Column({type:'jsonb',
    nullable:true})

      data:{
          
      }

    //status:string;
  transaction: string 
    
}
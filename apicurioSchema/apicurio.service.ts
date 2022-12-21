/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from "@nestjs/common";
// import * as Request from 'superagent'
import Ajv from 'ajv';
const superagent=require("superagent")

@Injectable()
export class ApicurioSchemaService{

    private readonly ajv;
    
    constructor () {
        this.ajv = new Ajv();
        this.ajv.addKeyword('status');
        this.ajv.addKeyword('steps');
        this.ajv.addKeyword('step');
        
    }

    // createSchema(schemaName:string,schemaDefinition:string){
    //     return schemaName;
    // }

    async getSchema(schemaName:string){
        try{
            const res=await superagent(`http://localhost:9000/api/artifacts/${schemaName}`)    
            if (res.status===200){
                return res.body
            }
        
            }catch(error){
            console.log("error",error)
            
        }
        
    }

    validate(schema:any,data:any){
        const isSchema=this.ajv.validate(schema,data);
        return isSchema;
    }


}
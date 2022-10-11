import { Injectable } from "@nestjs/common";
import * as Request from 'superagent'
import Ajv from 'ajv';
const superagent=require("superagent")

@Injectable()
export class ApicurioSchemaService{

    private readonly ajv;
    
    constructor () {
        this.ajv = new Ajv();
        this.ajv.addKeyword('status');
    }

    createSchema(schemaName:string,schemaDefinition:string){
        return schemaName;
    }

    async getSchema(schemaName:string){

       
        try{
            const res=await superagent(`http://localhost:8087/api/artifacts/${schemaName}`)    
            if (res.status===200){
                return res.body
            }
        
        }catch(error){
            console
            return false;
        }
        
    }

    validate(schema:any,data:any){
        const isSchema=this.ajv.validate(schema,data);
        return isSchema;
    }


}
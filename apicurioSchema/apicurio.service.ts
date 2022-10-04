import { Injectable } from "@nestjs/common";
import * as Request from 'superagent'
import Ajv from 'ajv';


@Injectable()
export class ApicurioSchemaService{

    
    ajv=new Ajv();

    createSchema(schemaName:string,schemaDefinition:string){
        return schemaName;
    }

    async getSchema(schemaName:object):Promise<any|boolean>{

       
        try{
            const res=await Request('http://localhost:8087/api/artifacts/6e568e6d-c6fd-46c0-b5e3-e2d88176badd')    
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
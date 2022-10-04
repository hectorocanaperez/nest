






import { JsonSchemaService } from "schemaRegistryLibrary/jsonService"


const Ajv = require("ajv")
//import Ajv from 'ajv';
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}


const schema = {
  type: "object",
  properties: {
    transactionId: {type: "string"},
    flowId:{type:"string"},
    customId:{type:"string"},
    time:{type:"string"},
    process:{type:"boolean"}
  
  },
  required: ["flowId"],
  additionalProperties: false
}

const validate = ajv.compile(schema)


test({ transactionId:"545422545-kkxxx",
flowId:"343434-x",

customId: "1212-asss",
time:"12-10-2022",
process:false,
})


function test(data){
  const valid=validate(data)
  if(valid) console.log("es valido")
  else console.log("no es valido"+ ajv.errorsText(validate.errors))
}

const dataa = {
    
    transactionId:"545422545-kkxxx",
    time:"2022-08-25 19:12:35.605",
    process:false,
    customId: "1212-asss"
}

const valid = validate(data)
if (!valid) console.log(validate.errors)

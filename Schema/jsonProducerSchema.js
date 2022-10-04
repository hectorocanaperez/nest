


//import Ajv from "ajv";
const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}



const schema = {
  type: "object",
  properties: {
    id: {type: "number"},
    transactionId: {type: "string"},
    time:{type:"string"},
    type:{type:"string"},
    data:{type:"object"}
  },
  required: ["type"],
  additionalProperties: false
}

const validate = ajv.compile(schema)



test({id:88,
  transactionId:"5454545-xxx",
  time:"12-10-21",
  type:"facephi",
  data:{
    status: "esperando",
    nombre:"luis"
  }
})

function test(data){
  const valid=validate(data)
  if(valid) console.log("es valido")
  else console.log("no es valido"+ ajv.errorsText(validate.errors))
}



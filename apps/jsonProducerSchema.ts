




 import Ajv from "ajv";
//const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}






const schema = {
  type: "object",
  properties: {
    id: {type: "number"},
    transactionId: {type: "string"},
    time:{type:"date"},
    type:{type:"string"},
    status:{type:"string"}
  },
  required: ["type"],
  additionalProperties: false
}

const validate = ajv.compile(schema)

const data = {
    id:88,
    transactionId:"5454545-xxx",
    time:"2022-08-25 19:12:35.605",
    type:"facephi",
    status: "esperando"
}

const valid = validate(data)
if (!valid) console.log(validate.errors)

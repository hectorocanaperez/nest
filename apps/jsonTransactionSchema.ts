const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}






const schema = {
  type: "object",
  properties: {
    transactionId: {type: "string"},
    customId:{type:"string"},
    process:{type:"boolean"},
    time:{type:"date"}
  },
  required: ["transactionId"],
  additionalProperties: false
}

const validate = ajv.compile(schema)

const data = {
    
    transactionId:"545422545-kkxxx",
    time:"2022-08-25 19:12:35.605",
    process:false,
    customId: "1212-asss"
}

const valid = validate(data)
if (!valid) console.log(validate.errors)



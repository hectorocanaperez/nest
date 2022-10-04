
var jsf=require('json-schema-faker');

//console.log(jsf.version);



var schema = {
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

var sample=jsf(schema);
console.log(sample);
console.log(sample.flowId)  



// const schemaAsObject = JSON.parse(schema);

// const obj = jsf.generate(schemaAsObject);

	
// console.log(obj);

// const schemaWithExamples = {
//     type: "object",
//     properties: {
//       transactionId:  {
//         type: "string",
//         example: ["0d72362b-757e-4323-ba7f-d17361a13c68"]
//       }
//     },
//     required: ["transactionId"]
//   }
   
//   const objWithExample = jsf.generate(schemaWithExamples);
//   console.log(objWithExample);
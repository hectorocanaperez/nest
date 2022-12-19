/* eslint-disable @typescript-eslint/no-unused-vars */
import { INestApplication } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConsumerModule } from "./consumer/src/consumer/consumer.module";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Producer } from "./producer/src/producer/producer.entity";
import { ProducerModule } from "./producer/src/producer/producer.module";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Transaction } from "./transaction/src/transaction/transaction.entity";
import { TransactionsModule } from "./transaction/src/transaction/transaction.module";
import { testCheck } from './e2e.test.';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const request = require('supertest');
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires
const { GenericContainer } = require("testcontainers");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const redis = require("async-redis");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DockerComposeEnvironment } = require("testcontainers");


jest.setTimeout(100000)


describe("DockerComposeEnvironment", () => {
let environment;
// let redisClient;
let app: INestApplication;
let server;

beforeAll(async () => {
    const composeFilePath = path.resolve(__dirname,"../../monorepo");
    const composeFile = "docker-compose.yaml";

    environment = await new DockerComposeEnvironment(composeFilePath, composeFile).up();
    
    const moduleFixture:TestingModule = await Test.createTestingModule({
        imports: [
            ConfigModule.forRoot(),    
            TypeOrmModule.forRoot({
                    type: 'postgres',
                    host:process.env.DATABASE_HOST,
                    port: 5433,
                    database:process.env.DATABASE_NAME,
                    username:process.env.DATABASE_USER,
                    password:process.env.DATABASE_PASSWORD,
                    autoLoadEntities: true,
                    synchronize: false,
                }),
                TransactionsModule,ProducerModule,ConsumerModule
        ],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    server = await app.getHttpServer();
    
    // const postgres = environment.getContainer("postgres");
    // console.log("postgres",postgres.getMappedPort(5433))
    // redisClient = redis.createClient(
    // redisContainer.getMappedPort(6379),
    // redisContainer.getHost(),
   // );
});
afterAll(async () => {
    await app.close();
  });
// afterAll(async () => {
//     //(async()=>{await redisClient.quit();})()
//     await redisClient.quit();
//     await environment.down();
// });
it('CheckTest', async () => {
    let transactionId: string;

     await request(app.getHttpServer())
      .post('/transactions/transactions')
      .send({
        time:testCheck.time,
        customId: testCheck.customId,
        flowId:testCheck.flowId,
        transactionId:'',
        process:testCheck.process,
        data:{}
      })
      .expect((res) => {
        expect(res.body.transactionId).not.toBe(undefined);
        transactionId = res.body.transactionId;
      });

 
      for (const event of testCheck.events) {
          await request(app.getHttpServer())
            .post('/producers/producers')
            .send({
              transactionId,
              process:event.process,
              time: event.time,
              type: event.type,
              data: event.data,
              flowId: event.flowId,
            })
            .expect(201);
        }
      });
it("works", () => {
    console.log("los test funcionan!!")
});


});
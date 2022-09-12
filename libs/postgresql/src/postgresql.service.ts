import { Injectable } from '@nestjs/common';

@Injectable()
export class PostgresqlService {
 /*constructor(@PgConnection() private readonly db: actividad) {}

    
  async list() {
    return this.db.rows(`SELECT * FROM transaction;`);
  }
 
  async create(Transaction) {
    return this.db.query(`INSERT INTO transaction(time, customId) values($1, $2);`, [
      Transaction.time,
      Transaction.customId,
    ]);
  }*/
}

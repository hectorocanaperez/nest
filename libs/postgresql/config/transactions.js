import sql from './db.js'

export async function getById(id) {
  const transactions = await sql`
    select
      date,
      customId
    from transaction
    where id = ${ id }
  `
 
  return transactions
}


export async function nuevaTransaction({date,customId}){
    const transactions=await sql`
    insert into transaction
      (date, customId)
    values
      (${ date }, ${ customId })
    returning date, customId
  `
  
  return transactions
}




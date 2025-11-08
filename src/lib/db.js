// lib/db.js
// 在 Next.js 中用單例避免開發模式熱重載造成過多連線
import { Pool } from 'pg';

let pool = globalThis.__pgPool;
//執行npm run dev以後 會創造出一個所謂的全域變數
//這個全域變數就是globalThis
//接著從globalThis裡面找__pgPool的內容放進pool 但是一開始執行的時候 根本不會有__pgPool的內容
if (!pool) {
  pool = new Pool({
    //此區塊為開發時內容
    // user: process.env.DB_USER,
    // host: process.env.DB_HOST,
    // database: process.env.DB_DATABASE,
    // password: process.env.DB_PASSWORD,
    // port: Number(process.env.DB_PORT) || 5432,
    //此區塊為開發時內容

    //上傳至時Vercel請更改內容
    connectionString: process.env.DATABASE_URL,
    //上傳至時Vercel請更改內容
  });
  globalThis.__pgPool = pool;
}

export default pool;
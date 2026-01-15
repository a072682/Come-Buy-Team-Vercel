import { Pool } from "pg";

// 先宣告資料庫通道
let pool;

// 防止 Hot Reload 在開發時建立多個 Pool
if (!global.pgPool) {
    global.pgPool = new Pool({
        connectionString: process.env.DATABASE_URL,
        //process.env.DATABASE_URL 意思是讀取.env檔案中DATABASE_URL的內容
        //如果是雲端設定 通常是設定名稱為 DATABASE_URL 以及對應的內容
    });
}

pool = global.pgPool;

export default pool;
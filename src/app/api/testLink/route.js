


import { testLink } from "@/apiData/testLink/testLink";



export async function GET() {
  try {
    const data = await testLink();
    return Response.json(data);
  } catch (error) {
    console.error("資料庫連接錯誤", error);
    return Response.json(
      { message: "資料庫連接錯誤" },
      { status: 500 }
    );
  }
}



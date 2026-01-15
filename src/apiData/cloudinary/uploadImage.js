
//上傳圖片

// 引入環境變數
import cloudinary from "../utils/cloudinary/cloudinaryConfig";

export async function uploadImage(file, options = {}) {

    //建立folder預設值
    const {
        folder = "next_uploads",
    } = options;
  
    //如果圖片檔案不存在則回報錯誤
    if (!file) {
      throw new Error("圖片檔案不存在");
    }

    //Cloudinary 上傳圖片需要先轉換為2進制檔案(ArrayBuffer)
    //ArrayBuffer 為瀏覽器專用的2進制格式
    //由於轉換的過程需要時間因此也需要使用await
    const arrayBuffer = await file.arrayBuffer();
    //而Cloudinary是伺服器端
    //Buffer 是伺服器端的2進制格式 與ArrayBuffer相似但格式不同
    const buffer = Buffer.from(arrayBuffer);

    //創造Promise環境確保upload_stream執行完成以後可以得到回報的資料
    const uploadResult = await new Promise((resolve, reject) => {
        //cloudinary圖片上傳函式本體
        //upload_stream本身不做上傳的動作只負責給予上傳到cloudinary權限
        //跟做上傳的設定，例如要傳到哪個資料夾之類的以及上傳後要給予甚麼資料等等
        const uploadStream = cloudinary.uploader.upload_stream(
            // 可選：上傳資料夾
            { 
              folder,
            }, 
            (error, result) => {
                // 如果有錯誤則回報
                if (error) {
                    reject(error);
                }
                else{
                    resolve(result);
                } 
            }
        );
        //.end是最後的資料已經寫入，並宣告「寫入完成」
        //upload_stream偵測到最後的資料寫入後就會執行資料上傳的動作
        uploadStream.end(buffer);
    });

    return {
        public_id: uploadResult.public_id,
        url: uploadResult.secure_url,
        width: uploadResult.width,
        height: uploadResult.height,
        format: uploadResult.format,
    };
}

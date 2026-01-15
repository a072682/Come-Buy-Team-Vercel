
//取得圖片(資料夾)

// 引入環境變數
import cloudinary from "../utils/cloudinary/cloudinaryConfig";

export async function getImagesByFolder(folder, options = {}) {

    if (!folder) {
        throw new Error("folder 不存在，無法取得圖片清單");
    }

    //取得圖片數量預設值
    const {
        maxResults = 50,
    } = options;

    const result = await cloudinary.api.resources({
        type: "upload",
        prefix: folder,
        max_results: maxResults,
    });

    return result.resources.map((item) => (
        {
            public_id: item.public_id,
            url: item.secure_url,
            width: item.width,
            height: item.height,
            format: item.format,
            bytes: item.bytes,
            created_at: item.created_at,
        }
    ));
}

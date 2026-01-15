//將空字串或只包含空白的字串轉為 null

export function trimToNull(data) {
  if (data == null) return null;                  
  // 如果進來的資料為null則直接回覆null
  if (typeof data === 'string') {
  // 如果進來的資料類型是字串則運行以下內容
    const newData = data.trim();
    //對data去掉前後空白並將數值給予newData
    return newData === '' ? null : newData;                
    //如果newData是空字串("")則回覆null否則就原樣回覆
  }
  return data;                                    
  // 其他型別維持原樣（通常不會用到）
}

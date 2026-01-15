

//外部輸入的資料可以像是這樣("admin")或("admin", "vip")
//複數輸入
//...roles會自動轉為陣列
export function allowRoles(...roles) {
    //user為使用者登入的資料
    //外部引用時候需要引進兩組資料
    //像是allowRoles("admin")(user);
    return function (user) {
        
        //如果資料來源不包含user.role則回報錯誤
        if (!roles.includes(user.role)) {
            return {
                pass: false,
                status: 403,
                data: { error: "權限不足" },
            };
        }

        return {
            pass: true,
        };
    };
}



"use client";

// import { Modal } from "bootstrap" 移除
import { useEffect, useId, useState } from "react" //useRef 移除
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import LoginCss from "./_Login.module.scss";
import { checkLogin, loginUser } from "@/store/slice/loginSlice";



//setHandleLoginPageModal,loginModalShow,setLoginModalShow 都移除

function Login ({onClose,onSwitch}){

    //#region
    //#endregion

    //#region 跳轉網址前置宣告
        const navigate = useRouter();
    //#endregion

    //#region 讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region
        //useId() 產生唯一 id，避免彼此衝突
        const loginEmail = useId();       // 例如: :r1:-email
        const loginPassword = useId();    // 例如: :r1:-password
    //#endregion
    

    //#region 帳號資料初始狀態
        //帳號資料初始狀態
            const [account,setAccount]=useState({
                email:"",
                password:""
            });
        //帳號資料初始狀態
    //#endregion

    //#region 帳號資料輸入處理
        //帳號資料輸入處理
            const handleInputChange = (event)=>{
                const{ value, name }= event.target;
                setAccount({
                    ...account,
                    [name]:value
                })
            }
        //帳號資料輸入處理
    //#endregion
    
    //#region 宣告錯誤訊息狀態
        const [emailErrorMsg,setEmailErrorMsg] = useState("");
        useEffect(()=>{},[emailErrorMsg]);
        const [passWordErrorMsg,setPassWordErrorMsg] = useState("");
        useEffect(()=>{},[passWordErrorMsg]);
        const [errorMsg,setErrorMsg] = useState("");
        useEffect(()=>{},[errorMsg]);
    //#endregion

    //#region 確認錯誤訊息函式
        const errorsMsgCheck = () => {
            // 先清空舊錯誤
            setEmailErrorMsg('');
            setPassWordErrorMsg('');

            let ok = true;

            const email = (account?.email ?? '').toString().trim();
            const passWord  = (account?.password ?? '').toString().trim();

            if (!email) {
                setEmailErrorMsg('請填寫信箱');
                ok = false;
            }else if(email.length < 6){
                setEmailErrorMsg('信箱至少需 6 碼');
                ok = false;
            }

            if (!passWord) {
                setPassWordErrorMsg('請填寫新密碼');
                ok = false;
            }else if(passWord.length < 6){
                setPassWordErrorMsg('密碼至少需 6 碼');
                ok = false;
            }

            return ok;  // ✅ 回傳是否通過
        };
    //#endregion

    //#region 會員登入函式
        //會員登入函式
        const handleLogin = async(event)=>{

            event.preventDefault();

            // 有錯就中斷，不要送出
            if (!errorsMsgCheck()){
                return; 
            }
            // 有錯就中斷，不要送出
            try{
                await dispatch(loginUser(account)).unwrap();
                console.log("成功登入aaa:");
                await dispatch(checkLogin()).unwrap();
                console.log("我有執行完成:");
                //由外部關閉
                onClose?.();
                navigate.push("/#top");
                //前端使用.unwrap() 配合後端 rejectWithValue搭配使用
                setAccount({
                    email:"",
                    password:""
                });
                setEmailErrorMsg("");
                setPassWordErrorMsg("");
                setErrorMsg("")
            }catch(error){
                console.log("登入失敗",error);
                setErrorMsg(error.error);
            }
        }
        //會員登入函式
    //#endregion

    //#region google登入api
        // const handleGoogleLogin = async() => {
        //     try{
        //         await dispatch(userGoogleLogin()).unwrap();
        //     }catch(error){
        //         console.log(error);
        //     }
        // };
    //#endregion

    //#region 點背景遮罩時Modal關閉,點內容不關
        const handleBackdropClick = (e) => {
            if (e.target === e.currentTarget) onClose?.();
        };
    //#endregion

    

        

    


    return(
        <>
            {/* 遮罩 */}
            <div
                className={`${LoginCss.loginModal} ${LoginCss.login}`}
                role="dialog"
                onClick={handleBackdropClick}
                aria-modal="true"
                tabIndex={-1}
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >

                {/* 定位至置中效果 */}
                <div className={`${LoginCss.modalDialog} modal-dialog-centered`} onClick={(e) => e.stopPropagation()}>

                    {/* model整體元件 */}
                    <div className={`${LoginCss.modalContent} border-0`}>

                        {/* header設定 */}
                        <div className={`${LoginCss.modalHeader} ${LoginCss.LoginModalHeaderBgSet}`}>
                            <button onClick={() => {
                                        //交給外部 onClose
                                        onClose?.();
                                        //清理本地表單狀態（可保留）
                                        setAccount({ email: "", password: "" });
                                        setEmailErrorMsg("");
                                        setPassWordErrorMsg("");
                                        setErrorMsg("");
                                    }} 
                                    type="button" 
                                    className={LoginCss.LoginModalBtnClose} 
                                    aria-label="Close"
                            >
                                <div className={LoginCss.imgBox}>
                                    <Image  className={LoginCss.materialPageModalBtnCloseImgSet} 
                                        src={"/images/LoginPage/btn-close.png"} 
                                        alt="Close"
                                        fill
                                        size="50px"
                                        priority
                                    />
                                </div>
                            </button>
                        </div>

                        {/* model本體背景 */}
                        <div className={LoginCss.LoginModalBodySet}>
                            <h3 className={LoginCss.titleSet}>會員登入</h3>
                            <form onSubmit={handleLogin} className={LoginCss.formSet}>
                                
                                <div className={LoginCss.emailGroup}>
                                    <label htmlFor={loginEmail}>Email address</label>
                                    <input  value={account.email} 
                                            onChange={handleInputChange} 
                                            name="email" 
                                            type="email" 
                                            className={`${LoginCss.formControl} bg-transparent text-nautral-white`} 
                                            id={loginEmail}
                                            placeholder="name@example.com" 
                                            autoComplete="email"
                                    />
                                    {emailErrorMsg && <div className="text-danger mt-1">{emailErrorMsg}</div>}
                                </div>
                                
                                <div className={LoginCss.passWordGroup}>
                                    <label htmlFor={loginPassword}>Password</label>
                                    <input  value={account.password} 
                                            onChange={handleInputChange} 
                                            name="password" 
                                            type="password" 
                                            className={`${LoginCss.formControl} bg-transparent text-nautral-white`}  
                                            id={loginPassword} 
                                            placeholder="Password" 
                                            autoComplete="current-password"
                                    />
                                    <button type='button' className="passWordBtn-set">忘記密碼?</button>
                                    {passWordErrorMsg && <div className="text-danger mt-1">{passWordErrorMsg}</div>}
                                </div>
                                
                                <div className={LoginCss.submitBtnGroup}>
                                    {errorMsg && <div className="text-danger mt-1">{errorMsg}</div>}
                                    <button type="onSubmit" className={`${LoginCss.formBtnSet} btn01Set`}>登入</button>

                                    <div className={LoginCss.registerPageBtnBox}>
                                        <span className={LoginCss.textSet}>還沒有帳號嗎？</span> 
                                        <button className={LoginCss.registerPageBtnSet} 
                                                onClick={() => {
                                                    //請外部切到 Register（ModalRoot → dispatch(open('register'))）
                                                    onSwitch?.();
                                                    //清理表單（可選）
                                                    setAccount({ email: "", password: "" });
                                                    setEmailErrorMsg("");
                                                    setPassWordErrorMsg("");
                                                    setErrorMsg("");
                                                }}>
                                            立即註冊
                                        </button>
                                    </div>
                                </div> 
                            </form>
                            
                            
                            <h3 className={LoginCss.otherTitleSet}>其他帳號登入</h3>
                            <button className={LoginCss.googleGroupSet}>
                                <div className={LoginCss.imgBox}>
                                    <Image  className={LoginCss.googleImgSet} 
                                        src={"/images/LoginPage/ic_google.png"}
                                        alt="google"
                                        fill
                                        priority
                                    />
                                </div>
                                <span className={LoginCss.textSet}>google帳號登入</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
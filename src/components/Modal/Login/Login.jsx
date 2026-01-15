
import './_Login.scss';
import { useEffect, useId, useState } from "react" //useRef 移除
import { checkLogin, loginUser, userGoogleLogin } from "@/store/slice/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";



function Login ({onClose, onSwitch}){

    //#region
    //#endregion

    //#region 跳轉網址前置宣告
        const router = useRouter();
    //#endregion

    //#region 讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region id宣告
    const loginEmail = useId();       // 例如: :r1:-email
    const loginPassword = useId();    // 例如: :r1:-password
    //useId() 產生唯一 id，避免彼此衝突
    //#endregion

    //#region 帳號資料初始狀態
        const [account,setAccount]=useState({
            email:"",
            password:""
        });
    //#endregion

    //#region 帳號資料輸入處理
        const handleInputChange = (event)=>{
            const{ value, name }= event.target;
            setAccount({
                ...account,
                [name]:value
            })
        }
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
        const handleLogin = async(event)=>{

            event.preventDefault();

            // 有錯就中斷，不要送出
            if (!errorsMsgCheck()){
                return; 
            }
            // 有錯就中斷，不要送出
            try{
                await dispatch(loginUser(account)).unwrap();
                // console.log("成功登入:", data);
                await dispatch(checkLogin()).unwrap();
                //由外部關閉
                onClose?.();
                router.push("/");
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
    //#endregion
    
    //#region 控制上一頁問題 整個移除
        //控制上一頁問題
            // useEffect(() => {
            //     if (loginModalShow || registerPageModalShow) {
            //         document.body.style.overflow = "hidden"; // 🔒 禁止滾動
            //         console.log("滾動鎖住");
            //     }else if(!loginModalShow && !registerPageModalShow){
            //         document.body.style.overflow = "auto"; // ✅ 恢復滾動
            //         console.log("滾動解除");
            //     }
            //     return () => {
            //         console.log("組件解散");
            //         setAccount({
            //             email:"",
            //             password:""
            //         });
            //         setEmailErrorMsg("");
            //         setPassWordErrorMsg("");
            //         setErrorMsg("");
            //     };
            // }, [loginModalShow,registerPageModalShow]);
        //控制上一頁問題
    //#endregion

    //#region google登入api
        const handleGoogleLogin = () => {
            window.location.href = '/api/auth/google/googleLogin';
        };
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
                className="modalSet login" 
                role="dialog"
                onClick={handleBackdropClick}
                aria-modal="true"
                tabIndex={-1}
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >

                {/* 定位至置中效果 */}
                <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>

                    {/* model整體元件 */}
                    <div className="modal-content border-0 ">

                        {/* header設定 */}
                        <div className="modal-header LoginModalHeaderBgSet">
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
                                    className="LoginModalBtnClose" 
                                    aria-label="Close"
                            >
                                <img className="materialPageModalBtnCloseImgSet" src={`/images/LoginPage/btn-close.png`} alt="Close" />
                            </button>
                        </div>

                        {/* model本體背景 */}
                        <div className="LoginModal-body-set">
                            <h3 className="title-set">會員登入</h3>
                            <form onSubmit={handleLogin} className="form-set">
                                
                                <div className="emailGroup">
                                    <label htmlFor={loginEmail}>Email address</label>
                                    <input  value={account.email} 
                                            onChange={handleInputChange} 
                                            name="email" 
                                            type="email" 
                                            className="form-control bg-transparent text-nautral-white" 
                                            id={loginEmail}
                                            placeholder="name@example.com" 
                                            autoComplete="email"
                                    />
                                    {emailErrorMsg && <div className="text-danger mt-1">{emailErrorMsg}</div>}
                                </div>
                                
                                <div className="passWordGroup">
                                    <label htmlFor={loginPassword}>Password</label>
                                    <input  value={account.password} 
                                            onChange={handleInputChange} 
                                            name="password" 
                                            type="password" 
                                            className="form-control bg-transparent text-nautral-white" 
                                            id={loginPassword} 
                                            placeholder="Password" 
                                            autoComplete="current-password"
                                    />
                                    {/* <button type='button' className="passWordBtn-set">忘記密碼?</button> */}
                                    {passWordErrorMsg && <div className="text-danger mt-1">{passWordErrorMsg}</div>}
                                </div>
                                
                                <div className="submitBtnGroup">
                                    {errorMsg && <div className="text-danger mt-1">{errorMsg}</div>}
                                    <button type="onSubmit" className="formBtn-set mian-btn1-set">登入</button>

                                    <div className='registerPageBtn-box'>
                                        <span className="text-set">還沒有帳號嗎？</span> 
                                        <button className="registerPageBtn-set" 
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
                            
                            
                            <h3 className="otherTitle-set">其他帳號登入</h3>
                            <button className="googleGroup-set" onClick={()=>{handleGoogleLogin()}}>
                                <img className="googleImg-set" src={`/images/LoginPage/ic_google.png`} alt="" />
                                <span className="text-set">google帳號登入</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
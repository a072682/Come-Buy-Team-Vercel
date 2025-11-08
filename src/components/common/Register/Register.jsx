
import { useEffect, useId, useState } from "react"
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Image from "next/image";
import RegisterCss from "./_Register.module.scss";
import { MODALS, open } from "@/store/slice/modalSlice";


function Register ({onClose, onSwitch}){

    const dispatch = useDispatch();
    const navigate = useRouter();

    const registerName = useId();       // 例如: :r1:-email
    const registerEmail = useId();    // 例如: :r1:-password
    const registerPassword = useId();
    //useId() 產生唯一 id，避免彼此衝突

    //#region
    //#endregion

    //#region 點背景遮罩時Modal關閉,點內容不關
        const handleBackdropClick = (e) => {
            if (e.target === e.currentTarget) onClose?.();
        };
    //#endregion

    //#region 帳號資料初始狀態
        //帳號資料初始狀態
            const [account,setAccount]=useState({
                username:"",
                email:"",
                password:""
            });
            useEffect(()=>{},[account]);
        //帳號資料初始狀態
    //#endregion
    
    //#region 錯誤訊息狀態
        const [usernameErrorMsg,setUsernameErrorMsg] = useState("");
        useEffect(()=>{},[usernameErrorMsg]); 
        const [emailErrorMsg,setEmailErrorMsg] = useState("");
        useEffect(()=>{},[emailErrorMsg]);
        const [passWordErrorMsg,setPassWordErrorMsg] = useState("");
        useEffect(()=>{},[passWordErrorMsg]);
        const[errorMessage,setErrorMessage]=useState("");
        useEffect(()=>{"是否有寫入???",errorMessage},[errorMessage]);
    //#endregion

    //#region 確認錯誤訊息函式
        const errorsMsgCheck = () => {
            // 先清空舊錯誤
            setUsernameErrorMsg('');
            setEmailErrorMsg('');
            setPassWordErrorMsg('');

            let ok = true;

            const username = (account?.username ?? '').toString().trim();
            const email = (account?.email ?? '').toString().trim();
            const passWord  = (account?.password ?? '').toString().trim();

            if (!username) {
                setUsernameErrorMsg('請填寫用戶名稱');
                ok = false;
            }

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

            return ok; 
        };
    //#endregion   

    //#region 帳號資料輸入函式
        const handleInputChange = (event)=>{
            const{ value, name }= event.target;
            setAccount({
                ...account,
                [name]:value
            })
        }
    //#endregion

    //#region 會員創建函式
        const handleRegister = async(event)=>{

            event.preventDefault();

            // 有錯就中斷，不要送出
                if (!errorsMsgCheck()){
                    console.log("這邊錯誤");
                    return; 
                }
            // 有錯就中斷，不要送出
            
            try{
                console.log("有成功");
                // await dispatch(createUserData(account)).unwrap(); 
                setAccount({
                    username:"",
                    email:"",
                    password:""
                });
                setUsernameErrorMsg("");
                setEmailErrorMsg("");
                setPassWordErrorMsg("");
                setErrorMessage("");
                dispatch(open(MODALS.RegisterSuccessModel));
                // onClose?.();
                console.log("被關閉");
            }catch(error){
                console.log("加入會員失敗(error)",error);
                setErrorMessage(error.error);
            }
        }
    //#endregion


    return(
        <>
            {/* 遮罩 */}
            <div    className={`${RegisterCss.registerModal} ${RegisterCss.register}`}
                    onClick={handleBackdropClick}
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                {/* 定位至置中效果 */}
                <div className={`${RegisterCss.modalDialog} modal-dialog-centered`}>

                    {/* model整體元件 */}
                    <div className={`${RegisterCss.modalContent} border-0`}>

                        {/* header設定 */}
                        <div className={`${RegisterCss.modalHeader} ${RegisterCss.RegisterModalHeaderBgSet}`}>
                            <button onClick={()=>{  onClose?.();
                                                    setAccount({
                                                        username:"",
                                                        email:"",
                                                        password:""
                                                    });
                                                    setUsernameErrorMsg("");
                                                    setEmailErrorMsg("");
                                                    setPassWordErrorMsg("");
                                                    setErrorMessage("");
                            }} 
                            type="button" 
                            className={RegisterCss.RegisterModalBtnClose} 
                            aria-label="Close">
                                <Image  className={RegisterCss.materialPageModalBtnCloseImgSet} 
                                        src={`/images/RegisterPage/btn-close.png`} 
                                        alt="Close"
                                        fill
                                        size="50px"
                                        priority
                                />
                            </button>
                        </div>

                        {/* model本體背景 */}
                        <div className={RegisterCss.RegisterModalBodySet}>
                            <h2 className={RegisterCss.titleSet}>會員登入</h2>
                            <form onSubmit={handleRegister} className={RegisterCss.formSet}>

                                <div className={RegisterCss.nameGroup}>
                                    <label htmlFor={registerName}>Name</label>
                                    <input  value={account.username} 
                                            onChange={handleInputChange} 
                                            name="username" 
                                            type="name" 
                                            className="form-control bg-transparent text-nautral-white" 
                                            id={registerName} 
                                            placeholder="name"
                                            autoComplete="username"
                                    />
                                    {usernameErrorMsg && <div className="text-danger mt-1">{usernameErrorMsg}</div>}
                                </div>
                                
                                <div className={RegisterCss.emailGroup}>
                                    <label htmlFor={registerEmail}>Email address</label>
                                    <input  value={account.email} 
                                            onChange={handleInputChange} 
                                            name="email" 
                                            type="email" 
                                            className="form-control bg-transparent text-nautral-white" 
                                            id={registerEmail} 
                                            placeholder="name@example.com" 
                                            autoComplete="email"
                                    />
                                    {emailErrorMsg && <div className="text-danger mt-1">{emailErrorMsg}</div>}
                                </div>
                                
                                <div className={RegisterCss.passWordGroup}>
                                    <label htmlFor={registerPassword}>Password</label>
                                    <input  value={account.password} 
                                            onChange={handleInputChange} 
                                            name="password" 
                                            type="password" 
                                            className="form-control bg-transparent text-nautral-white" 
                                            id={registerPassword} 
                                            placeholder="Password" 
                                            autoComplete="password"
                                    />
                                    {passWordErrorMsg && <div className="text-danger mt-1">{passWordErrorMsg}</div>}
                                </div>

                                <div className={`${RegisterCss.errorMessageBox} ${errorMessage?("d-block"):("d-none")}`}>
                                    <div className={RegisterCss.errorMessage}>{errorMessage}</div>
                                </div>
                                
                                <div className={RegisterCss.submitBtnGroup}>
                                    <button type="onSubmit" 
                                            className={`${RegisterCss.formBtnSet} btn01Set`}
                                    >
                                        加入會員
                                    </button>

                                    <div className={RegisterCss.registerPageBtnBox}>
                                        <span className={RegisterCss.textSet}>已有帳號了嗎？</span> 
                                        <button className={RegisterCss.registerPageBtnSet} 
                                                onClick={()=>{  onSwitch?.();
                                                                setAccount({
                                                                    username:"",
                                                                    email:"",
                                                                    password:""
                                                                });
                                                                setUsernameErrorMsg("");
                                                                setEmailErrorMsg("");
                                                                setPassWordErrorMsg("");
                                                                setErrorMessage("");
                                        }}>
                                            立即登入
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register
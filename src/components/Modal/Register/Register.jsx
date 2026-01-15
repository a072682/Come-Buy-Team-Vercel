
import { useEffect, useId, useState } from "react"
import { createUserData } from "@/store/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import './_Register.scss';
import { MODALS, open } from "@/store/slice/modalSlice";


function Register ({onClose, onSwitch}){

    const dispatch = useDispatch();

    const registerName = useId();       // 例如: :r1:-email
    const registerEmail = useId();    // 例如: :r1:-password
    const registerPassword = useId();
    //useId() 產生唯一 id，避免彼此衝突

    //#region
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
                return; 
            }
        // 有錯就中斷，不要送出
        
        

        try{
            //執行創建會員api
            await dispatch(createUserData(account)).unwrap(); 
            //開啟創建會員確認視窗
            dispatch(open(MODALS.RegisterSuccessModel));
            //關閉視窗
            onClose?.();
            //輸入欄資料初始化
            setAccount({
                username:"",
                email:"",
                password:""
            });
            setUsernameErrorMsg("");
            setEmailErrorMsg("");
            setPassWordErrorMsg("");
            setErrorMessage("");
            //輸入欄資料初始化
        }catch(error){
            console.log("加入會員失敗(error)",error);
            setErrorMessage(error.message);
        }
    }
    //#endregion


    return(
        <>
            {/* 遮罩 */}
            <div className="modalSet register" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                {/* 定位至置中效果 */}
                <div className="modal-dialog modal-dialog-centered">

                    {/* model整體元件 */}
                    <div className="modal-content border-0">

                        {/* header設定 */}
                        <div className="modal-header RegisterModalHeaderBgSet">
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
                            className="RegisterModalBtnClose" 
                            aria-label="Close">
                                <img className="materialPageModalBtnCloseImgSet" src={`/images/RegisterPage/btn-close.png`} alt="Close" />
                            </button>
                        </div>

                        {/* model本體背景 */}
                        <div className="RegisterModal-body-set">
                            <h3 className="title-set">會員登入</h3>
                            <form onSubmit={handleRegister} className="form-set">

                                <div className="nameGroup">
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
                                
                                <div className="emailGroup">
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
                                
                                <div className="passWordGroup">
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

                                <div className={`errorMessage-box ${errorMessage?("d-block"):("d-none")}`}>
                                    <div className="errorMessage">{errorMessage}</div>
                                </div>
                                
                                <div className="submitBtnGroup">
                                    <button type="onSubmit" className="formBtn-set mian-btn1-set">加入會員</button>

                                    <div className='registerPageBtn-box'>
                                        <span className="text-set">已有帳號了嗎？</span> 
                                        <button className="registerPageBtn-set" 
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
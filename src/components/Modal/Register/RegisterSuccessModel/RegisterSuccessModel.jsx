


function RegisterSuccessModel({onClose}){

    return(
        <>
            <div    className="modalSet registerSuccessModel" 
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal">
                    <div className="modal-content border-0 shadow">
                        <div className="aboutUsModalSet">
                            <div className="row">
                                <div className="col-12">
                                    <div className="oEstimate-main3-btn01-box w-100 p-32 fs-16 fw-500 lh-15 text-nautral-white bg-primary1 outline-0
                                                    d-flex rounded-3">
                                        會員創立成功，請稍後回到首頁後重新登入。
                                        <button onClick={()=>{onClose?.();}} type="button" className="ms-auto btn-close" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterSuccessModel;
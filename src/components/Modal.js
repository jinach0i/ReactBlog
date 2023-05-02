export default function Modal(props) {
    return (
        <div className="modalWrap">
            <div className="modal">
                <h4>{props.titles[0]}
                <button onClick={()=>{return(props.titles[1])}} className="chTitleBtn">최근제목으로</button>
                <button className="closeBtn" onClick={()=>{
                    const savConfirmed=window.confirm('수정한 내용을 저장하지 않고 창을 닫으시겠습니까?');
                    if (savConfirmed){props.setModal(!props.modal)}else{return ""}
                }}>X</button>
            </h4>
                <p>날짜</p>
                <textarea placeholder="Click to edit" ></textarea>
                <button className="saveBtn" onClick={()=>{alert('저장이 완료되었습니다.')}}>저장</button>
            </div>
        </div>
    )
};
export default function Modal(props) {
    return (
        <div className="modalWrap">
            <div className="modal">
                <h4>{props.titles[0]}<button onClick={()=>{return(props.titles[1])}} className="chTitleBtn">최근제목으로</button></h4>
                <p>날짜</p>
                <textarea placeholder="Click to edit" ></textarea>
                <button className="saveBtn">저장</button>
            </div>
        </div>
    )
};

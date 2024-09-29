//import 라이브러리
import React from "react";
import { Link } from 'react-router-dom';

import '../../css/board.css';

const ItemBoard = (props) => {

    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const {board, delBoard} = props;

    /*---일반 변수--------------------------------*/
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    
    return (
        <>
            <tr id="boards">
                <td>{board.no}</td>
                <td className="text-left"><Link to={`/boardread?no=${board.no}`} rel="noreferrer noopener">{board.title}</Link></td>
                <td>{board.name}</td>
                <td>{board.hit}</td>
                <td>{board.regDate}</td>
                <td>
                {authUser && authUser.no === board.userNo ? ( 
                <button className="btn_del" type="button" onClick={() => delBoard(board.no)}>[삭제]</button>
                ) : null}
                </td>
            </tr>
        </>
    );
}
export default ItemBoard;
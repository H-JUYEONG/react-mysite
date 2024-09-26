//import 라이브러리
import React from "react";
import { Link } from 'react-router-dom';

import '../../css/guestbook.css';

const ItemGuest = (props) => {

    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const {guest} = props;
    
    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    
    return (
        <>
            <table className="guestRead">
                <colgroup>
                    <col style={{width: '10%'}} />
                        <col style={{width: '40%'}}/>
                        <col style={{width: '40%'}} />
                        <col style={{width: '10%'}}/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>{guest.no}</td>
                            <td>{guest.name}</td>
                            <td>{guest.regDate}</td>
                            <td><Link to={`/guestdeleteform/${guest.no}`} className="btn_s" rel="noreferrer noopener">[삭제]</Link></td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="text-left">{guest.content}</td>
                        </tr>
                    </tbody>
            </table>
            {/* <!-- //guestRead --> */}
        </>
    );
}
export default ItemGuest;
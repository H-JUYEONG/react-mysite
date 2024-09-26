//import 라이브러리
import React, { useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/guestbook.css';
import Header from '../include/Header';
import Footer from '../include/Footer';

const DeleteForm = () => {

    /*---라우터 관련-------------------------------*/
    const {no} = useParams();
    const navigate = useNavigate();
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [password, setPassword] = useState('');
    
    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    // 패스워드
    const handelPssword = (e) => {
        setPassword(e.target.value);
    }

    const handleDel = (e) => {
        e.preventDefault();

        let guestVo = {
            password: password
        }
        console.log(guestVo);

        axios({
            method: 'delete',
            url: `http://localhost:9000/api/guests/${no}`,

            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: guestVo,

            responseType: 'json'
        }).then(response => {
            console.log(response);
            if(response.data.result === 'success'){
                navigate('/guestbooklist');
            }else{
                alert('비밀번호가 일치하지 않습니다.');
            }
        });

    }
    
    return (
        <>
            <div id="wrap">
                <Header/>
                {/* <!-- //header + nav --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>방명록</h2>
                        <ul>
                            <li>일반방명록</li>
                            <li>ajax방명록</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">
                    
                        <div id="content-head">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="guestbook">
                            <form action="" method="" onSubmit={handleDel}>
                                <table id="guestDelete">
                                    <colgroup>
                                        <col style={{width: '10%'}}/>
                                        <col style={{width: '40%'}}/>
                                        <col style={{width: '25%'}}/>
                                        <col style={{width: '25%'}}/>
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td>비밀번호</td>
                                            <td><input type="password" name="pass" value={password} onChange={handelPssword}/></td>
                                            <td className="text-left"><button type="submit">삭제</button></td>
                                            <td><Link to="/" className="btn_s" rel="noreferrer noopener">[메인으로 돌아가기]</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                            
                        </div>
                        {/* <!-- //guestbook --> */}
                    </div>
                    {/* <!-- //content  --> */}

                </div>
                {/* <!-- //container  --> */}

                <Footer/>
                {/* <!-- //footer --> */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}
export default DeleteForm;
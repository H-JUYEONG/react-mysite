//import 라이브러리
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import '../../css/board.css';
import Header from '../include/Header';
import Footer from '../include/Footer';


const BoardRead = () => {

    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    // board 번호 파라미터로 가져오기
    const [searchParams] = useSearchParams();
    const no = searchParams.get('no');

    const [userNo, setUserNo] = useState('');
    const [name, setName] = useState('');
    const [hit, setHit] = useState('');
    const [regDate, setRegDate] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContet] = useState('');

    console.log(userNo);
    
    /*---일반 변수--------------------------------*/
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    useEffect(() => {

        axios({
            method: 'get', 			// put, post, delete                   
            url: `${process.env.REACT_APP_API_URL}/api/boards/${no}`,

            params: { no: no },

            responseType: 'json' //수신타입
          }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수 신데이타
            console.log(response.data.apiData); //수신데이타

            if(response.data.result === 'success') { 
                // 성공로직
                setUserNo(response.data.apiData.userNo);
                setName(response.data.apiData.name);
                setHit(response.data.apiData.hit);
                setRegDate(response.data.apiData.regDate);
                setTitle(response.data.apiData.title);
                setContet(response.data.apiData.content);

              } else {
                alert("조회 실패");
              }

          }).catch(error => {
            console.log(error);
        });

    }, [no]);


    return (
        <>
            <div id="wrap">

                <Header/>
                {/* <!-- //header + nav --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>게시판</h2>
                        <ul>
                            <li><Link to="#" rel="noreferrer noopener">일반게시판</Link></li>
                            <li><Link to="#" rel="noreferrer noopener">댓글게시판</Link></li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">

                        <div id="content-head">
                            <h3>일반게시판</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>게시판</li>
                                    <li className="last">일반게시판</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="board">
                            <div id="read">
                                <form action="#" method="get">
                                    {/* <!-- 작성자 --> */}
                                    <div className="form-group">
                                        <span className="form-text">작성자</span>
                                        <span className="form-value">{name}</span>
                                    </div>
                                    
                                    {/* <!-- 조회수 --> */}
                                    <div className="form-group">
                                        <span className="form-text">조회수</span>
                                        <span className="form-value">{hit}</span>
                                    </div>
                                    
                                    {/* <!-- 작성일 --> */}
                                    <div className="form-group">
                                        <span className="form-text">작성일</span>
                                        <span className="form-value">{regDate}</span>
                                    </div>
                                    
                                    {/* <!-- 제목 --> */}
                                    <div className="form-group">
                                        <span className="form-text">제 목</span>
                                        <span className="form-value">{title}</span>
                                    </div>
                                
                                    {/* <!-- 내용 --> */}
                                    <div id="txt-content">
                                        <span className="form-value" >
                                            {content}<br/>
                                        </span>
                                    </div>
                                    {authUser && authUser.no === userNo ? (
                                    <Link to={`/boardmodifyform?no=${no}`} id="btn_modify" rel="noreferrer noopener">수정</Link>
                                    ) : null}
                                    <Link to="/boardlist" id="btn_modify" rel="noreferrer noopener">목록</Link>
                                </form>
                                {/* <!-- //form --> */}
                            </div>
                            {/* <!-- //read --> */}
                        </div>
                        {/* <!-- //board --> */}
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
export default BoardRead;
//import 라이브러리
import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/board.css';
import Header from '../include/Header';
import Footer from '../include/Footer';

const BoardModifyForm = () => {

    /*---라우터 관련-------------------------------*/
    const navigate = useNavigate();
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
        // board 번호 파라미터로 가져오기
    const [searchParams] = useSearchParams();
    const no = searchParams.get('no');

    //const [userNo, setUserNo] = useState();
    const [name, setName] = useState('');
    const [hit, setHit] = useState('');
    const [regDate, setRegDate] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    useEffect(() => {
        console.log('마운트 되었을때');

        axios({
            method: 'get', 			// put, post, delete                   
            url: `http://localhost:9000/api/boards/modify/${no}`,

            params: { no: no },

            responseType: 'json' //수신타입
          }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타
            console.log(response.data.apiData); //수신데이타

            if(response.data.result === 'success') { 
                // 성공로직
                //setUserNo(response.data.apiData.userNo);
                setName(response.data.apiData.name);
                setHit(response.data.apiData.hit);
                setRegDate(response.data.apiData.regDate);
                setTitle(response.data.apiData.title);
                setContent(response.data.apiData.content);

              } else {
                alert("조회 실패");
              }

          }).catch(error => {
            console.log(error);
        });

    }, [no]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }

    // 수정 버튼 클릭
    const handleModify = (e) => {
        e.preventDefault();

        const boardVo = {
            title: title,
            content: content
        }
        console.log(boardVo);
        
        axios({
            method: 'put', 		 	// put, post, delete                   
            url: `http://localhost:9000/api/boards/${no}`,

            headers: { "Content-Type": "application/json; charset=utf-8" },
            
            params: { no: no },
            data: boardVo,
        
            responseType: 'json' //수신타입
          }).then(response => {
            // console.log(response); //수신데이타
            // console.log(response.data); //수신데이타
            console.log(response.data.apiData); //수신데이타

            if(response.data.result === 'success') {
                //성공 로직
                navigate("/boardlist");
              } else {
                alert(response.data.message);
              }



          }).catch(error => {
            console.log(error);
        });
    }
    
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
                        <div id="modifyForm">
                            <form action="#" method="get" onSubmit={handleModify}>
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
                                    <label className="form-text" htmlFor="txt-title">제목</label>
                                    <input type="text" id="txt-title" name="" value={title} onChange={handleTitle}/>
                                </div>
                            
                                {/* <!-- 내용 --> */}
                                <div className="form-group">
                                    <textarea id="txt-content" value={content} onChange={handleContent}></textarea>
                                </div>
                                
                                <Link to="#" id="btn_cancel" rel="noreferrer noopener">취소</Link>
                                <button id="btn_modify" type="submit" >수정</button>
                                
                            </form>
                            {/* <!-- //form --> */}
                        </div>
                        {/* <!-- //modifyForm --> */}
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
export default BoardModifyForm;
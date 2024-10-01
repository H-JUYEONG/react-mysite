//import 라이브러리
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// import 컴포넌트
import ItemBoard from './ItemBoard';
import '../../css/board.css';
import Header from '../include/Header';
import Footer from '../include/Footer';

const BoardList2 = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [boardList, setBoardList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [crtpage, setCrtpage] = useState('');
    const [prev, setPrev] = useState('');
    const [startPageBtnNo, setStartPageBtnNo] = useState('');
    const [endPageBtnNo, setEndPageBtnNo] = useState('');
    const [next, setNext] = useState('');

    /*---일반 변수--------------------------------*/
  
    /*---일반 메소드 -----------------------------*/
    const getBoardList = () => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/api/boards2/list`,
            params: { keyword: keyword, crtpage: crtpage },
            responseType: 'json',
        }).then(response => {
            setBoardList(response.data.apiData.tboardList);
            setPrev(response.data.apiData.prev);
            setStartPageBtnNo(response.data.apiData.startPageBtnNo);
            setEndPageBtnNo(response.data.apiData.endPageBtnNo);
            setNext(response.data.apiData.next);
        }).catch(error => {
            console.log(error);
        });
    };

    /*---훅(useEffect)+이벤트(handle)메소드-------*/
        // 마운트 되었을때
	useEffect(() => {
		console.log("마운트 됐어요");

		// 서버에서 데이터 가져오기 그리기
		getBoardList();

	}, []);

    // 검색 키워드 입력
    const handleKeyword = (e) => {
        setKeyword(e.target.value);
    }

    // 검색 버튼 클릭
    const handleSearch = (e) => {
        e.preventDefault();
        getBoardList();	

    }

    // 삭제 버튼 클릭했을때
    const handleDel = (no) => {
		console.log("삭제버튼 클릭");

		axios({
			method: 'delete', 			// put, post, delete                   
			url: `${process.env.REACT_APP_API_URL}/api/boards/${no}`,
		
			responseType: 'json' //수신타입
		}).then(response => {
			//console.log(response); //수신데이터
			//console.log(response.data);

			if(response.data.result === 'success') {

				// 리스트(배열) boardList에서 방금 삭제한 값만 제거된 새로운 배열
				// 리턴이 있을때만 {} 를 ()로 바꾸고 retrun을 생략할 수 있음
				let newArray = boardList.filter((board) => (
					board.no !== no
				));

				setBoardList(newArray);

			} else {
				alert(response.data.message);
			}

		}).catch(error => {
			console.log(error);
		});
		
	};

    // 페이지 클릭
    const handleCrtpage = (page) => {
        setCrtpage(page);
        console.log(`page 선택한 페이지:${page}`);
        console.log(`crtpage 상태변수:${crtpage}`);
    }

    // 페이징 숫자 반복
    const arrLoop = () => {
        const newArray = [];
        for(let i = startPageBtnNo; i <= endPageBtnNo; i++) {
            newArray.push(<Link id="btn_page" key={i} to={`/boardlist2?crtpage=${i}&keyword=${keyword}`} rel="noreferrer noopener" onClick={() => handleCrtpage(i)}>{i}</Link>);
        }
        return newArray;
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
                        <li><Link to="/boardlist" rel="noreferrer noopener">일반게시판</Link></li>
                        <li><Link to="/boardlist2" rel="noreferrer noopener">댓글게시판</Link></li>
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
                        <div id="list">
                            <form action="" method="" onSubmit={handleSearch}>
                                <div className="form-group text-right">
                                    <input type="text" value={keyword} onChange={handleKeyword} />
                                    <button type="submit" id="btn_search">검색</button>
                                </div>
                            </form>
                            <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>글쓴이</th>
                                        <th>조회수</th>
                                        <th>작성일</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {boardList.map((boardVo) => {
                                    return (
                                        <ItemBoard key={boardVo.no} board={boardVo} delBoard={handleDel}/>
                                    )
                                    })}
                                </tbody>
                            </table>
                
                            <div id="paging">
                                <ul> 
                                    {prev ? (<li><Link id="direction" to={`/boardlist2?crtpage=${startPageBtnNo-1}&keyword=${keyword}`} rel="noreferrer noopener">◀</Link></li>) : null}
                                    {arrLoop()}
                                    {next ? (<li><Link id="direction" to={`/boardlist2?crtpage=${endPageBtnNo+1}&keyword=${keyword}`} rel="noreferrer noopener">▶</Link></li>) : null}
                                </ul>
                                <div className="clear"></div>
                            </div>
                            
                            <Link to="/BoardWriteForm" id="btn_write" rel="noreferrer noopener">글쓰기</Link>
                        
                        </div>
                        {/* <!-- //list --> */}
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
export default BoardList2;
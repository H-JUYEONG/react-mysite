//import 라이브러리
import React from "react";
import { Link } from 'react-router-dom';

import '../../css/board.css';

const BoardList = () => {

    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/

    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    
    return (
        <>
            <div id="wrap">
        
           
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
                        <div id="list">
                            <form action="" method="">
                                <div className="form-group text-right">
                                    <input type="text"/>
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
                                    <tr>
                                        <td>123</td>
                                        <td className="text-left"><Link to="#" rel="noreferrer noopener">게시판 게시글입니다.</Link></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><Link to="#" rel="noreferrer noopener">[삭제]</Link></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td className="text-left"><Link to="#" rel="noreferrer noopener">게시판 게시글입니다.</Link></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><Link to="#" rel="noreferrer noopener">[삭제]</Link></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td className="text-left"><Link to="#" rel="noreferrer noopener">게시판 게시글입니다.</Link></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><Link to="#" rel="noreferrer noopener">[삭제]</Link></td>
                                    </tr>
                                    <tr>
                                        <td>123</td>
                                        <td className="text-left"><Link to="#" rel="noreferrer noopener">게시판 게시글입니다.</Link></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><Link to="#" rel="noreferrer noopener">[삭제]</Link></td>
                                    </tr>
                                    <tr className="last">
                                        <td>123</td>
                                        <td className="text-left"><Link to="#" rel="noreferrer noopener">게시판 게시글입니다.</Link></td>
                                        <td>정우성</td>
                                        <td>1232</td>
                                        <td>2020-12-23</td>
                                        <td><Link to="#" rel="noreferrer noopener">[삭제]</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                
                            <div id="paging">
                                <ul>
                                    <li><Link to="#" rel="noreferrer noopener">◀</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">1</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">2</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">2</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">4</Link></li>
                                    <li className="active"><Link to="#" rel="noreferrer noopener">5</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">6</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">7</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">8</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">9</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">10</Link></li>
                                    <li><Link to="#" rel="noreferrer noopener">▶</Link></li>
                                </ul>
                                
                                
                                <div className="clear"></div>
                            </div>
                            
                            <Link to="#" id="btn_write" rel="noreferrer noopener">글쓰기</Link>
                        
                        </div>
                        {/* <!-- //list --> */}
                    </div>
                    {/* <!-- //board --> */}
                </div>
                {/* <!-- //content  --> */}

            </div>
            {/* <!-- //container  --> */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}
export default BoardList;
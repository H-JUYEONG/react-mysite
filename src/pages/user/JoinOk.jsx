//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/user.css';

const JoinOk = () => {
    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/

    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    return (
        <>
            <div id="wrap">

            <div id="header" className="clearfix">
			        <h1>
                        <Link to="#" rel="noreferrer noopener">MySite</Link>
			        </h1>

                    {/* <!-- 
                    <ul>
                        <li>황일영 님 안녕하세요^^</li>
                        <li><Link to="#" className="btn_s" rel="noreferrer noopener">로그아웃</Link></li>
                        <li><Link to="#" className="btn_s" rel="noreferrer noopener">회원정보수정</Link></li>
			        </ul>
			        -->	 */}
                    <ul>
                        <li><Link to="#" className="btn_s" rel="noreferrer noopener">로그인</Link></li>
                        <li><Link to="#" className="btn_s" rel="noreferrer noopener">회원가입</Link></li>
                    </ul>	
		        </div>
		        {/* <!-- //header --> */}

                <div id="nav">
                    <ul className="clearfix">
                        <li><Link to="#" rel="noreferrer noopener">입사지원서</Link></li>
                        <li><Link to="#" rel="noreferrer noopener">게시판</Link></li>
                        <li><Link to="#" rel="noreferrer noopener">갤러리</Link></li>
                        <li><Link to="#" rel="noreferrer noopener">방명록</Link></li>
                    </ul>
                </div>
                {/* <!-- //nav --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">
                    
                        <div id="content-head">
                            <h3>회원가입</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원가입</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="joinOK">
                            
                                <p className="text-large bold">
                                    회원가입을 축하합니다.<br/>
                                    <br/>
                                    <Link to="#" rel="noreferrer noopener">[로그인하기]</Link>
                                </p>
                                    
                            </div>
                            {/* <!-- //joinOK --> */}
                        </div>
                        {/* <!-- //user --> */}
                    </div>
                    {/* <!-- //content  --> */}
                </div>
                {/* <!-- //container  --> */}


                <div id="footer">
                    Copyright ⓒ 2024 황주영. All right reserved
                </div>
                {/* <!-- //footer --> */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}

export default JoinOk;
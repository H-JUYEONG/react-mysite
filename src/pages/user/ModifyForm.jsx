//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/user.css';

const ModifyForm = () => {
    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/

    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    return (
        <>
            <div id="wrap">

            <div id="header" class="clearfix">
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
                        <h3>회원정보</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>회원</li>
                                <li className="last">회원정보</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* <!-- //content-head --> */}

                    <div id="user">
                        <div id="modifyForm">
                            <form action="" method="">

                                {/* <!-- 아이디 --> */}
                                <div className="form-group">
                                    <label className="form-text" for="input-uid">아이디</label> 
                                    <span className="text-large bold">userid</span>
                                </div>

                                {/* <!-- 비밀번호 --> */}
                                <div className="form-group">
                                    <label className="form-text" for="input-pass">패스워드</label> 
                                    <input type="text" id="input-pass" name="" value="" placeholder="비밀번호를 입력하세요"	/>
                                </div>

                                {/* <!-- 이메일 --> */}
                                <div className="form-group">
                                    <label className="form-text" for="input-name">이름</label> 
                                    <input type="text" id="input-name" name="" value="" placeholder="이름을 입력하세요" />
                                </div>

                                {/* <!-- //성별 --> */}
                                <div className="form-group">
                                    <span className="form-text">성별</span> 
                                    
                                    <label for="rdo-male">남</label> 
                                    <input type="radio" id="rdo-male" name="" value="" /> 
                                    
                                    <label for="rdo-female">여</label> 
                                    <input type="radio" id="rdo-female" name="" value="" /> 

                                </div>

                                {/* <!-- 버튼영역 --> */}
                                <div className="button-area">
                                    <button type="submit" id="btn-submit">회원정보수정</button>
                                </div>
                                
                            </form>
                        
                        
                        </div>
                        {/* <!-- //modifyForm --> */}
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

export default ModifyForm;
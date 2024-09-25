//import 라이브러리
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../css/user.css';

const LoginForm = () => {
    
    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const navigate = useNavigate();

    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    // 아이디 
    const hadleId = (e) => {
        setId(e.target.value);
    }

    // 비밀번호
    const handlePw = (e) => {
        setPw(e.target.value);
    }

    // 로그인 버튼 클릭
    const handleLogin = (e) => {
        e.preventDefault();

        const userVo = {
            id: id,
            password: pw
        }
        console.log(userVo);
    }

    return (
        <>
            <div id="wrap">

            <div id="header" className="clearfix">
                <h1>
                <Link to="/main" rel="noreferrer noopener">MySite</Link>
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
                        <h3>로그인</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>회원</li>
                                <li className="last">로그인</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* <!-- //content-head --> */}

                    <div id="user">
                        <div id="loginForm">
                            <form action="" method="">

                                {/* <!-- 아이디 --> */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-uid">아이디</label> 
                                    <input type="text" id="input-uid" name="" value={id} placeholder="아이디를 입력하세요" onChange={hadleId} />
                                </div>

                                {/* <!-- 비밀번호 --> */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-pass">비밀번호</label> 
                                    <input type="text" id="input-pass" name="" value={pw} placeholder="비밀번호를 입력하세요" onChange={handlePw} />
                                </div>
                                
                                {/* <!-- 버튼영역 --> */}
                                <div className="button-area">
                                    <button type="submit" id="btn-submit" onClick={handleLogin}>로그인</button>
                                </div>
                                
                            </form>
                        </div>
                        {/* <!-- //loginForm --> */}
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

export default LoginForm;
//import 라이브러리
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/user.css';
import Header from '../include/Header';
import Footer from '../include/Footer';

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

        // 데이터 모으기 
        const userVo = {
            id: id,
            password: pw
        }
        console.log(userVo);

        // 전송
        axios({
            method: 'post', 			// put, post, delete                   
            url: 'http://localhost:9000/api/users/login',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: userVo,
        
            responseType: 'json' //수신타입
          }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타
            console.log(response.data.apiData); //수신데이타
        
            // 헤더에서 토큰 꺼내기
            const token = response.headers['authorization'].split(' ')[1];
            console.log(token);

            // 로컬스토리지에 토큰 저장
            localStorage.setItem("token", token); // "token"이라는 이름으로 token을 저장

            // 로컬스토리지에 authUser 저장
            /* 자바스크립트의 객체나 배열은 직접적으로 localStorage에 저장할 수 없다.
            JSON.stringify() 메서드를 사용하면 객체를 JSON 문자열로 변환하여 저장할 수 있습니다. */
            localStorage.setItem("authUser", JSON.stringify(response.data.apiData)); 

            if(response.data.apiData !== null) {
              //리다이렉트
              navigate("/main");
            } else {
              alert("로그인 실패");
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
                            <form action="" method="" onSubmit={handleLogin}>

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
                                    <button type="submit" id="btn-submit">로그인</button>
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

            <Footer/>
            {/* <!-- //footer --> */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}

export default LoginForm;
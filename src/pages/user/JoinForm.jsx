//import 라이브러리
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/user.css';
import Header from '../include/Header';
import Footer from '../include/Footer';

const JoinForm = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    // id 중복체크 상태
    const [idCheck, setIdCheck] = useState(''); // 중복 여부 상태
    const [message, setMessage] = useState(''); // 메시지 상태
    
    // 약관동의 체크
    const [agreedCheck, setAgreedCheck] = useState(false); // 체크박스 상태 관리

    const navigate = useNavigate();

    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    // 아이디
    const handleId = (e) => {
        setId(e.target.value);
    }

    // 패스워드
    const handlePw = (e) => {
        setPw(e.target.value);
    }

    // 이름
    const handleName = (e) => {
        setName(e.target.value);
    }

    // 성별
    const handleGender = (e) => {
        setGender(e.target.value);
    }

    // 아이디 중복체크
    const handleIdCheck = (e) => {

        axios({
			method: 'get', 			// put, post, delete                   
			url: `${process.env.REACT_APP_API_URL}/api/users/idcheck`,

            params: { id: id },
		
			responseType: 'json' //수신타입
		}).then(response => {
			console.log(response); //수신데이터

            if(response.data.result === 'success') {
                setMessage("사용 가능한 아이디입니다.");
                setIdCheck(false); // 중복 아님

              } else {
                setMessage("사용할 수 없는 아이디입니다.");
                setIdCheck(true); // 중복
              }

		}).catch(error => {
			console.log(error);
		});

    }

    // 약관동의 체크
    const handleAgreedCheck = (e) => {
        setAgreedCheck(!agreedCheck);
    }

    // 회원가입 버튼 클릭했을때
    const handleJoin = (e) => {
        e.preventDefault();

         // 아이디 입력 체크
        if (!id) {
        alert("아이디를 입력해야 합니다.");
        return;
        }

        // 비밀번호 입력 체크
        if (!pw) {
            alert("비밀번호를 입력해야 합니다.");
            return;
        }

        // 이름 입력 체크
        if (!name) {
            alert("이름을 입력해야 합니다.");
            return;
        }

        // 성별 입력 체크
        if (!gender) {
            alert("성별을 선택해야 합니다.");
            return;
        }

        // 약관 동의 체크
        if(!agreedCheck) {
            alert("서비스 약관에 동의해야 합니다.");
            return;
        }

        const userVo = {
            id: id,
            password: pw,
            name: name,
            gender: gender
        }
        console.log(userVo);

        axios({
            method: 'post', 			// put, post, delete                   
            url: `${process.env.REACT_APP_API_URL}/api/users`,
            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: userVo,
        
            responseType: 'json' //수신타입
          }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타
        
            if(response.data === 1) {
              //리다이렉트
              navigate("/joinok");
            } else {
              alert("회원가입 실패");
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
                        <div id="joinForm">
                            <form action="" method="">

                                {/* <!-- 아이디 --> */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-uid">아이디</label> 
                                    <input type="text" id="input-uid" name="" value={id} placeholder="아이디를 입력하세요" onChange={handleId}/>
                                    <button type="button" onClick={handleIdCheck}>중복체크</button>
                                </div>
                                <div id="idStatus" style={{ color: idCheck ? 'red' : 'blue' }}>{message}</div>

                                {/* <!-- 비밀번호 --> */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-pass">패스워드</label> 
                                    <input type="text" id="input-pass" name="" value={pw} placeholder="비밀번호를 입력하세요" onChange={handlePw}/>
                                </div>

                                {/* <!-- 이메일 --> */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-name">이름</label> 
                                    <input type="text" id="input-name" name="" value={name} placeholder="이름을 입력하세요" onChange={handleName} />
                                </div>

                                {/* <!-- //성별 --> */}
                                <div className="form-group">
                                    <span className="form-text">성별</span> 
                                    
                                    <label htmlFor="rdo-male">남</label> 
                                    <input type="radio" id="rdo-male" name="gender" value="male" onClick={handleGender}/> 
                                    
                                    <label htmlFor="rdo-female">여</label> 
                                    <input type="radio" id="rdo-female" name="gender" value="female" onClick={handleGender}/> 

                                </div>

                                {/* <!-- 약관동의 --> */}
                                <div className="form-group">
                                    <span className="form-text">약관동의</span> 
                                    
                                    <input type="checkbox" id="chk-agree" value="" name="" onChange={handleAgreedCheck} />
                                    <label htmlFor="chk-agree">서비스 약관에 동의합니다.</label> 
                                </div>
                                
                                {/* <!-- 버튼영역 --> */}
                                <div className="button-area">
                                    <button type="submit" id="btn-submit" onClick={handleJoin}>회원가입</button>
                                </div>
                                
                            </form>
                        </div>
                        {/* <!-- //joinForm --> */}
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

export default JoinForm;
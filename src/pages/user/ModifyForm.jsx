//import 라이브러리
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/user.css';
import Header from '../include/Header';
import Footer from '../include/Footer';

const ModifyForm = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

    /*---일반 변수--------------------------------*/
    const token = localStorage.getItem('token');
    console.log(token);

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    useEffect(() => {
        console.log('마운트 되었을때');

        axios({
            method: 'get', 			// put, post, delete                   
            url: `${process.env.REACT_APP_API_URL}/api/users/me`,
            headers: { "Authorization": `Bearer ${token}` },
        
            responseType: 'json' //수신타입
          }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타
            console.log(response.data.apiData); //수신데이타

            if(response.data.result === 'success') { 
                // 성공로직
                // useState 사용해서 값 대입
                setId(response.data.apiData.id);
                setPassword(response.data.apiData.password);
                setName(response.data.apiData.name);
                setGender(response.data.apiData.gender);
              } else {
                alert("회원정보 가져오기 실패");
              }

          }).catch(error => {
            console.log(error);
        });

    }, [token]);

    // 비밀번호 입력
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    // 이름 입력
    const handleName = (e) => {
        setName(e.target.value);
    }

    // 성별 선택
    const handleGender = (e) => {
        setGender(e.target.value);
    }

    // 수정버튼 클릭
    const handleModify = (e) => {
        e.preventDefault();

        const userVo = {
            password: password,
            name: name,
            gender: gender
        }
        console.log(userVo);

        axios({
            method: 'put', 			// put, post, delete                   
            url: `${process.env.REACT_APP_API_URL}/api/users/me`,

            headers: { "Content-Type": "application/json; charset=utf-8", 
                       "Authorization": `Bearer ${token}` },
            
            data: userVo,
        
            responseType: 'json' //수신타입
          }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타
            console.log(response.data.apiData); //수신데이타

            if(response.data.result === 'success') { 
                // 로컬스토리지의 authUser의 이름을 변경
                const authUser = response.data.apiData;
                localStorage.setItem("authUser", JSON.stringify(authUser));
                navigate("/");

              } else {
                alert("회원정보 수정 실패");
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
                            <form action="" method="" onSubmit={handleModify}>

                                {/* <!-- 아이디 --> */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-uid">아이디</label> 
                                    <span className="text-large bold">{id}</span>
                                </div>

                                {/* <!-- 비밀번호 --> */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-pass">패스워드</label> 
                                    <input type="text" id="input-pass" name="" value={password} placeholder="비밀번호를 입력하세요" onChange={handlePassword}	/>
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
                                    <input type="radio" id="rdo-male" name="gender" value="male" checked={gender === 'male'} onChange={handleGender}/> 
                                    
                                    <label htmlFor="rdo-female">여</label> 
                                    <input type="radio" id="rdo-female" name="gender" value="female" checked={gender === 'female'} onChange={handleGender}/> 

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

            <Footer/>
            {/* <!-- //footer --> */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}

export default ModifyForm;
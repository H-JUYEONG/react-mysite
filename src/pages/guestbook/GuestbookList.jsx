//import 라이브러리
import React, {useEffect, useState} from "react";
import axios from 'axios';

// import 컴포넌트
import ItemGuest from './ItemGuest';
import '../../css/guestbook.css';
import Header from '../include/Header';
import Footer from '../include/Footer';

const GuestbookList = () => {
    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');
    const [guestList, setGuestList] = useState([]);
    
    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    const getGuestList = () => {
        axios({
			method: 'get', 			// put, post, delete                   
			url: `${process.env.REACT_APP_API_URL}/api/guests`,
		
			responseType: 'json' //수신타입
		}).then(response => {
			console.log(response); //수신데이터
			setGuestList(response.data.apiData);

		}).catch(error => {
			console.log(error);
		});	
    }

    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    // 마운트 되었을때
	useEffect(() => {
		console.log("마운트 됐어요");

		// 서버에서 데이터 가져오기 그리기
		getGuestList();

	}, []);
    
    // 이름
    const handleName = (e) => {
        setName(e.target.value);
    }

    // 패스워드
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    // 내용 입력
    const handleContent = (e) => {
        setContent(e.target.value);
    }

    // 등록 버튼
    const handleAdd = (e) => {
        e.preventDefault();

        const guestVo = {
            name: name,
            password: password,
            content: content
        }
        console.log(guestVo);

        axios({
            method: 'post', 			// put, post, delete                   
            url: `${process.env.REACT_APP_API_URL}/api/guests`,
            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: guestVo,
        
            responseType: 'json' //수신타입
          }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            // 데이터 등록 후 리스트 다시 가져오기
            getGuestList();
            setName(''); // 입력 필드 초기화
            setPassword(''); // 입력 필드 초기화
            setContent(''); // 입력 필드 초기화
        
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
                        <h2>방명록</h2>
                        <ul>
                            <li>일반방명록</li>
                            <li>ajax방명록</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">
                        
                        <div id="content-head" className="clearfix">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="guestbook">
                            <form action="" method="" onSubmit={handleAdd}>
                                <table id="guestAdd">
                                    <colgroup>
                                        <col style={{width: '70px'}} />
                                        <col/>
                                        <col style={{width: '70px'}} />
                                        <col/>
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th><label className="form-text" htmlFor="input-uname">이름</label></th>
                                            <td><input id="input-uname" type="text" name="name" value={name} onChange={handleName} /></td>
                                            <th><label className="form-text" htmlFor="input-pass">패스워드</label></th>
                                            <td><input id="input-pass"type="password" name="pass" value={password} onChange={handlePassword} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4"><textarea name="content" cols="72" rows="5" value={content} onChange={handleContent}></textarea></td>
                                        </tr>
                                        <tr className="button-area">
                                            <td colSpan="4" className="text-center"><button type="submit">등록</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <!-- //guestWrite --> */}
                                <input type="hidden" name="action" value="add"/>
                                
                            </form>	
                            
                            {guestList.map((guestVo) => {
                                return (
                                <div key={guestVo.no}>
                                    <ItemGuest guest={guestVo} />
                                </div>
                                )
                            })}
                            
                        </div>
                        {/* <!-- //guestbook --> */}
                    
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
export default GuestbookList;
//import 라이브러리
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/gallery.css';
import Header from '../include/Header';
import Footer from '../include/Footer';

const Form2 = () => {

    /*---라우터 관련-------------------------------*/
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [content, setContent] = useState();
    const [img, setImg] = useState();

    const navigate = useNavigate();

    /*---일반 변수--------------------------------*/
    
    /*---일반 메소드 -----------------------------*/
    
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    // 내용 입력
    const handleContent = (e) => {
        console.log("내용");
        setContent(e.target.value);
    }

    //파일 선택
    const handleImg = (e) => {
        console.log("파일");
        setImg(e.target.files[0]);
    }

    // 파일 업로드
    const handleSubmit = (e) => {
        console.log("전송");

        e.preventDefault();

        // 데이터 묶기
        const formData = new FormData();
        formData.append("content", content);
        formData.append("img", img);

        // 서버로 전송
        axios({
            method: 'post', 			// put, post, delete                   
            url: `${process.env.REACT_APP_API_URL}/api/attachs2`,
        
            headers: { "Content-Type": "multipart/form-data" }, //첨부파일
            data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            // 저장된 이미지 이름
            const saveName = response.data.apiData;
            console.log(saveName);

            // 리다이렉트
            navigate(`/result?img=${saveName}`);


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
                    <h2>갤러리</h2>
                    <ul>
                        <li> <Link to="#" rel="noreferrer noopener">일반갤러리</Link></li>
                        <li> <Link to="#" rel="noreferrer noopener">파일첨부연습</Link></li>
                    </ul>
                </div>
                {/* <!-- //aside --> */}

                <div id="content">

                    <div id="content-head">
                        <h3>첨부파일연습</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>갤러리</li>
                                <li className="last">첨부파일연습</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* <!-- //content-head --> */}

                    <div id="file">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <table>
                                <colgroup>
                                    <col style={{width: '600px'}}/>
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td className="text-left" ><input type="text" name="content" value={content} onChange={handleContent}/></td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><input type="file" name="file" onChange={handleImg}/></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><button type="submit">파일업로드</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    {/* <!-- //file --> */}


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
export default Form2;
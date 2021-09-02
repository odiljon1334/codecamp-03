import { useState } from 'react';
import {
    Wrapper, Head, MainWrapper, Logo, MainInput,
    FooterLogin, Title,
    WrapperEmail
    
} from "../../styles/indexcss";


export default function BoardsNewPage() {
    

    return (
        <Wrapper>
            <Head>
               
            </Head>
            <MainWrapper>
                <Logo>
                    <img src ="/photo1.png"/>
                    <Title>잇츠로드</Title>  
                </Logo>
                <MainInput>
                    <WrapperEmail name="email" type="text" placeholder="simplelife@gmail.com"></WrapperEmail>   
                </MainInput>
                <FooterLogin>
                   <div name="password" type="password" placeholder=""></div>
                </FooterLogin>

            </MainWrapper>
        </Wrapper>
    )
}
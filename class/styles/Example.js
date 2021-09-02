import styled from '@emotion/styled'

export const Mydiv = styled.div `
 width: 500px;
 height: 500px;
 background-color:red;
`
export const Title = styled.h1 `
   color:blue;
`

export const IdInput = styled.input ``
export const PwInput = styled.input ``
export const LoginButton = styled.button ``
export const Wrapper = styled.div `
    background-color: skyblue;
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    width: 300px;
`
 return(
        <Wrapper>
            <Title>로그인화면</Title>
            아이디: <IdInput type="text" /><br />
            비밀번호: <PwInput type="password" /><br />
            <LoginButton>로그인</LoginButton>
        </Wrapper>
    )
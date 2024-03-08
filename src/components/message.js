import React from 'react';
import styled from "styled-components";

const Message = (props) => {
    const {data} = props
    return (
        <Wrapper isMine={data.isMine}>
            {
                !data.isMine && (
                    <UserIcon>
                        <i className={"material-icons"}>person</i>
                    </UserIcon>
                )
            }
            <p>
                {data.text}
            </p>
            {
                data.isMine && (
                    <UserIcon>
                        <i className={"material-icons"}>person</i>
                    </UserIcon>
                )
            }
        </Wrapper>
    );
};

export default Message;

const Wrapper = styled.div`
  width: 60%;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: ${props => (props.isMine) ? `auto`: `5px`};

  p {
    width: 80%;
    background: rgb(172 172 172 / 34%);
    padding: 10px;
    border-radius: ${props => (props.isMine) ? `20px 20px 0px 20px`: `20px 20px 20px 0`};
    text-align: left;
    margin: 10px;
  }
`
const UserIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4971de;
    color: white;
    border-radius: 100%;
`

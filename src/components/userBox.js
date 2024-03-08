import React from 'react';
import styled from "styled-components";

const UserBox = (props) => {
    const {data, onClickHandler} = props
    return (
        <Container active={data.active} onClick={onClickHandler}>
            <UserIcon>
                <i className={"material-icons"}>person</i>
            </UserIcon>
            <UserName>
                {data.name}
                { data.active && (
                    <i className={"material-icons"}>chevron_right</i>
                )}
            </UserName>
        </Container>
    );
};

export default UserBox;

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50px;
  margin: 1px;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.active) ? `#5e84f8` : `none`};

  :hover {
    background-color: #7b96e7;
  }
`
const UserIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: #4971de;
    border-radius: 100%;
`

const UserName = styled.h5`
  width: 80%;
  height: 50px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #a7a7a7;
  margin-left: 10px;
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: capitalize;
  i {
    
  }
`

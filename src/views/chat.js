import React from 'react';
import styled from "styled-components";
import UserBox from "../components/userBox";
import Message from "../components/message";

const Chat = () => {
    const [userInput, setUserInput] = React.useState("")
    const [messageInput, setMessageInput] = React.useState("")
    const [users, setUsers] = React.useState([])
    const [activeUser, setActiveUser] = React.useState({})
    React.useEffect(() => {
        setUsers([
            {
                index: 0,
                name: "Gopal Oswal",
                messages: []
            },
            {
                index: 1,
                name: "John Doe",
                active: true,
                messages: [
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi Gopal",
                        isMine: false
                    },
                    {
                        text: "Hi John",
                        isMine: true
                    }
                ]
            },
            {
                index: 2,
                name: "Test user",
                messages: [
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    },
                    {
                        text: "Hi Test User",
                        isMine: true
                    }
                ]
            },
            {
                index: 3,
                name: "+91 7722772266",
                messages: []
            },
        ])
        setActiveUser(users[1])
        scroll()
    }, []);

    const scroll = () => {
        setTimeout(() => {
            var element = document.getElementById("chat-wrapper");
            if (element !== null && element !== undefined) {
                element.scrollTop = element.scrollHeight;
            }
        }, 0)
    }

    const onClickHandler = (index) => {
        setUsers(users.map((m, k) => {
            if (k !== index) return {...m, active: false}
            else return {...m, active: true}
        }))
        setActiveUser(users[index])
        scroll()
    }
    const AddMessage = (e) => {
        e.preventDefault();
        if (messageInput === "") {
            return
        }
        setActiveUser({
            ...activeUser, messages: [...activeUser.messages, {text: messageInput, isMine: true}]
        })
        setMessageInput("")
        scroll()
    }
    return (
        <Wrapper>
            <Header>
                <h3>My Chat App</h3>
            </Header>
            <ChatWrapper>
                <UserList>
                    <SearchBox>
                        <input
                            type="text"
                            placeholder={"Add User"}
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                        <button onClick={() => {
                            setUsers(prevState => [...prevState, {
                                name: userInput,
                                active: false,
                                messages: [],
                                index: users.length
                            }])
                            setUserInput("")
                        }}>
                            <i className={"material-icons"}>add_comment</i>
                        </button>
                    </SearchBox>
                    <UserListWrapper>
                        {
                            users.map((user, index) => (
                                <UserBox data={user} key={index} onClickHandler={() => {
                                    onClickHandler(index)
                                }}/>
                            ))
                        }
                    </UserListWrapper>
                </UserList>
                <ChatBox>
                    {
                        activeUser !== null && activeUser !== undefined && activeUser.messages !== undefined && (
                            <React.Fragment>
                                <MessageBox id={"chat-wrapper"}>
                                    {
                                        activeUser.messages.map((message, index) => (
                                            <Message data={message} key={index}/>
                                        ))
                                    }
                                </MessageBox>
                                <form onSubmit={AddMessage} action={null}>
                                    <InputBox>
                                        <input
                                            type="text"
                                            placeholder={`Type a message to ${activeUser.name}`}
                                            value={messageInput}
                                            onChange={(e) => setMessageInput(e.target.value)}
                                        />
                                        <button onClick={AddMessage}>
                                            <i className={"material-icons"}>send</i>
                                        </button>
                                    </InputBox>
                                </form>
                            </React.Fragment>
                        )
                    }
                </ChatBox>
            </ChatWrapper>
        </Wrapper>
    );
};

export default Chat;

const Wrapper = styled.div`
  background: white;
  width: 80%;
  border-radius: 10px;
  height: 80%;
`

const Header = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 50px;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0 0 0 20px;
  }
`
const SearchBox = styled.div`
  height: 50px;
  margin: 1px;
  display: flex;
  padding: 0;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  input {
    border-right: 50px;
    height: 25px;
    width: 80%;
    border: none;
    border-radius: 15px;
    padding-left: 10px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4971de;
    color: #4971de;
    border: none;
    cursor: pointer;

    i {
      color: white
    }
  }
`
const UserListWrapper = styled.div`
  overflow: auto;
  height: 100%;
`

const ChatWrapper = styled.div`
  height: 100%;
  display: flex;
`
const UserList = styled.div`
  width: 30%;
  background-color: #4971de;
  padding-bottom: 50px;
`
const ChatBox = styled.div`
  width: 70%;
  height: 100%;
  margin-bottom: 50px;
  background-color: white;
`
const MessageBox = styled.div`
  height: 90%;
  overflow: scroll;
`
const InputBox = styled.div`
  background-color: rgb(181 180 180 / 4%);
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  input {
    padding-left: 15px;
    height: 40px;
    border-radius: 30px;
    width: 85%;
    border: 1px solid #4971de;
    font-weight: bold;
  }

  button {
    background-color: #4971de;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    i {
      color: white
    }
  }
`

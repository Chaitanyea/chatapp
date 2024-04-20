import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return(
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='d6248d7e-19fc-4f4d-a7c9-1044ba8e84f8'
                username = {props.user.username}
                secret={props.user.secret}
                style = {{height: '100%'}}
                />
        </div>
    )
}

export default ChatsPage;
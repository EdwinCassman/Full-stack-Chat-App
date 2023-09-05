import { PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    
    return (
        <div style={{height: "100vh"}}>
            <PrettyChatWindow
            
                // ADD YOUR CHAT ENGINE PROJECT ID HERE
                projectId="PROJECT ID"
                username={props.user.username}
                secret={props.user.secret}
                style={{height: "100%"}}
            />
        </div>
    )
}

export default ChatsPage
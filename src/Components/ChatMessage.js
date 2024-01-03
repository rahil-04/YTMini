import { comment_user_logo } from "../Utils/common"

const ChatMessage = ({name,message}) => {
    return(
        <div className="flex p-1">
            <img src={comment_user_logo} alt="user"/>
            <span className="ml-1 font-semibold">{name}</span>
            <span className="ml-2 font-light">{message}</span>
        </div>
    )
}

export default ChatMessage
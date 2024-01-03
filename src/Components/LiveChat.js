import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../redux_store_slices/liveChatSlice"
import { generateRandomName,generateRandomText } from "../Utils/utility"

const LiveChat = () => {
    
    const [liveMessage,SetLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector((store)=>store.liveChat.message);
    useEffect(()=>{
        const id = setInterval(()=>{
            //console.log("Api Called")
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomText()
            }))
        },1500)

        return ()=>clearInterval(id); 
    },[])
    
    //console.log(liveMessage)

    return(
        <div className="w-full">    
            <div className="h-[290px] w-full border border-black bg-slate-100 overflow-y-auto  flex flex-col-reverse">
                {chatMessage.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message}/>)}
            </div>
            <form 
                className="w-full"
                onSubmit={(e)=>{
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "Rahil",
                        message: liveMessage
                    }))

                    SetLiveMessage("");
                }}
            >
                <input
                    className="w-4/5 border border-black" 
                    placeholder="type here...."
                    value={liveMessage}
                    onChange={(e)=>SetLiveMessage(e.target.value)}
                />
                <button 
                    className="w-1/5 border border-black hover:bg-green-400 bg-green-200"
                >
                    send
                </button>
            </form>
        </div>    
    )
}

export default LiveChat
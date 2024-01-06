import { comment_user_logo } from "../Utils/common"

const Comments = ()=>{
    return(
        <div>
            <div className="font-bold">{static_comment_data.length} Comments</div>
            <CommentList data={static_comment_data}/>
        </div>
    )
}

const CommentList = ({data})=>{
    return(
        <div>
            {data.map((comment)=>{
                return(
                    <div key={comment.id} className="bg-slate-200 p-2 m-2 rounded-xl">
                        <div className="flex">
                            <img className="px-1" src={comment_user_logo} alt="User"/>
                            <div className="px-1 font-semiboldbold">{comment.author}</div>
                        </div>
                        <div className="font-light px-4">{comment.comment}</div>
                        <div className="border-l border-black">
                            <CommentList data={comment.replies}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Comments;

let static_comment_data = [
    {
        id: "1",
        author: "Cristiano Ronaldo",
        comment: "Awesome project, bro!",
        replies: [
          {
            id: "1a",
            author: "Rahil",
            comment: "Thank You, my friend",
            replies: [],
          },
          {
            id: "1b",
            author: "Wayne Rooney",
            comment: "Cristiano, you can say more and better things than that",
            replies: [
              {
                id: "1b1",
                author: "Marcus Rashford",
                comment: "Lol Wazza, I'm coming for your United Goalscoring record",
                replies: [],
              },
              {
                id: "1b2",
                author: "Rahil",
                comment: "Haha, loving this banter",
                replies: [],
              },
              {
                id: "1b3",
                author: "Cristiano Ronaldo",
                comment:
                  "Shut up! I'm still a player and you are already a manager.",
                replies: [],
              },
            ],
          },
          {
            id: "1c",
            author: "Sadio Mane",
            comment: "Bro!! Come for practice and teach me your new celebration",
            replies: [],
          },
        ],
      },
      {
        id: "2",
        author: "Nezuko Kamado",
        comment: "すごいね",
        replies: [],
      },
      {
        id: "3",
        author: "Monkey D. Luffy",
        comment: "hahaha!! What is this?!?! Hahahahaha",
        replies: [
          {
            id: "3a",
            author: "Nami",
            comment:
              "Oi Luffy!! Get back to the ship, we need to leave for the Grand Line!!",
            replies: [
              {
                id: "3a1",
                author: "Sanji",
                comment:
                  "Nami chan!! I have prepared dessert for you. Will bring it up to you in a minute",
                replies: [],
              },
            ],
          },
          {
            id: "3b",
            author: "Zoro",
            comment: "This Idiot!! Why did I have to join THIS GUY'S crew?!?!",
            replies: [],
          },
          {
            id: "3c",
            author: "Usopp",
            comment: "This is my project!! hahahaha!!",
            replies: [],
          },
        ],
      },
    ];

//console.log(static_comment_data)


{/* <div className="">
                {static_comment_data.map((comment)=>{
                    return(<div className="bg-slate-200 p-2 m-2 rounded-xl">
                        <div className="font-semibold">{comment.author}</div>
                        <div className="px-2 font-light">{comment.comment}</div>
                        <Comments/>
                    </div>)
                })}
            </div> */}
import Button from "./Button"

const ButtonList = () => {
    const buttonList = ["gaming","Music","Cooking","911 GT3","Ferrari","Football"]

    return(
        <div className="flex m-3">
            {buttonList.map((val,index)=><Button key={index} name={val}/>)}
        </div>
    )
}

export default ButtonList
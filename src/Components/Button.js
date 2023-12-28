const Button = ({name}) => {
    return(
        <div className="bg-slate-200 hover:bg-slate-300 mx-2 px-3 py-1 rounded-lg cursor-pointer"> 
            {name}
        </div>
    )
}

export default Button;
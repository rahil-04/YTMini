const SearchResVideo = ({video,style}) => {
   const {snippet} = video;
   
   const truncateDescription = (str)=>{
        const str_splited = str.trim().split(" ");
        const str_truncated = str_splited.slice(0,10);
        const str_modified = str_truncated.join(" ")+"...";
        return str_modified;     
   }

    return(
        <div className="flex w-full gap-2 mb-8 overflow-hidden text-ellipsis">
            <div className="w-2/5 flex justify-center items-center">
                <img className={`${style}`} src={snippet.thumbnails.medium.url} alt="thumbnail"/>
            </div>
            <div className="w-3/5 flex flex-col">
                <ul className="w-full">
                    <li className="font-bold">{snippet.title}</li>
                    <li className="font-light">{snippet.channelTitle}</li>
                    <li className="font-light mt-4">{truncateDescription(snippet.description)}</li>
                </ul>
            </div>
        </div>
    )
}

export default SearchResVideo;

const VideoTitle = ({title,description}) => {

  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-20 text-white">
        <h2 className="text-2xl">{title}</h2>
        <p className="w-1/4">{description}</p>
        <div className="flex gap-2">
        <button className="w-10 bg-black text-white">Play</button>
        <button className="w-20 bg-gray-400 text-white">More Info</button>
        </div>
    </div>

  )
}

export default VideoTitle
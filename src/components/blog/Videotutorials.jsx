import ReactPlayer from 'react-player'
export const Videotutorials = () => {
  return (
    <>
    <div className="container-xl h-auto">
      <ReactPlayer url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
      width="100%" controls/>
    </div>
    </>
  )
}
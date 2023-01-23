import React, { useState, useEffect } from 'react'
import './Youtube.css'
function YoutubeVideos() {
  const [ytVideos, setVideos] = useState([])

  useEffect(() => {
    fetch(
      'https://www.googleapis.com/youtube/v3/search?key=%20AIzaSyDOumyymtUOH3FUTIjYETtBx-6e4-DFbgg&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9'
    )
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        const ytVideosData = response.items
        setVideos(ytVideosData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(ytVideos)

  return (
    <div>
      <div className="youtubeVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
          </div>

          <div className="row">
            {ytVideos.map((singleVideo, i) => {
              const VideoIds = `https://www.youtube.com/watch?v=${singleVideo.id.videoId}`
              return (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnails">
                      <a href={VideoIds} target="_blank">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={VideoIds} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YoutubeVideos

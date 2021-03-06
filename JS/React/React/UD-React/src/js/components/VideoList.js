import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {

  //Map supplied video props into VideoListItem componenet
  const videos = props.videos.map((video)=>{
    return(
      <VideoListItem
        video={video}
        key={video.etag}
        onSelectedVideo={props.passSelectedVideoToMain}
        />
    );
  });

  /**
  * @return <ul> list containing mapped <VideoListItem> for each video object
  *         held in props.
  */
  return(
    <div className="videoList">
      <ul className="col-md-3 list-group">
        {videos}
      </ul>
    </div>
  );

};

export default VideoList;

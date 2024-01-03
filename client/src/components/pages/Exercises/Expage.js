import React from 'react'
import { useLocation } from 'react-router-dom'
import './expage.css'
function Expage (props) {
  const location = useLocation()
  //   console.log(props, ' props')
  //   console.log(location, ' useLocation Hook')
  const data = location.state?.data
  console.log(data)
  console.log(data.video_link);
  return (
    <div style={{ backgroundColor: '#e2efcc' }}>
      <div
        style={{
          //   marginTop: '5%',
          padding: '4%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className='outer-ex'>
          <div className='image-ex'>
            <img src={data.image_url}></img>
          </div>
          <div>
            <div className='title-ex'>{data.title}</div>
            <div>{data.description}</div>
          </div>
        </div>
      </div>

      <div className='yt'>
        <div>Youtube Video Link</div>
        {/* <iframe
          width='560'
          height='315'
          src={data.video_link}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe> */}


        <iframe
        width='882'
        height='496'
        // src='https://www.youtube.com/embed/FKU6QwT8psY'
        src = {`${data.video_link}`}
        title='5 Minute Guided Meditation for Kids | Short Guided Mindfulness Meditation for Kids with Music'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
        ></iframe>

      </div>
    </div>
  )
}
export default Expage

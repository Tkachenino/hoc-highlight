import PropTypes from 'prop-types';
import New from './New';
import Popular from './Popular';
import withWrapper from '../HOC/withWrapper';

function Video({url, views}) {
  return (
      <div className="item item-video">
          <iframe src={url} title={"uniqTitle" + url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p className="views">Просмотров: {views}</p>
      </div>
  )
};

Video.propTypes = {
  url: PropTypes.string,
  views: PropTypes.number
}

const VideoWithWrapper = withWrapper(New, Popular, Video);

export default VideoWithWrapper;
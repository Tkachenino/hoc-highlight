import PropTypes from 'prop-types';
import New from './New';
import Popular from './Popular';
import withWrapper from '../HOC/withWrapper';

function Article({title, views}) {
  return (
      <div className="item item-article">
          <h3><a href="#!">{title}</a></h3>
          <p className="views">Прочтений: {views}</p>
      </div>
  )
};

Article.propTypes = {
  title: PropTypes.string,
  views: PropTypes.number
}

const ArticleWithWrapper = withWrapper(New, Popular, Article);


export default ArticleWithWrapper;
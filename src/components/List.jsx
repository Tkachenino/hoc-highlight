import PropTypes from 'prop-types';
import Video from './Video';
import Article from './Article';

function List({list}) {
  return list.map(item => (
    <div key={item.id}>
      {(item.type === 'video') && <Video {...item} />}
      {(item.type === 'article') && <Article {...item} />}   
    </div>
  ));
};

List.propTypes = {
  list: PropTypes.array
}

export default List;
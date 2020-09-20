import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../../../redux/directory/selectors';
import { StyledDirectory } from './styles';
import useScroller from '../../../../hooks/useScroller';

const Directory = ({ sections }) => {
  const { scroll, setContainer, currentScrollIndex, endIndex } = useScroller(3);
  const directoryRef = useRef(null);

  useEffect(() => {
    setContainer(directoryRef.current)
  }, [setContainer])
  return (
    <StyledDirectory ref={directoryRef}>
      <i className={`fas fa-arrow-circle-left arrow-left ${currentScrollIndex === 0 ? 'disabled' : ''}`} onClick={() => scroll('left')}></i>
      {sections.map(({ id, ...otherProps }) => <Item key={id} {...otherProps} />)}
      <i className={`fas fa-arrow-circle-right arrow-right ${currentScrollIndex === endIndex ? 'disabled' : ''}`} onClick={() => scroll('right')}></i>
    </StyledDirectory>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
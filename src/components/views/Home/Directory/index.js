import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../../../redux/directory/selectors';
import { StyledDirectory } from './styles';

const Directory = ({ sections }) => {

  return (
    <StyledDirectory>
      {sections.map(({ id, ...otherProps }) => <Item key={id} {...otherProps} />)}
    </StyledDirectory>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
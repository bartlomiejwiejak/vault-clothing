import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import MenuItem from '../MenuItem';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../../redux/directory/selectors';

const Directory = ({ sections }) => {

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} />)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
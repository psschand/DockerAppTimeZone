import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import AddedClockitem from 'containers/AddedClockitem';

function AddedClockList({ loading, error, addedrepos,repos }) {
  // if (loading) {
  //   return <List component={LoadingIndicator} />;
  // }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (repos !== false) {
    return <List items={addedrepos}  component={AddedClockitem} />;
  }

  return null;
}

AddedClockList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  addedrepos: PropTypes.any,
};

export default AddedClockList;

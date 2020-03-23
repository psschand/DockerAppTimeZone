/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  FormattedMessage } from 'react-intl';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import useClock from 'use-clock';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';
export function RepoListItem(props) {
  const { item } = props;
  const { onTimezone, raw } = useClock("DD-MM-YYYY HH:mm:ss");
  const londonTime = onTimezone("Africa/Abidjan");
  let timeobj = raw;
  console.log(timeobj);
  if(item.name!=='Local Time')
  {
    let utccode = item.TimeZone_id.split(":");
    timeobj._d.setHours(timeobj._d.getHours()+parseInt(utccode[0]));
    timeobj._d.setMinutes(timeobj._d.getMinutes()+parseInt(utccode[1]));
    
  }
  const brasiliaTime = onTimezone("America/Sao_Paulo");
  let nameprefix = '';
  // If the repository is owned by a different person than we got the data for
  // it's a fork and we should show the name of the owner
  const activateLasers=()=>{
    console.log("hello");
  }
  function handleClick(e) {
    e.preventDefault();
  }
  // Put together the content of the repository
  const content = (
    <Wrapper>
      <RepoLink>
        {nameprefix + item.name}
      </RepoLink>
      {timeobj._d.toTimeString()}
      
      {/* <Moment add={{ hours: 12 }}>{dateToFormat}</Moment> */}
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.name}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};
export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}
export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(RepoListItem);

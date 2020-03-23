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
import Button from 'components/Button';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import { loadRepos,loadClockRepos } from '../App/actions';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';
export function RepoListItem(props) {
  const { item,onAddClock } = props;
  let nameprefix = '';

  // If the repository is owned by a different person than we got the data for
  // it's a fork and we should show the name of the owner
  console.log(typeof(item.TimeZone_id));  
  const activateLasers=()=>{
    console.log("hello");
  }
  function handleClick(e) {
    e.preventDefault();
    console.log(item.TimeZone_id);
    console.log(typeof(onAddClock));
    onAddClock(item);
  }
  // Put together the content of the repository
  const content = (
    <Wrapper>
      <RepoLink onclick="activateLasers()">
        {nameprefix + item.name}
      </RepoLink>
      <IssueLink>
        <RepoLink>
        {item.TimeZone_id}
        </RepoLink>
        <Button href="#" onClick={handleClick}>
      Add Me
    </Button>
      </IssueLink>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.name}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
}

export function mapDispatchToProps(dispatch) {
  return {
    onAddClock: (data)=> dispatch(loadClockRepos(data)),
  }
}
export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),mapDispatchToProps,
)(RepoListItem);

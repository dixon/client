// @flow
import * as Selectors from '../selectors'
import * as Chat2Gen from '../../../../actions/chat2-gen'
import {FilterSmallTeam} from '.'
import {pausableConnect, type TypedState} from '../../../../util/container'

const mapStateToProps = (state: TypedState, {conversationIDKey, channelname, teamname, isActiveRoute}) => {
  const p = Selectors.snippetRowSelector(state, conversationIDKey)

  return {
    backgroundColor: p.backgroundColor,
    channelname,
    hasBadge: p.hasBadge,
    hasUnread: p.hasUnread,
    isActiveRoute,
    isMuted: p.isMuted,
    isSelected: p.isSelected,
    participantNeedToRekey: p.participantNeedToRekey,
    participants: p.participants,
    showBold: p.showBold,
    teamname: p.teamname,
    usernameColor: p.usernameColor,
    youNeedToRekey: p.youNeedToRekey,
  }
}

const mapDispatchToProps = (dispatch: Dispatch, {conversationIDKey}) => ({
  onSelectConversation: () => {
    // TODO move to saga
    dispatch(Chat2Gen.createSetInboxFilter({filter: ''}))
    dispatch(Chat2Gen.createSelectConversation({conversationIDKey, fromUser: true}))
  },
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  backgroundColor: stateProps.backgroundColor,
  hasBadge: stateProps.hasBadge,
  hasUnread: stateProps.hasUnread,
  isActiveRoute: ownProps.isActiveRoute,
  isMuted: stateProps.isMuted,
  isSelected: stateProps.isSelected,
  onSelectConversation: dispatchProps.onSelectConversation,
  participantNeedToRekey: stateProps.participantNeedToRekey,
  participants: stateProps.participants,
  showBold: stateProps.showBold,
  teamname: stateProps.teamname || '',
  usernameColor: stateProps.usernameColor,
  youNeedToRekey: stateProps.youNeedToRekey,
})

export default pausableConnect(mapStateToProps, mapDispatchToProps, mergeProps)(FilterSmallTeam)

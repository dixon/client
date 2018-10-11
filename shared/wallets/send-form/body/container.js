// @flow
import Body from '.'
import {compose, connect, setDisplayName} from '../../../util/container'
import {bannerLevelToBackground} from '../../../constants/wallets'

const mapStateToProps = state => ({
  banners: state.wallets.builtPayment.banners,
})

const mapDispatchToProps = (dispatch) => ({})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  banners: (stateProps.banners || []).map(banner => ({
    bannerBackground: bannerLevelToBackground(banner.level),
    bannerText: banner.message,
  })),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  setDisplayName('Body')
)(Body)

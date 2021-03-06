import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = ({visibilityFilter}, {filter}) => ({
  active: filter === visibilityFilter
})

const mapDispatchToProps = (dispatch, {filter}) => ({
  onClick: () => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

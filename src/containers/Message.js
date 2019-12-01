import Message from 'components/Message'
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  message: state.message // passed this way cause it doesn't have any property
})

export default connect(mapStateToProps)(Message)

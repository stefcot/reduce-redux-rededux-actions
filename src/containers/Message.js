import { connect } from "react-redux";
import Message from 'components/Message/index'

const mapStateToProps = (state) => ({
  message: state.message.text // passed this way cause it doesn't have any property
})

export default connect(mapStateToProps)(Message)

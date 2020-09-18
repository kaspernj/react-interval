import PropTypes from "prop-types"
import PropTypesExact from "prop-types-exact"
import {React} from "react"

export default class Interval extends React.Component {
  static propTypes = PropTypesExact({
    onInterval: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired
  })

  componentDidMount() {
    this.interval = setInterval(this.props.onInterval, this.props.time)
  }

  componentWillUnmount() {
    if (this.interval)
      clearInterval(this.interval)
  }

  render() {
    return ""
  }
}

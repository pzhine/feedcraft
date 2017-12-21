import { Component } from 'react'
import { withRouter, matchPath } from 'react-router'

class ScrollToTop extends Component {
  matchOnePath() {
    return this.props.paths.reduce(
      (isMatched, path) => isMatched || matchPath(this.props.location.pathname, path)
    )
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location && this.matchOnePath()) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)

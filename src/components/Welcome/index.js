import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText
    return (
      <div class="bg-container">
        <h1 className="heading"> Welcome </h1>
        <p className="para"> Thank you! Happy Learning </p>
        <button type="button" className="button" onClick={this.subscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome

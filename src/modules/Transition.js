import React from 'react'
import { TransitionMotion, spring, presets } from 'react-motion';

export default React.createClass({
  getInitialState() {
    return {
      items: [{key: 'a', size: 100}, {key: 'b', size: 100}, {key: 'c', size: 100}]
    };
  },
  componentDidMount() {
    this.setState({
      items: [{key: 'c', size: 100}, {key: 'd', size: 100}, {key: 'e', size: 100}]
    });
  },
  willEnter() {
    // triggered when a new item is added.
    return { width: 0, height: 0 };
  },
  willLeave() {
    // triggered when an item is removed. Keeping the item until its width/height reach 0.
    return {width: spring(0), height: spring(0)};
  },
  render() {
    return (
      <TransitionMotion
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        styles={this.state.items.map(item => ({
          key: item.key,
          style: {width: spring(item.size), height: spring(item.size)},
        }))}>
        { interpolatedStyles =>
          // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
          <div>
            { interpolatedStyles.map(config => {
              return <div key={config.key} style={{...config.style, border: '1px solid'}} />
            })}
          </div>
        }
      </TransitionMotion>
    );
  },
});
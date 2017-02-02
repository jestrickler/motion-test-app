import React from 'react'
import { StaggeredMotion, spring, presets } from 'react-motion';

export default React.createClass({
  render() {
    return <StaggeredMotion
      defaultStyles={[{h: 0}, {h: 0}, {h: 0}, {h: 0}, {h: 0}]}
      styles={ prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
        return i === 0
          ? {h: spring(100, presets.wobbly)}
          : {h: spring(prevInterpolatedStyles[i - 1].h, presets.wobbly)}
      })}>
      {interpolatingStyles =>
        <div>
          {interpolatingStyles.map((style, i) =>
            <div key={i} style={{
              border: '1px solid',
              float: 'left',
              width: 100,
              height: style.h}} />)
          }
        </div>
      }
    </StaggeredMotion>
  }
})

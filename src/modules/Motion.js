import React from 'react'
import { Motion, spring, presets } from 'react-motion';

export default React.createClass({
  render() {
    return (
      <Motion defaultStyle={{width:0}} style={{width:spring(800, presets.wobbly)}}>
        { params => {
          let style = {
            width: params.width,
            height: 100,
            border: '3px solid red',
          }

          return <div style={style}>{params.x}</div>
        }}
      </Motion>
    )
  }
})


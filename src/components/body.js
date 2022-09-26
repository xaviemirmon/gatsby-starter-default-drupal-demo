import * as React from 'react'

export const Body = ({ text }) => (
  <div style={{ background: "red" }}>
    <p dangerouslySetInnerHTML={{__html: text}} />
  </div>
)
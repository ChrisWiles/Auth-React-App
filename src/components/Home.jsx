import React from 'react'
import {Card, CardTitle} from 'material-ui'


class Home extends React.Component {

  render() {
    return (
      <Card className="container">
        <CardTitle title="React Application" subtitle="This is the home page." />
      </Card>
    )
  }

}

export default Home

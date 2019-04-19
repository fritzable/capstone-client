import React, { Fragment } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { Link, withRouter } from 'react-router-dom'

const Home = () => (
  <Fragment>
    <ButtonToolbar>
      <div className="btn"><Link to="/episodes">Episodes</Link>
      </div>
    </ButtonToolbar>
    <Link to="/episodes-create">Add Episode</Link>
  </Fragment>
)

export default withRouter(Home)
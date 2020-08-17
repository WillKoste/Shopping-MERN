import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {logout} from '../../actions/auth';
import {NavLink} from 'reactstrap';

const Logout = ({logout, auth}) => {
  return (
    <Fragment>
      <NavLink href="#" onClick={logout}>Logout</NavLink>
    </Fragment>
  )
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logout})(Logout);
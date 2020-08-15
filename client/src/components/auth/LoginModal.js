import React, {useState, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from 'reactstrap';

const LoginModal = ({auth: {isAuthenticated}, error}) => {
  const [formData, setFormData] = useState({
    modal: false,
    email: '',
    password: '',
    msg: null
  });

  const toggle = () => {
    setFormData({...formData, modal: !modal});
  }

  const closeModal = () => {
    setFormData({...formData, modal: !modal});
  }

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();
    closeModal();
  }

  const {modal, email, password, msg} = formData;
  
  return (
    <Fragment>
      <NavLink href="#" onClick={toggle}>Login</NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" onChange={onChange} />
            </FormGroup>
            <Button color="secondary" style={{marginTop:'2rem'}} block >Sign In</Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

LoginModal.propTypes = {
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, {})(LoginModal);
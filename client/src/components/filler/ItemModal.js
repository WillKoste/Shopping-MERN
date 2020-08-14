import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addItem} from '../../actions/item';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';

const ItemModal = ({addItem}) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const toggle = setModal(!modal);
  
  return (
    <div>
      
    </div>
  )
}

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal);
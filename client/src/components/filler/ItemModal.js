import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addItem} from '../../actions/item';
import {Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';

const ItemModal = ({addItem, history}) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const toggle = () => {
    setModal(!modal);
  }

  const closeModal = () => {
    setModal(!modal);
  }

  const onChange = e => {
    setName({[e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();

    addItem(name, history);
    closeModal();
    window.location.reload();
  }
  
  return (
    <div>
      <Button color="dark" style={{marginBottom:'2rem'}} onClick={toggle}>Add Item</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={e => onSubmit(e)}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input type="text" name="name" id="item" placeholder="Add shopping item" onChange={(e) => onChange(e)} />
              <Button type="submit" className="mt-3" color="success" block>Add Item</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default connect(null, {addItem})(ItemModal);
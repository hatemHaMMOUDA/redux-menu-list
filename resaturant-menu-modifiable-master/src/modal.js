import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Form, FormGroup, Label, Input } from 'reactstrap';


class ModifyModel extends React.Component {
constructor(props) {
super(props)
  const { dish, price, id,Img}=this.props.item
this.state = {
dish,
price,
id,
Img
,
modal:false
}
}

toggle = () => this.setState({modal:!this.state.modal});

getInputValues=(e)=>{ 
this.setState({[e.target.name]:e.target.value})
}

getLastInputValues=()=>{ 
  const { id, dish, price, Img} =this.state;
  console.log("item from modal component", { dish, price, Img}) 
this.toggle()
  this.props.modifyDish({ id, dish, price,Img})
}

render() {
const {className} = this.props;

return (
<div>
<button className="btn w-50 pd-0 mb-1 btn-sm btn-success" onClick={this.toggle} >Modify</button>

<Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
<ModalHeader toggle={this.toggle} >Modify Dish</ModalHeader>
<ModalBody>
<Form>

<FormGroup>
<Label >Name :</Label>
<Input type="text" name="dish" id="dish" placeholder="add Dish name" onChange={this.getInputValues} value={this.state.dish}/>
</FormGroup>

<FormGroup>
<Label >price :</Label>
<Input type="text" name="price" id="price" placeholder="add price" onChange={this.getInputValues} value={this.state.price}/>
</FormGroup>

<FormGroup>
<Label >Image :</Label>
            <Input type="text" name="image" id="Img" placeholder="add Image" onChange={this.getInputValues} value={this.state.Img}/>
</FormGroup>

</Form>
</ModalBody>
<ModalFooter> 
<Button color="primary" onClick={this.getLastInputValues}>Save</Button>
<Button color="secondary" onClick={this.toggle}>Cancel</Button>
</ModalFooter>
</Modal>
</div>
)
}
}





export default ModifyModel;
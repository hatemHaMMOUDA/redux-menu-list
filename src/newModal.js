import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Form, FormGroup, Label, Input } from 'reactstrap';
import NewItem from './newItem.js'
class NewModal extends React.Component {
constructor(props) {
super(props)

this.state = {
    dish:'' , 
    Img:'', 
    id:'',
modal:false
}
}

toggle = () => this.setState({modal:!this.state.modal});

    handleChangeDish=(event)=>{ 
    var dish =event.target.value 
    this.setState({dish}) 
    console.log(dish)
} 


handleChangePrice=(event)=>{ 
    var price =event.target.value 
    this.setState({price}) 
    console.log(price)
}

    handleChangeImg = (event) => {
        var Img = event.target.value
        this.setState({ Img })
        console.log(Img)
    }
 
    getLastInputValues = () => {
        const {dish, price, Img ,id} = this.state;
        console.log("item from this modal component add", { dish, price, Img })
        console.log(id)
        this.toggle()
        const item ={ dish, price, Img, id:this.props.NewId }
        this.props.functAdd(item)
       
    }



render() {
const {className} = this.props;

return (
<div>
        <button className="btn btn-dark col-4 mx-auto my-3" onClick={this.toggle} >add Dish </button>


<Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
<ModalHeader toggle={this.toggle} >Modify Dish</ModalHeader>
<ModalBody>
<Form>

<FormGroup>value
<Label >Name :</Label>
<Input type="text" name="dish" id="dish" placeholder="add Dish name" onChange={this.handleChangeDish} value={this.state.dish} />
</FormGroup>

<FormGroup>
<Label >price :</Label>
<Input type="text" name="price" id="price" placeholder="add price" onChange={this.handleChangePrice} value={this.state.price}/>
</FormGroup>

<FormGroup>
<Label >Image :</Label>
            <Input type="text" name="image" id="Img" placeholder="add Image" onChange={this.handleChangeImg} value={this.state.Img}/>
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





export default NewModal;
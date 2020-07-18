import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, InputGroupAddon, Button, Input, Label } from 'reactstrap'
import * as actions from '../actions/userdetail'
import { useToasts } from 'react-toast-notifications';

const UserDetailForm = (props) => {
    
    const { addToast } = useToasts()
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    
    const handlefirstNameChange = (e) => {
        e.preventDefault()
        setFirstName(e.target.value)
    }
    const handlelastNameChange = (e) => {
        e.preventDefault()
        setLastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const recordtosend = {
            "firstName": firstName,
            "lastName": LastName,
            "email": email
        }
        const OnSuccess = () => {
            addToast("Deleted Successfully", { appearance: 'warning' })
        }
        props.CreateNewUser(recordtosend, OnSuccess)
    }
    return (
        <Form className="mb-5" onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <div>
                        <Row>
                            <Col className="col-3">
                                <InputGroupAddon addonType="append">
                                    <Label className="p-3"><strong>First Name:</strong></Label>
                                </InputGroupAddon>

                            </Col>
                            <Col>
                                <Input value={firstName} onChange={handlefirstNameChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-3">
                                <InputGroupAddon addonType="append">
                                    <Label className="p-3"><strong>Last Name:</strong></Label>
                                </InputGroupAddon>

                            </Col>
                            <Col>
                                <Input value={LastName} onChange={handlelastNameChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-3">
                                <InputGroupAddon addonType="append">
                                    <Label className="p-3"><strong>Email:</strong></Label>
                                </InputGroupAddon>

                            </Col>
                            <Col>
                                <Input value={email} onChange={handleEmailChange} />
                            </Col>
                        </Row>
                        <Button color="primary" type='submit'>Submit</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

const mapStateToProps = (state) => ({
    UserDetails: state.userdetail.userDetail
})

const mapDispatchToProps = {
    CreateNewUser: actions.createUserDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailForm)

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/userdetail'
import UserDetailForm from './UserDetailForm';
import { Table, ButtonGroup, Button, ModalHeader, ModalBody, Modal, Input, Form } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';

const initialState = {
    "firstName": "",
    "lastName": "",
    "email": ""
}

const UserDetailsFetchPage = (props) => {
    const [values, setValues] = useState(initialState)
    const { addToast } = useToasts()
    const [open, setOpen] = useState(false)
    
    const handleUpdate = (record) => {
        setValues(record)
        toggle()
    }
    
    const handleEdit = (id, record) => {
        const onSuccess = () => {
            addToast("Updated Successfully", { appearance: 'success' })
        }
        props.updateUser(id, record, onSuccess)
    }

    const toggle = () => {
        setOpen(!open)
    }
    
    const handleChange = (e) => {
        const val = e.target.value
        setValues({
            ...values,
            [e.target.name]: val
        })
    }
    
    
    const handleDelete = (id) => {
        const onSuccess = () => {
            addToast("Deleted Successfully", { appearance: 'warning' })
        }
        props.deleteUser(id, onSuccess)
    }
    
    useEffect(() => {
        props.fetchUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div>
            <UserDetailForm />
            <Table hover striped bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.UserDetail.map(record => {
                        return (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.firstName}</td>
                                <td>{record.lastName}</td>
                                <td>{record.email}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button onClick={() => handleUpdate(record)} color="info">Edit</Button>
                                        <Modal isOpen={open} toggle={toggle}>
                                            <ModalHeader toggle={toggle}>
                                                Form
                                            </ModalHeader>
                                            <ModalBody >
                                                <Form onSubmit={() =>handleEdit(record.id, values)}>
                                                    <label>{record.id}</label>
                                                    <Input name="firstName" onChange={handleChange} type="text" value={values.firstName} />
                                                    <Input name="lastName" onChange={handleChange} type="text" value={values.lastName} />
                                                    <Input name="email" onChange={handleChange} type="text" value={values.email} />
                                                    <Button type='submit'>Update</Button>
                                                </Form>
                                            </ModalBody>
                                        </Modal>
                                        <Button onClick={() => handleDelete(record.id)} color="danger">Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    UserDetail: state.userdetail.userDetail
})

const mapDispatchToProps = {
    fetchUsers: actions.fetchAll,
    fetchUsersById: actions.fetchAllById,
    deleteUser: actions.deleteUserDetails,
    updateUser: actions.updateUserDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsFetchPage)

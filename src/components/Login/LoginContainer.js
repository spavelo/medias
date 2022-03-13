import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from "yup";

import {Form, Input, ErrorMessage} from "./Login.styles";

import {closeLoginModal} from "../../redux/modalReducer";
import {fetchLogin} from "../../redux/authReducer";
import Modal from "../common/ModalWrap/Modal.component";
import CloseButton from "../common/Buttons/CloseButton.component";
import {PrimaryButton} from "../common/Buttons/Button.component";

const LoginContainer = (props) => {
    const schema = yup.object().shape({
        username: yup.string().max(15).required(),
        email: yup.string().email().max(15).required(),
        password: yup.string().min(3).max(15).required(),
    });

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch()
    const isLoginModalOpen = useSelector(state => state.modal.isLoginModalOpen)
    const lang = useSelector(state => state.lang.language)

    const sendData = () => {
        const {email, password} = watch();

        const isEmpty = !email.length || !password.length;

        {
            const {email: emailError = {}, password: passwordError = {}} = errors || {};
            if (isEmpty || emailError.message || passwordError.message) {
                return;
            }
        }

        dispatch(fetchLogin({email, password}))
    }

    const closeModal = () => dispatch(closeLoginModal())

    useEffect(() => {
        document.querySelector('[data-close]').addEventListener('click', event => {
            return event.target.dataset.close
                ? dispatch(closeLoginModal())
                : null
        });
    }, [isLoginModalOpen])

    const getRow = name => {
        return (
            <>
                {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
                <label for={name}>Email:</label>
                <Input type={name} id={name} {...register(name, {required: true})}/>
                <br/>
            </>
        )
    }

    return (
        <Modal>
            <CloseButton onClick={closeModal}/>
            <Form onSubmit={handleSubmit(sendData)}>
                {getRow('email')}
                {getRow('password')}
                <ErrorMessage>{props.authError && props.authError.error}</ErrorMessage>
                <PrimaryButton onClick={sendData}>Log in</PrimaryButton>
            </Form>
        </Modal>

    );
};

const mstp = state => ({
    authError: state.auth.authError,
    auth: state.auth,
})

export default connect(mstp)(LoginContainer);


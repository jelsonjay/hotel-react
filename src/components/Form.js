import React from 'react';
import { useFormik } from 'formik';
import Title from './Title';
import * as Yup from 'yup';

const initialValues = {
	name: '',
	pnumber: '',
	email: '',
	message: ''
};
const onSubmit = values => {
	console.log('Form data:', values);
};

const validationSchema = Yup.object({
	name: Yup.string().required('The name is required!'),
	email: Yup.string().email('Invalid email format').required('Required'),
	pnumber: Yup.string().required('Required'),
	message: Yup.string().required('The message is required!')
});

const validate = values => {
	//values.name values.number values.email value.message
	//errors.name errors.number errors.email errors.message
	//errors.name = 'The name is required!'
	let errors = {};
	if (!values.name) {
		errors.name = 'The name is required!';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email format';
	}
	if (!values.pnumber) {
		errors.pnumber = 'The numer is required!';
	}
	if (!values.message) {
		errors.message = 'The message is required!';
	}
	return errors;
};

function Form() {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema
		//validate
	});

	console.log('Visited Filed:', formik.touched);

	return (
		<div className='form-center'>
			<form onSubmit={formik.handleSubmit}>
				<Title title='contact us' />
				<div className='form-control'>
					<labe htmlFor='name'>Name</labe>
					<input
						type='text'
						id='name'
						name='name'
						placeholder='Type your name'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>

					{formik.touched.name && formik.errors.name ? (
						<div className='errors'>{formik.errors.name}</div>
					) : null}
				</div>
				<div className='form-control'>
					<labe htmlFor='pnumber'>Phone Number</labe>
					<input
						type='text'
						id='pnumber'
						name='pnumber'
						placeholder='Type phone number'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.pnumber}
					/>
					{formik.touched.pnumber && formik.errors.pnumber ? (
						<div className='errors'>{formik.errors.pnumber}</div>
					) : null}
				</div>
				<div className='form-control'>
					<labe htmlFor='email'>Email</labe>
					<input
						type='text'
						id='email'
						name='email'
						placeholder='Type your email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className='errors'>{formik.errors.email}</div>
					) : null}
				</div>
				<div className='form-control'>
					<labe htmlFor='message'>Message</labe>
					<textarea
						type='text'
						id='msg'
						name='message'
						placeholder='Type message..'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.message}
					/>
					{formik.touched.message && formik.errors.message ? (
						<div className='errors'>{formik.errors.message}</div>
					) : null}
				</div>
				<button className='submit' type={'submit'}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Form;

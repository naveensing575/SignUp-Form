import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required('Please enter your email id'),
  passwod: yup.string().min(4).max(15).required('Password')
})
function LoginForm() {
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema)
  })
  const submitForm = (data) =>{
    console.log(JSON.stringify(data))
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <h1 className='title'>Login Form</h1>
      <div className='inputs'>
      <input 
        type="email" 
        name="email" 
        ref={register}
        placeholder='Email Id'/>
        <p>{errors.email?.messages}</p><br/>
        <input 
        type="password" 
        name="password" 
        ref={register}
        placeholder='Password'/>
        <p>{errors.password?.message}</p>
        <input 
        style={{background: 'cyan', cursor:'pointer'}}
        type="submit" 
        value='Submit'/>
        </div>
    </form>
  )
}

export default LoginForm
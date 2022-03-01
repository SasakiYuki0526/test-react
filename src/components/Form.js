import React,{ useState } from 'react'

const Form = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setFormDone(true);
        setEmail(''); //指定送出後要清空
        setPassword('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <input type="submit" value="submit" />
        </form>
    )
}

export default Form;
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function LoginPage() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError('');
        setLoading(true);

        try {
            // TODO: Replace with actual login API call
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        catch (error) {
            setError('Invalid username or password');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>  
        </>
    )
}
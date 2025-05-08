import React, { useState } from 'react';
import { getUser } from '../services/userService';
import { LoginProps } from '../models/component';
import { FormControl, InputGroup } from 'react-bootstrap';

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
    setUsernameError(false);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setPasswordError(false);
  }

  const handleLogin = async (): Promise<void> => {
    try {
      if (username.length === 0) {
        setUsernameError(true);
        throw new Error('Nome do usuário é obrigatório.');
      } else if (password.length === 0) {
        setPasswordError(true);
        throw new Error('Senha é obrigatório.');
      } else {
        const user = await getUser(username, password);
        setUser(user);
      }
    } catch (error: any) {
      console.error('handleLogin - ', error);
      setError(error.message);
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title text-center predmaster-title mb-5' style={{color: '#3957AF', fontWeight: 'bold'}}>
                PredMaster Dashboard
              </h2>
              {error && (
                <div className='alert alert-danger' role='alert'>
                  {error}
                </div>
              )}
              <form>
              <div className='mb-4'>
                <InputGroup>
                  <InputGroup.Text>
                    <i className='fas fa-user'></i>
                  </InputGroup.Text>
                  <FormControl
                    type='text'
                    className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                    id='username'
                    placeholder='Nome de usuário'
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </InputGroup>
              </div>
              <div className='mb-4'>
                <InputGroup>
                  <InputGroup.Text>
                    <i className='fas fa-lock'></i>
                  </InputGroup.Text>
                  <FormControl
                    type='password'
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    id='password'
                    placeholder='Senha'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </InputGroup>
              </div>
                <div className='d-grid gap-2'>
                  <button
                    type='button'
                    className='btn btn-primary'
                    onClick={handleLogin}
                  >
                    Entrar
                  </button>
                  <button
                    type='button'
                    className='btn btn-light'
                    disabled
                  >
                    Esqueceu sua senha?
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
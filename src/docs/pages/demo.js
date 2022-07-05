import { Box, Button, ButtonGroup, Input, TextField } from '@mui/material';
import { useState } from 'react';
import { toBase64, toJson } from '../../lib';

const Demo = () => {
  const [profile, setProfile] = useState({ name: 'James', age: '18', birthday: '1981' });
  const [base64, setBase64] = useState('');
  const [json, setJson] = useState({});

  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <h4>user profile</h4>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        component='form'
        noValidate
        autoComplete='off'
      >
        <TextField
          required
          id='outlined-required'
          label='name'
          defaultValue={profile.name}
          onChange={(e) => {
            const { value } = e.target;
            setProfile((c) => ({ ...c, name: value }));
          }}
          type='text'
        />
        <TextField
          required
          id='outlined-required'
          label='age'
          defaultValue={profile.age}
          onChange={(e) => {
            const { value } = e.target;
            setProfile((c) => ({ ...c, age: value }));
          }}
          type='number'
        />
        <TextField
          required
          id='outlined-required'
          label='birthday'
          defaultValue={profile.birthday}
          onChange={(e) => {
            const { value } = e.target;
            setProfile((c) => ({ ...c, birthday: value }));
          }}
          type='number'
        />
      </Box>
      <pre>
        <code>{JSON.stringify(profile)}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setBase64(toBase64(profile));
          }}
        >
          to Base64
        </Button>
      </ButtonGroup>
      <pre>
        <code>{base64}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setJson(toJson(base64));
          }}
        >
          to JSON
        </Button>
      </ButtonGroup>
      <pre>
        <code>{JSON.stringify(json)}</code>
      </pre>
    </div>
  );
};
export default Demo;

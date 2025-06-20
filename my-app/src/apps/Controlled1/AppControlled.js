import React, { useState } from 'react';

export default function App() {
  const [setName] = useState('');
  const [setPassword] = useState('');

  /*const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted name: ${name}`);
  };*/

  return (
    <div>
      <h1>This is Controlled Component</h1>
      <form>
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={16}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          placeholder="Password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

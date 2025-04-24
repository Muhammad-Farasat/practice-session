import { useContext, useState } from 'react';
import {ThemeContext} from '../ThemeContext/ThemeContext'
import { LanguageContext } from '../LanguageContext/LanguageContext';

function LoginForm() {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  let {theme, toggleTheme} = useContext(ThemeContext)

  let {language, toggleLanguage} = useContext(LanguageContext)

  return (

    <section style={{
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      width: '100vw',
      height: '100vh'
    }} >
 
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '250px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        color: theme === 'light' ? '#111' : '#fff'
      }}>
       
        <h2>{ language === 'en' ? 'Login' : 'لاگ ان'}</h2>
       
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
      
        <button  style={buttonStyle}>{ language === 'en' ? 'Login' : 'لاگ ان'}</button>
      
        <button style={buttonStyle} onClick={toggleTheme} >{ language === 'en' ? 'Change Mode' : 'موڈ تبدیل کریں'}</button>
        
        <button style={buttonStyle} onClick={toggleLanguage} >{ language === 'en' ? 'Change Language' : 'ترجمہ کریں'}</button>
      
      </form>

    </section>
  );
}

// Styling just for clarity

// const secStyle = {
  
// }

const formStyle = {
  
};

const inputStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px',
  background: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default LoginForm;

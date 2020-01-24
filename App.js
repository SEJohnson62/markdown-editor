import React, {useState} from 'react';
import './App.css';
import marked from 'marked';

function App() {
  const [ text, setText ] = useState('First &middot; Second');
  function createMarkup() {
    return {__html: text};
  }

  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <div className="App">
      <h2>Markdown Editor</h2>
      <MyComponent/>
    </div>
  );
}
//marked('# Marked in the browser\n\nRendered by **marked**.')
export default App;

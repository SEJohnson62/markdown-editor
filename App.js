import React, {useState} from 'react';
import './App.css';
import marked from 'marked';

function App() {
  const [ text, setText ] = useState('First &middot; Second');
  function createMarkup() {
    return {__html: marked(text)};
  }

  function MyComponent() {
    return <div id='translated' dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <div className="App">
      <h2>Markdown Editor</h2>
      <input type='text' onChange={(ev)=>{setText(ev.target.value)}}/>
      <MyComponent/>
    </div>
  );
}
//marked('# Marked in the browser\n\nRendered by **marked**.')
export default App;

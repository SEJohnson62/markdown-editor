import React, {useState} from 'react';
import './App.css';
import marked from 'marked';

function App() {
  const [ text, setText ] = useState('First &middot; Second');
  const [ versionIndex, setVersionIndex ] = useState(0);
  const [ versions, setVersions ] = useState([]);

  const save = () => {
    setVersions( [...versions, text]);
  }

  const setVersion = (idx) => {
    setText( versions[idx]);
    setVersionIndex(idx);
  };

  function createMarkup() {
    return {__html: marked(text)};
  }

  function MyComponent() {
    return <div id='translated' dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <div className="App">
      <h2>Markdown Editor</h2>
      <div id='panel'>
        <textarea id='editor'
                  value={text}
                  onChange={ev=>setText( ev.target.value )}/>
      </div>
      <MyComponent />

      <button onClick={save}>Save</button>
        {
          versions.map((version, idx) => {
            return(
              <button key={idx} onClick={()=>setText(version)}>NewVersion({idx})</button>
            )
          })
        }

    </div>
  )
}

export default App;

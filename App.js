import React, {useState} from 'react';
import './App.css';
import marked from 'marked';

function App() {
  function createMarkup() {
    return {__html: 'First &middot; Second'};
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

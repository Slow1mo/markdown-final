import React, {
  Component
  } from 'react';
  import './App.css';
  
  let marked = require('marked')
  
  marked.setOptions({
  
  breaks: true
  })
  
  const intro = `### Headers
  
  Use following header types:
  # Header 1
  ## Header 2
  ### Header 3
  #### Header 4
  ##### Header 5
  ###### Header 6
  
  How to make a list:
  ### List
  
  + list item one
  + list item two
  + list item three
  
  ### Links
  
  [FreeCodeCamp](https://learn.freecodecamp.org)
  
  [CodeAcademy](https://www.codeacademy.com "Similar to freecodecamp")
  
  [Instagram](https://www.instagram.com "Are you procrastinating enough?")
  
  To the side with:
  *italic*
  
  Make a statement with:
  **bold**
  
  Or both:
  ***bold and italic***
  
  ### Blockquote
  >"I made food today - Albert Einstein".
  
  ### Images
  
  ![alt text](https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)
  
  ### Code
  \`Hackers only , do not touch \`
  
  \`\`\`
  class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
  markdown: ""
  }
  this.handleChange = this.handleChange.bind(this)
  }
  \`\`\`
  `
  
  class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
  markdown: intro
  }
  this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = (event) =>
  this.setState({markdown: event.target.value})
  
  
  render() {
  return (
  <div>
    <div className="container">
      <div classname="left">
        <h1 id="first">Input</h1>
        <textarea id="editor" placeholder='Enter Text' value={this.state.markdown} onChange={this.handleChange} />
        </div>
              <div classname="right">
              <h1 id="second">Output</h1>
                <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}>
  
                </div>
  
              </div>
            </div>
          </div>
  )
  }
  }
  
  export default App;

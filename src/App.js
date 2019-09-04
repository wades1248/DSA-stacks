import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stack from './stack';
import Queue from './Que'

function App() {
  function main(){
    let stk = new Stack()
    stk.push('Kirk')
    stk.push('Spock')
    stk.push('McCoy')
    stk.push('Scotty')
    console.log(stk.peek())
    console.log(stk.display())
    stk.pop()
    stk.pop()
    console.log(stk.display())
  }
  function primary(){
    let sTq = new Queue()
    sTq.enqueue('Kirk')
    sTq.enqueue('Spock')
    sTq.enqueue('Uhura')
    sTq.enqueue('Sulu')
    sTq.enqueue('Checkov')
    console.log(peek(sTq))
    console.log(isEmpty(sTq))
    console.log(display(sTq))
    sTq.dequeue()
    sTq.dequeue()
    console.log(display(sTq))
  }
  function peek(queue){
    return queue.first
  }
  function isEmpty(queue){
    if(queue.first === null){
      return true
    }else{
      return false
    }
  }
  function display(queue){
    let node = queue.first
    let display = ''
    while(node !== null){
      display = display.concat(node.value +' ')
      node= node.next
    }
    return display
  }
  function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let forwards = new Stack()
    let backwards = new Stack()

    for(let i = 0; i < s.length; i++){
      forwards.push(s[i])
    }
    for(let i = s.length-1; i>= 0; i--){
      backwards.push(s[i])
    }
    let fnode = forwards.top
    let bnode = backwards.top
    while(fnode.next !== null){
      if(fnode.data !== bnode.data){
        return false
      }
      fnode = fnode.next
      bnode= bnode.next
    }
    return true

  }
  function matchPar(string){
    let stg = new Stack()
    for(let i = 0; i< string.length; i++){
      stg.push(string[i])
    }
    let leftPar = 0
    let rightPar = 0
    let node = stg.top
    while(node){
      if(node.data === "("){
        leftPar = leftPar +1
      }
      if(node.data === ")"){
        rightPar = rightPar +1
      }
      node = node.next
    }
    if(leftPar === rightPar){
      return true
    }else if(leftPar > rightPar){
      return(`missing ')'`)
    }else if(leftPar < rightPar){
      return(`missing '('`)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {primary()}
      {/*{main()}
      {console.log(is_palindrome('poop'))}
      {console.log(is_palindrome('popo'))}
      {console.log(matchPar('(adjfhasdfhskadfhakf)'))}
      {console.log(matchPar('(adjfhasdfhskadfhakf'))}
  {console.log(matchPar('adjfhasdfhskadfhakf)'))}*/}

    </div>
  );
}

export default App;

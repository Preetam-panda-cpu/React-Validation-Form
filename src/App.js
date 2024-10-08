import React, { Component } from "react";
class App extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
          <><div>
            <header><h1>Contact Us Form</h1></header>
          </div>
          <div className="container">
              <form>
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              <label for="fname">Last Name</label>
              <input type="text" id="fname" name="Lastname" placeholder="Your name.."></input>
              <label for="country">Gender</label>
    <div class="gender">
      <select id="gender" name="gender">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Others">Others</option>
    </select></div>
              <label for="subject">Comments</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
 <button onclick="myFunction()">Submit</button>
              </form>
            </div></>
        );
      }
    }
    
    export default App;

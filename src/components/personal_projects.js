import React, {Component} from 'react';
import Header from './header';
import open from '../assets/open.png';
class Personal_Projects extends Component {

    render(){
        return(
      <div className = "block">
        <h1> Other Projects</h1>
        <div className = "otherProject">
            <h2 style = {{color: " #8eead1"}}>Poetry Texts</h2>
            <p>This is a quick backend project that pings a database to populate a text with a random poem that is then sent to certain phone numbers once a day</p> <br/>
            <a href = "https://github.com/erafkin/huffmanEncodingCompression" target = "_blank" rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}}/></a>    
        </div>
        <div className = "otherProject">
        <h2 style = {{color: " #8eead1"}}>Huffman Compression</h2>
            <p>A Java project made for class that uses Huffman Encoding to compress text files.</p> <br/>
            <a href = "https://github.com/erafkin/huffmanEncodingCompression" target = "_blank" rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}}/></a>
       </div>
        <div className = "otherProject">
        <h2 style = {{color: " #8eead1"}}>Secret Santa</h2>
            <p>A simple HTML/CSS/Javascript website that helps generate secret santa assignments amongst inputted names.</p> <br/>
            <a href = "https://github.com/erafkin/secretSanta" target = "_blank" rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}}/></a>

        </div>
        <div className = "otherProject">
        <h2 style = {{color: " #8eead1"}}> Minimum Edit Distance</h2>
            <p>A python project to calculate the minimum edit distance between words, effectively creating a spell check</p> <br/>
            <a href = "https://github.com/erafkin/min_edit_distance" target = "_blank" rel = "noopener noreferrer"><img src = {open} style = {{width:"25px"}}/></a>
        </div>
       
      </div>
        );
};

}export default Personal_Projects;
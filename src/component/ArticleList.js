import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {useState} from 'react'

export class ArticleList extends Component {

    
    constructor(props){
        super(props)
        

        this.state= {
           articles: []
        }
    

    }
    
//     this.state= {
//         posts: []
//      }
//  }
//     componentDidMount(){
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then( response => {
//             console.log(response)
//             this.setState({posts:response.data})
//         })
//         .catch(error=>{
//             console.log(error)
//         } )
//     }
//     render() {
//         const { posts } = this.state
//         return (
//             <div>
//                 List of Articles
//                 {
//                     posts.length ?
//                     posts.map(post => <div key={post.id}>{post.title}</div>) :
//                     null
//                 }
//             </div>
//         )
//     }
// }

componentDidMount(){
    axios.get('http://localhost/www/nette-blog/www/articles/get')
    .then( response => {
        console.log(response)
        this.setState({articles:response.data})
    })
    .catch(error=>{
        console.log(error)
    } )
}

handleEdit( article)
{
    const content = article.content;
    const title = article.title;
console.log(article)
    
}


render() {
    
    const { articles } = this.state
    return  ( 
        <div>
            List of Articles
          
          
            {
            
                articles.length ?
                articles.map(article => <div key={article.id}><br/>
            <br/>{article.title}<br/><br/>{article.content}<br/><Link to={`/editform/${article.id}`}><button onClick={() =>{}}>Editovat</button></Link></div>) :
                null
                
            }
          
        </div>
        
        
    )
    
}

}

export default ArticleList


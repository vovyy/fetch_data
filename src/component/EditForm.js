import React from 'react'
import {useState} from 'react'
import ArticleList from './ArticleList';
import axios from 'axios';
import {handleEdit} from './ArticleList';






const EditForm  = () => {
    const [values, setValues] = useState({title: '', content: ''})
    const [sent, setSent] = useState(false);
    const handleChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }    

    async function handleSubmit(event) {
        event.preventDefault();
        const response=await axios.get(
            'http://localhost/www/nette-blog/www/articles/edit',
            { title: `${values.title}`, content: `${values.content}` }
        );
        console.log(response);
        setSent(true);
    }

    if (!sent) {
        return (
            <div style={{paddingLeft: '1vw',}}>
              <form onSubmit={handleSubmit}>
                <div class="form-group"style={{paddingTop: '2vh', paddingBottom: '2vh',}}>            
                  <label>Title:</label><br/>
                  <input
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                  />
                </div>
                <div class="form-group"style={{paddingBottom: '2vh',}}>
                  <label>Content:</label><br/>
                  <input
                    name="content"
                    type="text"
                    onChange={handleChange}
                    value={values.content}
                  />
                </div>
                

                <button type="submit">Send</button>
              </form>
            </div>
        );
    } else {
        return (
            <div style={{paddingLeft: '1vw',paddingTop: '1vh'}}>
              <p>Thanks for contacting us! </p>
              <p>We'll respond to your message shortly.</p>
            </div>            
        )
    }
}        


export default EditForm;
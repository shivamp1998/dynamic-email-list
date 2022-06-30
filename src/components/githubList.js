import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './githublist.css';
import { values } from 'lodash';


const GithubList = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
      axios.get('https://api.github.com/repos/octocat/Hello-World/issues?q=state:open').then((response)=>{
        if(response.status===200){
            console.log(response.data);
            setIssues(response.data);
        }
      })
    }, [])
    
  return (
    <div className='container'>
        <div className='header'>
            <div className='filter'>
                <button>Filter</button>
                <input type="text" placeholder='is:issue is:open'></input>
            </div>
            <div className='labels'>
                <button>Labels</button>
                <button>Mile-stones</button>
                <button>New_Issue</button>
            </div>
        </div>
        <div className='table'>
            <div className='boxheader'>
                <div className='issues'>
                    588 Open
                </div>
                <div className='header'>
                    <div>Author</div>
                    <div>Author</div>
                    <div>Author</div>
                    <div>Author</div>
                    <div>Author</div>
                    <div>Author</div>
                </div>
            </div>
            <div className='issues-list'>
                    <table>
                        <tbody>
                        {
                            issues.map((value,index)=>{
                                return(
                                <tr>
                                    <td>{value.title}</td>
                                </tr>
                                )
                    })}
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
  )
}

export default GithubList
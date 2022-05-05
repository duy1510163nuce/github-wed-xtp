import './App.css';
import React , {useState} from 'react' ;
function App() {
  const [count,setCount] = useState(0)
  const [post, setPost] = useState({
    author: '',
    content:'', 
    index: count 
  }) 

  const [listPost, setListPost] = useState([]);
  const [isEdit,setIsEdit] = useState(false)

  const onChange= (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setPost({...post, [name]: value});  // ...post : giữ nguyên ban đầu có  và thêm name : value
  }
  const submit = () => {
    if(!isEdit){
      const amount = count + 1 ;
      setCount(amount);
     
      setPost({
        author: '',
        content:'',
        index: amount
      });
      // console.log(post)
      setListPost([...listPost, post]);
      
    } else {
      console.log(post.index)
      // console.log(post)
      // console.log(listPost)
      // console.log(listPost.slice(post.index , post.index+1))
      // listPost.slice(post.index , post.index+1) = post;
      listPost.find((arr,i) => {
        console.log(i)
        if(i == post.index) {
          listPost[i] = post;
        }
      })
      setListPost([...listPost])
      setIsEdit(false);
    }
  }
  const Edit = (p) => {
    console.log(p);
    setIsEdit(true);
    setPost(p);
  }

  const like = (index) =>{
    console.log(like)
    listPost[index].like = !listPost[index].like
    setListPost([...listPost])
  }

  return (
    <div className="App">
   {/* <ShoppingList /> */}
      {}
      <div className="App">
            <div>
              tác giả :
              <input
                name="author"
                value={post.author ?? ""}    // bên nào có giá trị thì lấy 
                onChange= {e => onChange(e)}
              />
            </div>
            <div>
              nội dung : 
              <input
                name="content"
                value={post.content ?? ""}
                onChange={e => onChange(e)}
              />
            </div>
            <button class="submit" onClick={(e) => submit(
            )}>{isEdit ? "Sửa" : "Thêm"}</button>-  
          <div className="form">
            <div className="Name">
                {
                  listPost.map((p,index) => {
                    return(
                      <>
                        <div className="form-Name">
                          <span># {index}</span>
                          <p>{p.author}</p>
                          <p>{p.content}</p>
                          <button className='button-like' style={{background: p.like ? 'red' :''}} onClick={(e) => like(index)} >like</button>
                          <button className='button-edit' onClick={(e) => Edit(p)} >Sửa </button>
                        </div>
                      </>
                    )
                  })
                }
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
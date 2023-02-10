import React ,{useState}from 'react';
import './signup.css'

const Signup = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [displayName , setDisplayName] = useState('')
    const [thumbnail , setThumbnail] = useState(null);
    const [thumbnailError , setThumbnailError] = useState(null);

    const handleFileChange = (e) =>{
        setThumbnail(null);
        let selected = e.target.files[0];
        console.log("file entekhab shode :",selected)
        if(!selected){
            setThumbnailError("please select a file")
            return;
        }
        if(!selected.type.includes('image')){
            setThumbnailError("selected file must be image");
            return;
        }
        if(selected.size > 100000){
            setThumbnailError("image file size must be less tahn 100kb");
            return;
        }
        setThumbnailError(null);
        setThumbnail(selected);
        console.log("thumbnail updated")
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email , password , displayName , thumbnail)
    }
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label>
            <span>email :</span>
            <input type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        <label>
            <span>password :</span>
            <input type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <label>
            <span>display name :</span>
            <input type="text"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            />
        </label>
        <label>
            <span>profile thumbnail :</span>
            <input type="file"
            required
            onChange={handleFileChange}
            />
            {thumbnailError && <div className='error'>{thumbnailError}</div>}
        </label>
        <button className='btn'>Signup</button>
    </form>
  )
}

export default Signup
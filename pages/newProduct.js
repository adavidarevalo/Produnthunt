
import React, {useState, useContext} from "react"
import Layout from '../components/layout/Layout'
import {Container, Form, Button} from "../components/UI/Form"
import Router, {useRouter} from "next/router"
import useValidation from "../hooks/useValidation"
import createNewProduct from "../validation/createNewProduct"
import {FirebaseContext} from "../firebase"
import FileUploader from "react-firebase-file-uploader"
import Error404 from "../components/layout/Error404"


const Inicial_State = {
    name: "",
    commentary: [],
    company:"",
    image:"",
    url:"",
    description:""
}
export default function Home() {
  const [nameImagen, setNameImage] = useState("")
  const [uploading, setUploading] = useState(false)
  const [loading, setloading] = useState(0)
  const [urlImage, setUrlImage] = useState("")
  const router = useRouter()
  const {user, firebase} = useContext(FirebaseContext)
  const [Error, addError] = useState(false)
  const{Value, error, submitForm, handleChange, handleSubmit, handleBlur} = useValidation(Inicial_State, createNewProduct, createProduct)
  const {name, company, image, url, description, commentary} = Value
    async function createProduct(){
      if(!user){
        return router.push("/login")
      }
      const product = {
        name,
        company,
        url,
        commentary:[],
        description,
        urlImage,
        votes: 0,
        date: Date.now(),
        creator:{
          name: user.displayName,
          id: user.uid
        },
        votesComplete: []
      }
      firebase.db.collection("product").add(product)
      router.push("/")
    }
    const handleUploadStart = () => {
      setloading(0),
      setUploading(true)
    }
    const handleProgress = progress => {
      setloading({ progress })
    }
    const handleUploadError = error => {
      setUploading(error)
      console.error(error);
    };
    const handleUploadSuccess = name => {
      setloading(100),
      setUploading(false),
      setNameImage(name)
      firebase
        .storage
        .ref("product")
        .child(name)
        .getDownloadURL()
        .then(url => {
          setUrlImage(url)});
    };
  return (
    <div>
      <Layout>
        {!user ?(
          <Error404/>
        ):(
        <Container>
        <Form>
          <fieldset>
          <legend>New Product</legend>
          <div>
              <label>Name</label>
              <input
              type="text"
              name="name"
              placeholder="The product name"
              value={Value.name}
              onBlur={handleBlur}
              onChange={handleChange}
              />
          </div>
          {error.name?<p>{error.name}</p>:null}
          <div>
              <label>Company</label>
              <input
              type="text"
              name="company"
              placeholder="The company name"
              value={Value.company}
              onBlur={handleBlur}
              onChange={handleChange}
              />
          </div>
          {error.company?<p>{error.company}</p>:null}
          <div>
              <label>Image</label>
              <FileUploader
              accept="image/*"
              name="image"
              randomizeFilename
              storageRef={firebase.storage.ref("product")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
              />
          </div>
          {error.image?<p>{error.image}</p>:null}
          <div>
              <label>URL</label>
              <input
              type="text"
              name="url"
              value={Value.url}
              placeholder="The url of the Product"
              onBlur={handleBlur}
              onChange={handleChange}
              />
          </div>
          {error.url?<p>{error.url}</p>:null}
          </fieldset>
          <fieldset>
            <legend>About the Product</legend>
            <div>
              <label>Description</label>
              <textarea 
              type="textarea"
              name="description"
              value={Value.description}
              placeholder="The Description of the Product"
              onBlur={handleBlur}
              onChange={handleChange}
              ></textarea>
          </div>
          {error.description?<p>{error.description}</p>:null}
          </fieldset>
          <Button
          type="submit"
          onClick={
            handleSubmit
           }
          >Create New Product</Button>
          {Error && <p>{Error}</p>}
        </Form>
        </Container>
        )}
      </Layout>
    </div>
  )
}

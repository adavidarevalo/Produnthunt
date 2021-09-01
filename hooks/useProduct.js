
import React,{useEffect, useState, useContext} from "react"
import {FirebaseContext} from "../firebase"

const product = order =>{
  const [product, setProduct] = useState([])
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const getProduct = ()=>{
      firebase.db.collection("product").orderBy(order, "desc").onSnapshot(getSnapshot)
    }
    getProduct()
  },[])
  function getSnapshot(snapshot){
    const product = snapshot.docs.map(doc=>{
      return{
        id: doc.id,
        ...doc.data()
      }
    })
    setProduct(product)
  }
  return {
    product
  }
}

export default product
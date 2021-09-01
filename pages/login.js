
import React, {useState} from "react"
import Layout from '../components/layout/Layout'
import {Container, Form, Button} from "../components/UI/Form"
import Router from "next/router"
import useValidation from "../hooks/useValidation"
import logIngValidation from "../validation/logIngValidation"

import firebase from "../firebase"

const Inicial_State = {
    name: "",
    email:"",
    password:"",
    confirmPassword:""
}
export default function Home() {
  const [Error, addError] = useState(false)
    const{Value, error, submitForm, handleChange, handleSubmit, handleBlur} = useValidation(Inicial_State, logIngValidation, LogIn)
    async function LogIn(){
      try {
        await firebase.LogInF(Value.email, Value.password)
        Router.push("/")
      } catch (error) {
        console.error("There was Error", error.message);
        addError(error.message)
      }
    }
  return (
    <div>
      <Layout>
        <Container>
        <Form>
          <h2>Log In</h2>
          <div>
              <label>Email</label>
              <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={Value.email}
              onBlur={handleBlur}
              onChange={handleChange}
              />
          </div>
          {error.email?<p>{error.email}</p>:null}
          <div>
              <label> Password</label>
              <input
              type="password"
              id="password"
              name="password"
              value={Value.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your password"
              />
          </div>
          {error.password?<p>{error.password}</p>:null}
          <Button
          type="submit"
          onClick={
            handleSubmit
           }
          >Log In</Button>
          {Error && <p>{Error}</p>}
        </Form>
        </Container>
      </Layout>
    </div>
  )
}

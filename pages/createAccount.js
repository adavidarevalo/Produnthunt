
import React, {useState} from "react"
import Layout from '../components/layout/Layout'
import {Container, Form, Button} from "../components/UI/Form"
import Router from "next/router"
import useValidation from "../hooks/useValidation"
import createAccountValidation from "../validation/createAccountValidation"

import firebase from "../firebase"

const Inicial_State = {
    name: "",
    email:"",
    password:"",
    confirmPassword:""
}
export default function Home() {
  const [Error, addError] = useState(false)
    const{Value, error, submitForm, handleChange, handleSubmit, handleBlur} = useValidation(Inicial_State, createAccountValidation, createAccount)
    async function createAccount(){
      try {
        await firebase.addAccount(Value.name, Value.email, Value.password)
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
          <h2>Create Account</h2>
          <div>
              <label> Name</label>
              <input
              type="text"
              id="name"
              name="name"
              value={Value.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your Name"
              />
          </div>
          {error.name?<p>{error.name}</p>:null}
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
          <div>
              <label>Confirm Password</label>
              <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={Value.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your password"
              />
          </div>
          {error.confirmPassword?<p>{error.confirmPassword}</p>:null}
          <Button
          type="submit"
          onClick={
            handleSubmit
           }
          >Create Account</Button>
          {Error && <p>{Error}</p>}
        </Form>
        </Container>
      </Layout>
    </div>
  )
}

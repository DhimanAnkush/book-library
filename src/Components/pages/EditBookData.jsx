import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form({
  margin: "20px",
  width:"100%"
});
// add style for text area
export const Textarea = styled.textarea({
  margin:"20px",
  width:"29%",
  height:'100px',
  borderRadius: "5px",
  padding:"10px"
});

export const EditBookData = () => {

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/books/${id}`, {
      method: "PATCH"
    }).then((res)=>res.json()).then((res) => {
      console.log(res)
      navigate(`/books/${id}`)
    })
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
        /><br/>
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
        /><br/>
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};

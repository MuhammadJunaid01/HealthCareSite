import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./addservice.css";
const Addservice = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // axios.post()
    axios
      .post("http://localhost:5000/doctors", data)
      .then(function (response) {
        console.log(response);
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Container>
        <h1>hello add service</h1>
        <div className="form-service">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Name" />
            <textarea {...register("info")} placeholder="description" />
            <input {...register("image")} placeholder="ImageUrl" />
            <input type="submit" />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Addservice;

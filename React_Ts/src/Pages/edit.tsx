/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

interface User {
  name: string;
  email: string;
}

interface Inputs {
  name?: string;
  email?: string;
}

export default function Edit() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<Inputs>({});
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUser = () => {
    http.get(`/users/${id}/edit`).then((res) => {
      const { name, email } = res.data;
      setInputs({ name, email });
    });
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  const submitForm = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await http.put(`/users/${id}`, inputs);
      navigate("/");
    } catch (error) {
      // Handle the error
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="create w-50">
      <marquee className="breadcrumb mb-4 w-25 " id="marquee">
        Edit page
        <svg
          width="24"
          height="24"
          className="ms-5"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M9 23h-5.991c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h2v-1h-2c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h2v-1h-2c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h18.008c.552 0 1 .448 1 1s-.448 1-1 1h-2.001v1h2.001c.552 0 1 .448 1 1s-.448 1-1 1h-2.001v1h2.001c.552 0 1 .448 1 1s-.448 1-1 1h-6.003v-6h-6.014v6zm13.172-9h-20.302l10.124-8.971 10.178 8.971zm-10.169-13s9.046 7.911 11.672 10.244c.413.367.45.999.083 1.412-.367.413-.996.445-1.412.083-2.421-2.105-10.343-9.063-10.343-9.063s-7.899 6.893-10.327 9.051c-.413.367-1.046.329-1.413-.083-.367-.413-.329-1.045.083-1.412 2.626-2.333 11.657-10.232 11.657-10.232zm.01 7c1.104 0 2 .896 2 2s-.896 2-2 2c-1.105 0-2.001-.896-2.001-2s.896-2 2.001-2zm7.003-5h2.984v5.128l-2.984-2.59v-2.538z" />
        </svg>
      </marquee>
      <div className="mb-3 ">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={submitForm} className="btn btn-info">
        Submit
      </button>
    </div>
  );
}

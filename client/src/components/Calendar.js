import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNewEntry, getAllEntries } from "../slices/calendarSlice";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const { entryList } = useSelector((state) => state.entry);
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  const addEntry = (data) => {
    let now = new Date(date);
    let utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    dispatch(addNewEntry({ ...data, created_date: utc }));
    handleClose();
    console.log(utc);
  };

  return (
    <div className="calendar-container">
      <p className="c">
        <span className="bold">Selected Date:</span> {date.toDateString()}
        <br></br>
        <form onSubmit={handleSubmit(addEntry)}>
          <Calendar onChange={setDate} value={date} />
          <label>title</label>
          <input
            type="text"
            {...register("title")}
            placeholder="title of appointment"
          />
          <br></br>

          <label>description</label>
          <input
            type="text"
            {...register("description")}
            placeholder="description of appointment"
          />
          <br></br>
          <p></p>
          <button type="submit">Confirm your date</button>
        </form>
      </p>
      <p>title of appointment:{entryList.title}</p>
    </div>
  );
};

export default Schedule;

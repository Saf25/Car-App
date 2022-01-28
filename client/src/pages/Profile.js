import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./../slices/userSlice";
import Schedule from "../components/Calendar";
import { addNewEntry, getAllEntries } from "./../slices/calendarSlice";
import { useForm } from "react-hook-form";

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { handleSubmit } = useForm();
  const EntryInput = (data) => {
    dispatch(addNewEntry(data));
  };
  console.log(userInfo);
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <div className="c">
      <>
        <h4>{`Welcome Mr. ${userInfo.name}`}</h4>
        Please Book an appointment car check date
        <br></br>
      </>
      <br></br>
      <Schedule />
      <button onClick={() => handleSubmit(EntryInput)} type="submit">
        Confirm your date
      </button>
    </div>
  );
};
export default Profile;

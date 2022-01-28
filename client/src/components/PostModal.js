import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewPost, updatePost } from "../slices/postSlice";
import "bootstrap/dist/css/bootstrap.min.css";
//<e will use props here to deal with if it's edit or newpost
function PostModal({ check, title, desc, id }) {
  //show & hide the model teb3in l copy paste ta3 lmodal boot
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //we jsut need useForm from react hook form, it's not register fct
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  //fonction s'ajout new Post fel front
  //benesba lel postslice houa elli ya7ki ma3 lback
  //houni juste affichahe

  const addPost = (data) => {
    //feha l update zeda
    check ? dispatch(updatePost({ ...data, id })) : dispatch(addNewPost(data));
    handleClose();
  };

  //const { errors, isAuth } = useSelector((state) => state.user);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        {/* we will pass propos to modal here */}
        {check ? <i class="fas fa-edit"></i> : "Add Vehicle"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(addPost)}>
          <label>title</label>
          <input type="text" {...register("title", { value: title })} />
          <br></br>

          <label>description</label>
          <input type="text" {...register("desc", { value: desc })} />
          <br></br>
          <button type="submit">{check ? "Update" : "Add Vehicle"}</button>
        </form>
      </Modal>
    </div>
  );
}

export default PostModal;
// adding new Post with inputs
//using register title and desc are the same existing in the post schema in DB
// idha maste3amalnech l hook form ywali ya3ref bel name ta3 input

//pr faire l update il faut passer les nvelles infos à travers le modal
//dc on va prendre title et desc et les faire passer au input pr l update
//welli houma bech yetbadlou fel post modal
//kima 3additlou check bech nemchi n3adilou les infos ta3 lpost
//eni fel Modal mnin bech njib les infos ta3 lpost lazem yet3adew ka props

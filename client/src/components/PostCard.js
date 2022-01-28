import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost } from "../slices/postSlice";
import PostModal from "./PostModal";

//on doit passer les paramétre à la fonction PostCard destructured
//à partir mel schema ta3 post

// l_id 3adinahah houni direct fel params puisque fel Post.js
//a3malna spread ta3 lpost ma3neha 5deha les infos ta3 post menhom el owner w el lid
//du cp n3aytou lel _id direct
//donc fel postlist elli fel Posts walla y3adi l _id wa7dou w title wa7dou
//5ater spreadineha fel Post
///***heka a3leh fel houni fel Post Card ne5ou kol wehed wa7dou */
// neou lid ta3 lowner elli houa owner._id

const PostCard = ({ title, desc, owner, _id }) => {
  //el5edma elli louta jeya mel bootstrap copy paste
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Sir {owner.name}</h4>
      <h5>Here are you registred cars</h5>
      <Card style={{ width: "300px", margin: " 5px 10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        ></div>
        <Card.Img
          style={{ width: "300px" }}
          variant="top"
          src="https://cdn.mos.cms.futurecdn.net/TR4wp3g5bUSPcwpeUiohUU-970-80.jpg.webp"
        />
        <Card.Body>
          {/* on this line we will use children props to Postmodal but not usualy */}
          <PostModal check={true} title={title} desc={desc} id={_id} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="primary">
            {userInfo._id === owner._id && (
              <i
                class="fas fa-trash-alt"
                style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
                onClick={() => dispatch(deletePost(_id))}
              ></i>
            )}
            Delete Car Item
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default PostCard;

//houni je n 'ai pas besoin d'une fonction remove parcequ'elle ne fait que
//supprimer un post c qui aete deja fait et exporté
//donc on dispatch directement

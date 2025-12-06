import React from "react";
import "./mainPage.css";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "./menuSlice";

export default function MainPage() {
  const menuState = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="inside main">
        <h2>Welcome to Paradise Nursey</h2>
        <hr></hr>
        <p>where green meets serenity</p>
        <button
          className="get-started-button"
          onClick={() => {
            dispatch(openMenu());
            console.log("menu: ", menuState);
          }}
        >
          Get Started!
        </button>
      </div>
      <div className="inside">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
          veniam eaque. Perferendis, est ex? In tempora ad sapiente pariatur
          tenetur tempore iusto, exercitationem dolores omnis ducimus accusamus
          velit maiores quod! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Porro, veniam eaque. Perferendis, est ex? In tempora
          ad sapiente pariatur tenetur tempore iusto, exercitationem dolores
          omnis ducimus accusamus velit maiores quod!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          maiores totam illum tempore? Sint iste a ipsum tempore, eligendi porro
          laborum molestiae ipsa velit incidunt iure perferendis repudiandae
          delectus quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Porro, veniam eaque. Perferendis, est ex? In tempora ad sapiente
          pariatur tenetur tempore iusto, exercitationem dolores omnis ducimus
          accusamus velit maiores quod!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt
          totam aliquid enim, at reprehenderit sunt aliquam quam ratione.
          Expedita dolor hic fugiat laboriosam suscipit eius accusantium
          aliquid! Nesciunt, quis. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Porro, veniam eaque. Perferendis, est ex? In tempora
          ad sapiente pariatur tenetur tempore iusto, exercitationem dolores
          omnis ducimus accusamus velit maiores quod!
        </p>
      </div>
    </div>
  );
}

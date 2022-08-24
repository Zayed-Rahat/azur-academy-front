import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const {
    price,
    category,
    subs,
    quantity,
    sold,
  } = product;

  return (
    <ul className="list-group">
      <li className="list-group-item">
        Price{" "}
        <span className="label label-default label-pill pull-xs-right">
          BDT {price}
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          Sub Categories
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}
      <li className="list-group-item">
        Available{" "}
        <span className="label label-default label-pill pull-xs-right">
          {quantity}
        </span>
      </li>

   {/*    <li className="list-group-item">
        Sold{" "}
        <span className="label label-default label-pill pull-xs-right">
          {sold}
        </span>
      </li> */}
    </ul>
  );
};

export default ProductListItems;

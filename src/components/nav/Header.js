/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Menu, Badge } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import { getCategories } from "../../functions/category";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const [categories, setCategories] = useState([]);

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };
  useEffect(() => {
    getCategories().then((c) => {
      setCategories(c.data);
    });
  }, []);

  const showCategories = () =>
    categories.map((c) => (
      <div
        key={c._id}
      >
        <Item>
        <Link to={`/category/${c.slug}`}>{c.name}</Link>
      </Item>
      </div>
    ));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <>
    
  <button type="button" className="btn btn-primary" >
    <Link to="/"><h6 className="d-flex  text-primary"><b>Skill Up Academy</b></h6></Link>
  </button>

    <Menu  onClick={handleClick} className="d-flex justify-content-end"  selectedKeys={[current]} mode="horizontal">

       <SubMenu
          icon={<ShoppingCartOutlined />}
          title="Categories"
        >
             { showCategories() }
        </SubMenu>

      <Item key="shop" icon={<ShoppingOutlined/>} >
        <Link to="/shop">Shop</Link>
      </Item>

      <Item key="cart" 
          icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          <Badge count={cart.length} offset={[9, 0]}>
            Cart
          </Badge>
        </Link>
      </Item>

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="float-right"
        >
          {user && user.role === "subscriber" && (
            <Item key="subscriber">
              <Link to="/user/history">Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item key="admin">
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}

       <span className="d-flex justify-content-center">
        <Search />
      </span>
    </Menu> 
  
      </>
  );
};

export default Header;

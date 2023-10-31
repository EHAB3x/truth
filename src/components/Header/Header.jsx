import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,} from "@nextui-org/react";
import React, {useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fetchArabic, fetchEnglish } from "../../RTK/Slices/Languages";

const Header = () => {
  const [language, setLanguage] = useState('') ;
  const dispatch  = useDispatch();
  return (
    <Navbar isBlurred="true" position="sticky">
      <NavbarBrand>
        <p className="font-bold text-inherit logo">TRUTH</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
        <Dropdown className="dark">
            <DropdownTrigger>
                <Button variant="shadow" color="success">
                    {language === 'ar' ? "اللغة" : "Languages"} <FontAwesomeIcon icon={faChevronDown}/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" variant='shadow' color="success" className="menu">
                <DropdownItem key="ar" onClick={()=> {
                  dispatch(fetchArabic())
                  document.body.setAttribute('dir','rtl');
                  }} style={{textAlign:'end'}}>العربية</DropdownItem>
                <DropdownItem key="en" onClick={()=> {
                  dispatch(fetchEnglish())
                  document.body.setAttribute('dir','ltr');
                  }}>English</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, MobileNav, Button, Typography, IconButton } from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";

export default function CustomNavbar() {
const [isNavOpen, setIsNavOpen] = React.useState(false);
const toggleIsNavOpen = () => setIsNavOpen(!isNavOpen);

return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full">
    <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="/" className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-[20px] text-[#f37bc5] uppercase">
        My Store
        </Typography>
        <div className="hidden lg:flex items-center space-x-6">
        <Link 
            to="/" 
            className="text-[#f37bc5] text-lg hover:text-[#d5006d]">
            Inicio
        </Link>
        <Link 
            to="/products" 
            className="text-[#f37bc5] text-lg hover:text-[#d5006d]">
            Tienda
        </Link>
        <Link 
            to="/about" 
            className="text-[#f37bc5] text-lg hover:text-[#d5006d]">
            Nosotros
        </Link>
        </div>
        <IconButton
        size="sm"
        color="blue-gray"
        variant="text"
        onClick={toggleIsNavOpen}
        className="lg:hidden"
        >
        <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <MobileNav open={isNavOpen}>
        <div className="flex flex-col items-start space-y-4">
            <Link 
                to="/" 
            className="text-[#f37bc5] text-lg hover:text-[#d5006d]">
            Inicio
            </Link>
            <Link 
            to="/products" 
            className="text-[#f37bc5] text-lg hover:text-[#d5006d]">
            Tienda
            </Link>
            <Link 
            to="/about" 
            className="text-[#f37bc5] text-lg hover:text-[#d5006d]" >
            Nosotros
            </Link>
        </div>
        </MobileNav>
        <Button 
        size="sm" 
        variant="text" 
        className="ml-auto text-[#f37bc5] hover:text-[#d5006d]"
        onClick={() => {  }}
        >
        <Link to="/contact">Contact</Link>
        </Button>
    </div>
    </Navbar>
);
}

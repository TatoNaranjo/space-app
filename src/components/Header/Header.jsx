import { useState } from "react"
import styled from "styled-components"
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 24px;

    img{
        width: 212px;
        cursor:pointer;
    }
    .searchImg{
        width:32px;
        height:32px;
    }
    @media (max-width: 480px) {
    padding-top: 24px;
    gap: 24px;
    flex-direction: column;
}
`

const StyledHeaderIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.hamburguer{
        display: none;
        width: 32px;
        height:32px;
    }
    @media (max-width:480px) {
        .hamburguer{
            display: block;
        }
    }

`

const StyledSearchBar= styled.div`
display: inline-flex;
justify-content: center;
padding:12px 16px;
align-items: center;
border-radius: 10px;
box-sizing: border-box;
gap:365px;
border: 2px solid;
border-color: #C98CF1;
form{
    display: flex;
}

button{
    background: none;
    border:none;
    
}

input{
    border:none;
    background: none;
    outline:none;
    color:#D9D9D9;
    width: 100%;
    line-height: 20px;
    font-size:20px;
    font-weight: 400;
}


`

export default function Header(props){
    const {handleSearch, handleMobileMenu}=props

    const [search,setSearch] = useState("");

    const handleValue = (event)=>{
        setSearch(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        handleSearch(search);
    }

      
    return (
        <StyledHeader>
            <StyledHeaderIcons>
            <img src="/img/icons/menu.svg" className="hamburguer" alt="Logo" onClick={handleMobileMenu}/>
            <img src="/img/Logo.png" alt="Logo"/>
            </StyledHeaderIcons>
            <StyledSearchBar>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="¿Qué estás Buscando?" onChange={handleValue} value = {search}/>
            <button><img src="/img/Search.png" alt="Search" className="searchImg"/></button>
            </form>
            </StyledSearchBar>
        </StyledHeader>
    )
}
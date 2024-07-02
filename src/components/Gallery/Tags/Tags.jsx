import styled from "styled-components";
import tags from "./tags.json"
const StyledTag = styled.p`
color:#FFFFFF;
text-align:center;
font-size:24px;
font-weight: 400;
line-height: normal;

padding:10px 8px;
border-radius: 10px;
background: rgba(217, 217, 217, 0.30);

&:hover{
    border-color:#C98CF1;
    cursor:pointer;
}

@media (max-width:1280px) {
    font-size:18px;
}
@media (max-width:480px){
    font-size:14px;
}

`
export default function Tags(props){
   const {handleTag} = props
    return (
        <>
        {tags.map((tag)=>{
           return <StyledTag key={tag.id} onClick={()=>handleTag(tag.id)}>{tag.titulo}</StyledTag>
        })}
        </>
    )
}
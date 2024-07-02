import styled from "styled-components"

const StyledListItem = styled.li`
    font-size: 24px;
    color: ${props => props.$active ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap:16px;
    &:hover{
        cursor:pointer;
    }
`

export default function NavItem(props){
   
   const {text, activeIcon, inactiveIcon,active} = props
    return (
        <StyledListItem $active={active}>
        <img src={active?activeIcon:inactiveIcon} alt={`${text} Icon`} />
        <span>{text}</span>
        </StyledListItem>
    )
}
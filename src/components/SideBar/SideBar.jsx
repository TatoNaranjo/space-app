import styled from "styled-components";
import NavItem from "./NavItem/NavItem";
const StyledList = styled.ul`
  margin: 0;
  list-style: none;

  @media (max-width: 480px) {
    padding: 0;
  }
    @media (max-width:900px){
    position: absolute;
  }
`;

const StyledAside = styled.aside`
  display: block;
  @media (max-width: 481px) {
    display: none;
  }
  
`;
const StyledMobileAside = styled.aside`
  display: none;
  
  @media (max-width: 480px) {
    display: flex;
    height: 100%;
    align-items: end;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    padding: 24px;
    background: linear-gradient(
      175deg,
      #041833 4.16%,
      #04244f 48%,
      #154580 96.76%
    );
    z-index: 1;
    .hamburguer-logo {
      width: 32px;
      height: 32px;
      display: block;
    }
  }
`;
export default function SideBar(props) {
  const { handleMobileMenu, isActive } = props;

  const handleChange = () => {
    handleMobileMenu();
    const styledAside = document.querySelectorAll("aside");
    styledAside[1].style.display = "none";
  };

  const navItems = [
    {
      activeIcon: "/img/icons/Home-Active.png",
      inactiveIcon: "/img/icons/Home-Inactive.png",
      text: "Inicio",
      active: true,
    },
    {
      activeIcon: "/img/icons/mostViewed-Active.png",
      inactiveIcon: "/img/icons/mostViewed-Inactive.png",
      text: "Más Visitados",
      active: false,
    },
    {
      activeIcon: "/img/icons/liked-Active.png",
      inactiveIcon: "/img/icons/liked-Inactive.png",
      text: "Más Me Gusta",
      active: false,
    },
    {
      activeIcon: "/img/icons/new-Active.png",
      inactiveIcon: "/img/icons/new-Inactive.png",
      text: "Nuevos",
      active: false,
    },
    {
      activeIcon: "/img/icons/surpriseMe-Active.png",
      inactiveIcon: "/img/icons/surpriseMe-Inactive.png",
      text: "Sorpréndeme",
      active: false,
    },
  ];

  return (
    <>
      <StyledAside>
        <nav>
          <StyledList>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                activeIcon={item.activeIcon}
                inactiveIcon={item.inactiveIcon}
                text={item.text}
                active={item.active}
              />
            ))}
          </StyledList>
        </nav>
      </StyledAside>

      {isActive && (
        <StyledMobileAside>
          <img
            src="/img/icons/close.svg"
            className="hamburguer-logo"
            alt="logo"
            onClick={handleChange}
          />
          <nav>
            <StyledList>
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  activeIcon={item.activeIcon}
                  inactiveIcon={item.inactiveIcon}
                  text={item.text}
                  active={item.active}
                />
              ))}
            </StyledList>
          </nav>
        </StyledMobileAside>
      )}
    </>
  );
}

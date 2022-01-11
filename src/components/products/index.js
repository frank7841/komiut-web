import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ProductsElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"
import "./../../App.css";
import { Link } from "react-router-dom";
import { ButtonBasic } from "../ButtonElements";


const Products = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Products</ServicesH1>
      <ServicesWrapper>
        <Link to ="conductor" className="link-p">
        <ServicesCard >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Cashlite Application</ServicesH2>
          <ServicesP>
            Our Application allows conductors print receipts, cash and/M-Pesa. <br/><br/>
            <span className="readmore" >Read more
          </span>

          </ServicesP>
        </ServicesCard>
        </Link>
        <Link to ="queueing" className="link-p">
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Auto Queueing App</ServicesH2>
          <ServicesP>
          Our Application allows stage managers to automatically manage matatus in a queue..  <br/><br/>
          <span className="readmore" >Read more
          </span>
          </ServicesP>
        </ServicesCard>
        </Link>
        <Link to="percel" className="link-p">
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Percel App</ServicesH2>
          <ServicesP>
          Our Application allows saccos to send trackable percel to their clients without much hustle  <br/><br/>
          <span className="readmore" >Read more
          </span>
          </ServicesP>
        </ServicesCard>
        </Link>
      </ServicesWrapper>
      <br/>
      <ServicesWrapper>
      <Link to="percel" className="link-p">
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Booking Office App</ServicesH2>
          <ServicesP>
          Does your Sacco deal with long distance travels, our application offers a flexible solution.  <br/><br/>
          <span className="readmore" >Read more
          </span>
          </ServicesP>
        </ServicesCard>
        </Link>
        <Link to ="passenger" className="link-p">
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Passanger App</ServicesH2>
          <ServicesP>
          Get online to capture more customers. passengers book and pay online,..   <br/><br/>
          <span className="readmore" >Read more
          </span>
          </ServicesP>
        </ServicesCard>
        </Link>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Admin Dashboard</ServicesH2>
          <ServicesP>
            Aenean in egestas lectus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.s
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Products;

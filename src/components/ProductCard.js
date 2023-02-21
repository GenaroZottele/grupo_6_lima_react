import { Col } from 'react-bootstrap';

export const ProductCard = ({ name, description, image }) => {
   return (
      <Col size={12} sm={6} md={4}>
         <div className="proj-imgbx">
            <img src={image} alt="ensalada" />
            <div className="proj-txtx">
               <h4>{name}</h4>
               <span>{description}</span>
            </div>
         </div>
      </Col>
   );
};

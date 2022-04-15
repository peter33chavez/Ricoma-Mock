import styled from "styled-components";
import BannerImg from "../assets/images/Banner-Image.png";
import ProductCard from "./ProductCard";
import Machine1 from "../assets/images/SingleMachine.png";
import Machine2 from "../assets/images/MachinePhoto3.png";
import Machine3 from "../assets/images/MultiMachine.png";

const items = [
  {
    id: 1,
    image: Machine1,
    name: "EM-1010",
    type: "Starter Embroidery Machine",
    needles: "10 Needles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
    price: 5999,
    discountedPrice: 7500,
  },
  {
    id: 2,
    image: Machine2,
    name: "TC-1501",
    type: "Commercial Embroidery Machine",
    needles: "15 Needles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
    price: 7999,
    discountedPrice: 7500,
  },
  {
    id: 3,
    image: Machine3,
    name: "MT-1501",
    type: "Commercial Embroidery Machine",
    needles: "10 Needles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
    price: 8999,
    discountedPrice: 7500,
  },
];

const Products = () => {
  return (
    <ProductsContainer>
      <HeaderText>
        <h1>Dui augue lectus</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo nec
          ultrices sit risus nisi non fermentum morbi. Tristique.
        </p>
      </HeaderText>
      <AllProducts>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            image={item.image}
            name={item.name}
            type={item.type}
            needles={item.needles}
            description={item.description}
            price={item.price}
            discountedPrice={item.discountedPrice}
          />
        ))}
      </AllProducts>
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  background: #e5e5e5;
  @media (min-width: 1432px) {
    background-image: url(${BannerImg});
    background-position: 0 75vh;
    background-repeat: no-repeat;
  }
`;
const HeaderText = styled.div`
  color: var(--primary-color);
  padding: 2rem;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 43px;
    text-transform: capitalize;
    text-shadow: 0px 2px 0px rgba(34, 34, 34, 0.1);
  }
  p {
    padding-bottom: 1rem;
    font-weight: 300;
    font-size: 24px;
    line-height: 38px;
  }
  @media (min-width: 840px) {
    padding: 4rem 9rem;
    h1 {
      font-size: 60px;
      line-height: 78px;
    }
  }
`;
const AllProducts = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 840px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 2rem;
    padding: 4rem 7rem;
  }
`;

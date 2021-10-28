interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <>
      <li>
        {name} tem {age} anos e seu hobby é {hobby}
      </li>
    </>
  );
};

export default Card;

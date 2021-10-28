interface CardProps {
  name: string;
  age: string;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <>
      <p>
        {name} tem {age} anos e seu hobby é {hobby}
      </p>
    </>
  );
};

export default Card;

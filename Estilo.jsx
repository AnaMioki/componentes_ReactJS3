function Estilo(props) {
    const estiloParagrafo = {
      color: props.isHighlighted ? 'red' : 'green',
      fontSize: '20px',
    };
  
    return (
      <p style={estiloParagrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, asperiores?
      </p>
    );
  }
export default Estilo; 
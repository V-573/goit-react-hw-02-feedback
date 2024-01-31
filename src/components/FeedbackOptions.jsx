import AddBtn from "./AddBtn";


const FeedbackOptions = ({estado, handleIncrement}) => {
    
    return ( // renderizado del compoente
        <>
        
 {Object.entries(estado).map(([key, value]) => (
            <AddBtn className= "Container"
              key={key}
              addOne={() => handleIncrement(key)}
              count={value}
              title={key.charAt(0).toUpperCase() + key.slice(1)} // ChartAt(0) Este metodo obtiene el caracter de una cadena de texto en la posicion encerrada en los parentesis
              />// slice (1) Es para obtener una parte de una cadena de text y el valor de argumento es un indice inclusivo lo que indica q el caracter de ese indice se incluye en la extraccion
              ))}

              </>

)



}

export default FeedbackOptions;
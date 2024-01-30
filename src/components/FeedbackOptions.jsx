import AddBtn from "./AddBtn";

const FeedbackOptions = ({estado, handleIncrement}) => {
    
    return (
        <>
        
 {Object.entries(estado).map(([key, value]) => (
            <AddBtn
              key={key}
              addOne={() => handleIncrement(key)}
              count={value}
              title={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalizar la primera letra
              />
              ))}

              </>

)



}

export default FeedbackOptions;
const ShowInfo = ({good}) => {
    
    return (
    
        
        
    
        <div style={{display: "flex", flexDirection: "column" }}>
        <h2>Statistics</h2>
        
           
 
           <span>{`Good: ${good}` }</span>     
           <span>Neutral: 3</span>     
           <span>Bad: 3</span>     

        </div>


    )


}

export default ShowInfo;
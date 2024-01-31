const Statistics = ({good, neutral, bad, totalF, positivePerce}) => {
    if (good || neutral || bad !== 0) {
         

        return (

       

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Statistics</h2>

                <span>{`Good: ${good}`}</span>
                <span>{`Neutral ${neutral}`}</span>
                <span>{`Bad ${bad}`}</span>
                <span>{`Total: ${totalF}`}</span>
                <span>{`Positive Feedback: ${positivePerce}%`}</span>
            </div>
        

      
    
       
    
    


        )
    }
       else {
        return (
            <h2>  "There is no feedback"  </h2>

            
)
        

        }
    

}

export default Statistics;
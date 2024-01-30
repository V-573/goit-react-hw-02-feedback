const Statistics = ({good, neutral, bad, totalF, positivePerce}) => {
    
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

export default Statistics;
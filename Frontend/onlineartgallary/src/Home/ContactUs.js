import Header from "./Header";

let ContactUs = () => {
    
    return(
        <div className='container-fluid'>
            
           <div className='container'>
            <h1>Project Members</h1>
            <br/><br/>
             <div className="row">
                <div className="col">
                    <div className="card" style={{width:"250px"}}>
                        <br/>
                        <h2 className="text-left">Parjwal Patil</h2>
                        <div className="card-body">
                        <p>PRN :- 064</p>
                        <br/>
                        <p>PG-DAC 2022</p>
                        <br/>
                        </div>
                    </div>
                </div>

                <div className="col">
                <div className="card" style={{width:"250px"}}>
                    <br/>
                    <h2 className="text-left">Omkar Ganjave</h2>
                    <div className="card-body">
                      <p>PRN :- 057</p>
                      <br/>
                      <p>PG-DAC 2022</p>
                      <br/>
                    </div>
                </div>
              </div>

              <div className="col">
                <div className="card" style={{width:"250px"}}>
                    <br/>
                    <h2 className="text-left">Ashwini Pawar</h2>
                    <div className="card-body">
                      <p>PRN :- 053</p>
                      <br/>
                      <p>PG-DAC 2022</p>
                      <br/>
                    </div>
                </div>
              </div>

              <div className="col">
                <div className="card" style={{width:"250px"}}>
                    <br/>
                    <h2 className="text-left">Pooja Bolkar</h2>
                    <div className="card-body">
                      <p>PRN :- 019</p>
                      <br/>
                      <p>PG-DAC 2022</p>
                      <br/>
                    </div>
                </div>
              </div>
             </div>
           </div>
        
        </div>
    )

}

export default ContactUs;
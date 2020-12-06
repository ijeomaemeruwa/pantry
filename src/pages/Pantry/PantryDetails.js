// import React, { Component } from 'react';
// import pantryImg from '../../assets/images/pantry.png';

// import Nav from '../../components/Nav/Nav';
// import Image from 'react-bootstrap/Image';

// class PantryDetails extends Component {
//     state = {
//         pantrydetails: []
//     } 
    

//     componentDidMount = async () => {
//     const pantrytitle = this.props.location.state.recipe;
//     this.setState({ pantrydetails: pantrytitle });
//     };


//     render() {
//     const { pantrydetails } = this.state

//     return (
//     <>
//     <Nav /> 
//     <section>
//     <div className="mx-auto">
//     <Image src={pantryImg} alt="pantry" fluid />  
//     </div>
//     <div>
//     <h2>{pantrydetails.title}</h2>
//     <p>{pantrydetails.category}</p>
//     <h4>{pantrydetails.ingredients}</h4>
//     <h4>{pantrydetails.procedure}</h4>
//     </div>
//     </section>    
//     </>
//     )
//     }
// }

// export default PantryDetails;

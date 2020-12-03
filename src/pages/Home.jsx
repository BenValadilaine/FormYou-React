import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <div className="container-fluid m-auto d-flex justify-content-center align-items-center" style={{ minHeight: "95vh" }}>


      <div className="row m-4 m-lg-0" style={{ minHeight: "75vh" }}>

        <div className="col-4 bg-home d-none d-lg-block">



        </div>

        <div className="col-lg-8 col-12 bg-white d-flex flex-column justify-content-around border-rounded" style={{ minHeight: "50vh", padding:"5.5rem" }}>



          <h1>Formez vous et vos collaborateurs tout au long de de votre vie grâce à FormYou &copy;</h1>


          <h2 className="text-dark-light-strong">Une solution innovante pour mettre l’entreprise et ses salariés au coeur du parcours individuel de formation</h2>

          <h3 className="text-dark-light">Des aides sont possibles, demander conseil à nos experts ...</h3>

          <div>

            <Link to="/formations" exact className="btn btn-lg col-md-4 col-12 btn-scheme" >Les Formations</Link>
          </div>

        </div>


      </div>


    </div>
  )
}

export default Home;
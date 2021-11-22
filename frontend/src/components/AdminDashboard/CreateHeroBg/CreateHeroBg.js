import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './CreateHeroBg.css'

const CreateHeroBg = () => {
    return (
        <>
        <div className="containerDashboard">
            <h3>Create Hero Area Content</h3>
            <form
                className="signUpForm"                
                encType="multipart/form-data"                
              >
                  <div className="signUpName">
                    <input type="text"
                    placeholder="Name"
                    required
                    name="name"  />
                  </div>

              </form>
        
        <Sidebar />
        </div>
            
        </>
    )
}

export default CreateHeroBg

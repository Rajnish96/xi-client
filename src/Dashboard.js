import React from 'react'

export default function Dashboard(props) {
    const { responseData } = props
    return (<>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6'>Frist Name</div>
                        <div className='col-6'>{responseData.first_name}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Last Name</div>
                        <div className='col-6'>{responseData.last_name}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Email</div>
                        <div className='col-6'>{responseData.email}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Country</div>
                        <div className='col-6'>{responseData.country}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>State</div>
                        <div className='col-6'>{responseData.state}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>City</div>
                        <div className='col-6'>{responseData.city}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Gender</div>
                        <div className='col-6'>{responseData.gender}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Date of Birth</div>
                        <div className='col-6'>{responseData.date_of_birth}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Aga</div>
                        <div className='col-6'>{responseData.age}</div>
                    </div>

                </div>
            </div>
        </div>

    </>
    )
}

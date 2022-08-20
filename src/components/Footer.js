import React from 'react'
import footer2 from '../img/footer2.png'

function Footer() {
  return (
    <div  > 


        <div className=" mt-10  bg-bottom bg-cover bg-grey">
        <img src={footer2} alt=' Footer '></img>

        <div className=' grid justify-items-center lg:grid-cols-3 gap-10 '>

                <div className='bg-[#aa7ca4] h-60 w-60 opacity-90 rounded-lg'>
                    <span className='text-white'>
                        <p className='font-bold text-lg'>Conference Chair</p>
                        <p>Dr B Latha</p>
                        <p>Professor & Head of Department, CSE
                           Sri Sai Ram Engineering College</p>

                        <p>hod.cse@sairam.edu.in
                            9840428435</p>
                    </span>
                </div>    

                <div className='bg-[#aa7ca4] h-60 w-60 opacity-90 rounded-lg'>
                    <span className='text-white'>
                        <p className='font-bold text-m'>Conference Chair</p>
                        <p>Dr B Latha</p>
                        <p>Professor & Head of Department, CSE
                            Sri Sai Ram Engineering College</p>

                        <p>    hod.cse@sairam.edu.in
                                9840428435</p>
                    </span>
                </div>

                <div className='bg-[#aa7ca4] h-60 w-60 opacity-90 rounded-lg'>
                    <span className='text-white'>
                        <p className='font-bold text-m'>Conference Chair</p>
                        <p>Dr B Latha</p>
                        <p>Professor & Head of Department, CSE
                            Sri Sai Ram Engineering College</p>

                        <p>    hod.cse@sairam.edu.in
                                9840428435</p>
                    </span>
                </div>

        </div>

        </div>
        

                    

    </div>
    
  );
}

export default Footer
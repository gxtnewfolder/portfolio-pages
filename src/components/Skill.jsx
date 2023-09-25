import React from 'react'

const Skill = () => {
    return (
      <div name="skills" className="w-full h-[120vh] sm:h-screen bg-[#0a192f] text-gray-300">
          {/* Container */}
          <div className='max-w-[1024px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
              <div>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                  <p className='pt-4'>// These are the technologies I've worked with</p>
              </div>
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-5'>
                  <div className='opacity-75 shadow-md shadow-[#040c16] p-5 rounded-lg hover:scale-110 duration-500 hover:opacity-100'>
                      <div className=''>
                        <div className='text-lg border-b'>Programming languages</div>
                        <div className='mt-3 text-sm'>
                            <div>C</div>
                            <div>C++</div>
                            <div>C#</div>
                            <div>Python</div>
                            <div>JavaScript</div>
                            <div>Ladder logic</div>
                        </div>
                      </div>
                  </div>
                  <div className='opacity-75 shadow-md shadow-[#040c16] p-5 rounded-lg hover:scale-110 duration-500 hover:opacity-100'>
                      <div className=''>
                        <div className='text-lg border-b'>Front-End Web Development</div>
                        <div className='mt-3 text-sm'>
                            <div>React.js</div>
                            <div>Svelte</div>
                            <div>Tailwind CSS</div>
                        </div>
                      </div>
                  </div>
                  <div className='opacity-75 shadow-md shadow-[#040c16] p-5 rounded-lg hover:scale-110 duration-500 hover:opacity-100'>
                      <div className=''>
                        <div className='text-lg border-b'>Back-End Web Development</div>
                        <div className='mt-3 text-sm'>
                            <div>Node.js</div>
                            <div>ASP.NET Core</div>
                            <div>ExpressJS</div>
                            <div></div>
                        </div>
                      </div>
                  </div>
                  <div className='opacity-75 shadow-md shadow-[#040c16] p-5 rounded-lg hover:scale-110 duration-500 hover:opacity-100'>
                      <div className=''>
                        <div className='text-lg border-b'>Robotics and Automation</div>
                        <div className='mt-3 text-sm'>
                            <div>PLC (SIEMENS, MITSUBISHI)</div>  
                        </div>
                      </div>
                  </div>
                  <div className='opacity-75 shadow-md shadow-[#040c16] p-5 rounded-lg hover:scale-110 duration-500 hover:opacity-100'>
                      <div className=''>
                        <div className='text-lg border-b'>Database System</div>
                        <div className='mt-3 text-sm'>
                            <div>MySQL</div>
                            <div>MSSQL</div>
                            <div>MongoDB</div>
                        </div>
                      </div>
                  </div>
                  <div className='opacity-75 shadow-md shadow-[#040c16] p-5 rounded-lg hover:scale-110 duration-500 hover:opacity-100'>
                      <div className=''>
                        <div className='text-lg border-b'>AI / Machine Learning</div>
                        <div className='mt-3 text-sm'>
                            <div>OpenCV</div>
                        </div>
                      </div>
                  </div>
                  <div className='opacity-75 shadow-md shadow-[#040c16] p-5 rounded-lg hover:scale-110 duration-500 hover:opacity-100'>
                      <div className=''>
                        <div className='text-lg border-b'>Tools</div>
                        <div className='mt-3 text-sm'>
                            <div>Visual studio (Microsoft, Desktop App)</div>
                            <div>PowerBI (Data visualization)</div>
                            <div>GX Works3 (PLC)</div>
                            <div>Git</div>
                        </div>
                      </div>
                  </div>
                  <div className='opacity-75 shadow-md shadow-[#040c16] p-5 rounded-lg hover:scale-110 duration-500 hover:opacity-100'>
                      <div className=''>
                        <div className='text-lg border-b'>Others</div>
                        <div className='mt-3 text-sm'>
                            <div>Embedded systems (Microcontroller / Microprocessor)</div>
                            <div>Arduino / ESP32 / IoT</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }

export default Skill
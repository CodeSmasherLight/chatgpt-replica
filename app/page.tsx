import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline' 

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

        <div className="flex space-x-2 text-center">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* Sun Icon */}
              <SunIcon className="h-8 w-8" />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"What is the difference between a dog and a cat"</p>
              <p className="infoText">"What is the colour of the Sun"</p>
            </div>
          </div>


          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* Sun Icon */}
              <BoltIcon className="h-8 w-8" />
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Change the ChatGPT Model to USe</p>
              <p className="infoText">Messages are stored in Forebase's Forestore</p>
              <p className="infoText">Hot Toast notifications when ChatGPT is thinking!</p>
            </div>
          </div>


          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/* Sun Icon */}
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">May occasionaly generate incoreect information</p>
              <p className="infoText">May occasionaly produce harmful instructions</p>
              <p className="infoText">Have limited knowledge of World and Events that have happened after 2022</p>
            </div>
          </div>


        </div>
        </div>
  )
}

export default Homepage
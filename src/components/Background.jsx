import React from 'react'

function Background() {
  return (
    <div className='p-0.5' id ="background">
    <div className="px-4 pt-5 my-5" >
    <h1 className="display-4 text-center text-body-emphasis title">Background</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 text bg-p">
      I have been exposed to spiritual awareness, energy healing and the gift of exploring dimensions beyond the physical realm since I could remember. This journey has been a profound and transformative experience that has opened my eyes to a deeper understanding of existence and the interconnectedness of all things. It has guided me to explore concepts such as mindfulness, meditation, and self-discovery.
<br/><br/>

Over the past 4 years, I have begun opening my spiritual gift's to others. As I continue to learn from various mediums, shamans and spiritual healers, I have developed my own intuitive tools to share with others. Through the development of my abilities, I have found a meaningful way to contribute to the well-being of those around me- through the use of cards.
      </p>
      
    </div>
    <div className="overflow-hidden back-img-container" >
      <div className="container px-5 flex justify-center items-center ">
        <img
          src="ava-back-img.png"
          className="img-fluid rounded-3 shadow-lg mb-4"
          alt="ava-img-salita-co"
          width={450}
          height={500}
          loading="lazy"
        />
      </div>
    </div>
  </div>
  </div>
  )
}

export default Background
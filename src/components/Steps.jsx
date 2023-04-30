import { useState } from "react";
import "./css/steps.css";
function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      url: "https://m.media-amazon.com/images/G/31/selldot/icons/Screen-11.gif",
      content:
        'Click on the "Start Selling" button and choose "Create your Amazon Account".',
    },
    {
      id: 2,
      url: "https://m.media-amazon.com/images/G/31/selldot/icons/Screen-2b.gif",
      content:
        "Enter your details and verify your phone number using One Time Password.",
    },
    {
      id: 3,
      url: "https://m.media-amazon.com/images/G/31/selldot/icons/Screen-3b.gif",
      content: "Enter your legal company name as registered in your GST.",
    },
    {
      id: 4,
      url: "https://m.media-amazon.com/images/G/31/selldot/icons/Screen-4b.gif",
      content:
        "Provide your store name, product details, business details and your shipping method.",
    },
    {
      id: 5,
      url: "https://m.media-amazon.com/images/G/31/selldot/icons/Screen-5b.gif",
      content:
        "Update your tax details including your GST and PAN number and verify your GST using One Time Password.",
    },
    {
      id: 6,
      url: "https://m.media-amazon.com/images/G/31/selldot/icons/Screen-6b.gif",
      content: "List the products you want to sell on Amazon.in",
    },
    {
      id: 7,
      url: "https://m.media-amazon.com/images/G/31/selldot/icons/Screen-7b.gif",
      content:
        'Click on the "Launch your business" button to start selling on Amazon.',
    },
  ];

  return (
    <>
      <div className="container steps">
        <div className="heading">
          <h4>Steps to Selling on Amazon</h4>
          <p>
            {" "}
            To start selling on Amazon, you will have to follow the steps given
            below:
          </p>
        </div>
        <div className="in-step">
          <div className="left">
            {videos.map((video) => (
              <label className="everystep" key={video.id}>
                <input
                  type="radio"
                  name="video"
                  value={video.id}
                  onChange={() => setSelectedVideo(video.id)}
                />
                Step {video.id}
              </label>
            ))}
          </div>
          <div className="right frame">
            {selectedVideo && (
              <div>
                <img
                  title={`Video ${selectedVideo}`}
                  src={videos.find((video) => video.id === selectedVideo).url}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}
            <div className="explain-step-frame">
              {selectedVideo && (
                <div>
                  <h2>
                    Step {videos.find((video) => video.id === selectedVideo).id}
                  </h2>
                  <p>
                    {videos.find((video) => video.id === selectedVideo).content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 h-5/6'>
            <div className="collapse w-4/6 bg-slate-500 text-center mx-auto border rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-amber-500">
                    what is cors?
                </div>
                <div className="collapse-content text-left">
                    <p className='text-white'>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
                </div>
            </div>
            <div className="collapse w-4/6 bg-slate-500 text-center mx-auto  border rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-amber-500">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content text-left">
                    <p className='text-white'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    <h5 className="text-lg text-white">
                    Alternatives of Firebase authentication
                    </h5>
                    <p className='text-white'>STYTCH</p>
                    <p className='text-white'>Supabase</p>
                    <p className='text-white'>Okta</p>
                    <p className='text-white'>PingIdentity</p>
                </div>
            </div>
            <div className="collapse w-4/6 bg-slate-500 text-center mx-auto  border rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-amber-500">
                    How does the private route work?
                </div>
                <div className="collapse-content text-left">
                    <p className='text-white'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                </div>
            </div>
            <div className="collapse w-4/6 bg-slate-500 text-center mx-auto  border rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-amber-500">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content text-left">
                    <p className='text-white'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
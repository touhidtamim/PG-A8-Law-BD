import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.title = "Law.BD - Blogs";

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 via-gray-50 to-purple-50">
      <h1 className="text-3xl font-bold mb-8 text-center">
        React Concepts Explained
      </h1>

      <div className="max-w-3xl mx-auto space-y-12">
        <article className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            What is useState and how does it work in React?
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              <code>useState</code> is one of React's built-in hooks that allows
              functional components to manage state. Before hooks were
              introduced in React 16.8, state could only be used in class
              components.
            </p>
            <p className="mb-4">
              The <code>useState</code> hook allows us to declare state
              variables in functional components. It returns an array with two
              elements: the current state value and a function to update that
              value.
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">
              How useState works:
            </h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                When we call <code>useState</code> with an initial value, React
                creates a state variable that persists between re-renders.
              </li>
              <li>
                React returns an array containing the current state value and a
                function to update it.
              </li>
              <li>
                When the update function is called with a new value, React
                schedules a re-render of the component.
              </li>
              <li>During re-render, React returns the updated state value.</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre>
                <code>
                  {`import React, { useState } from 'react';

          function Counter() {
            // Declare state variable "count" with initial value 0
            const [count, setCount] = useState(0);
            
            return (
              <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                  Click me
                </button>
              </div>
            );
          }`}
                </code>
              </pre>
            </div>
            <p className="mt-4">
              In this example, each time the button is clicked,{" "}
              <code>setCount</code> updates the state, and React re-renders the
              component showing the new count value.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            What is the purpose of useEffect in React?
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              <code>useEffect</code> is a React hook that lets you perform side
              effects in functional components. Side effects include data
              fetching, subscriptions, manual DOM manipulations, logging, and
              more.
            </p>
            <p className="mb-4">
              The primary purpose of <code>useEffect</code> is to synchronize a
              component with external systems and handle operations that can't
              be done during rendering.
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">
              Key features of useEffect:
            </h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                <strong>Timing</strong>: It runs after render, ensuring the DOM
                has been updated.
              </li>
              <li>
                <strong>Dependencies array</strong>: Controls when the effect
                runs (after every render, only when specific values change, or
                only once).
              </li>
              <li>
                <strong>Cleanup function</strong>: Optional return function that
                runs before the next effect or when the component unmounts.
              </li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre>
                <code>
                  {`import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // This effect runs when userId changes
    setLoading(true);
    
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
      
    // Cleanup function
    return () => {
      // Cancel any pending requests or subscriptions
    };
  }, [userId]); // Dependency array
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return <div>Hello, {user.name}</div>;
}`}
                </code>
              </pre>
            </div>
            <p className="mt-4">
              In this example, <code>useEffect</code> fetches user data whenever
              the <code>userId</code> prop changes. The dependency array{" "}
              <code>[userId]</code> ensures the effect only runs when necessary,
              preventing infinite loops and unnecessary API calls.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            What is a custom hook in React and when should you use one?
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              A custom hook is a JavaScript function that starts with the word
              "use" and may call other hooks. They let you extract component
              logic into reusable functions, allowing you to share stateful
              logic between components without changing their structure.
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">
              When to use custom hooks:
            </h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                <strong>Reusing logic</strong>: When the same stateful logic
                needs to be used in multiple components.
              </li>
              <li>
                <strong>Complex state logic</strong>: When a component has
                complex state logic that makes it hard to understand.
              </li>
              <li>
                <strong>Separating concerns</strong>: To extract unrelated logic
                into separate functions.
              </li>
              <li>
                <strong>Testing</strong>: To make logic easier to test in
                isolation.
              </li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre>
                <code>
                  {`// Custom hook: useWindowSize
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array means this effect runs once on mount
  
  return windowSize;
}

// Using the custom hook in a component
function ResponsiveComponent() {
  const windowSize = useWindowSize();
  
  return (
    <div>
      <p>Window width: {windowSize.width}px</p>
      <p>Window height: {windowSize.height}px</p>
      {windowSize.width < 768 ? (
        <p>Mobile view</p>
      ) : (
        <p>Desktop view</p>
      )}
    </div>
  );
}`}
                </code>
              </pre>
            </div>
            <p className="mt-4">
              This custom hook <code>useWindowSize</code> encapsulates the logic
              for tracking window dimensions. Any component that needs this
              information can simply use the hook without duplicating the code.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            Difference between controlled and uncontrolled components. Which one
            is better?
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              In React, form elements like <code>&lt;input&gt;</code>,{" "}
              <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code> can
              be managed in two ways: controlled or uncontrolled components.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">
              Controlled Components:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Form data is handled by React state</li>
              <li>Current value is passed as a prop</li>
              <li>
                Changes are handled through callbacks like <code>onChange</code>
              </li>
              <li>React is the "single source of truth" for input values</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <pre>
                <code>
                  {`function ControlledForm() {
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted name:', name);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
                </code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Uncontrolled Components:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Form data is handled by the DOM itself</li>
              <li>Values are accessed using refs when needed</li>
              <li>React doesn't track input state during typing</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <pre>
                <code>
                  {`function UncontrolledForm() {
  const nameRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted name:', nameRef.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        defaultValue="" 
        ref={nameRef} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
                </code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-2">Which is better?</h3>
            <p className="mb-4">
              Neither approach is universally "better" - each has appropriate
              use cases:
            </p>

            <p className="mb-2">
              <strong>Use controlled components when:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You need immediate validation</li>
              <li>You want to conditionally disable the submit button</li>
              <li>You need to enforce input format</li>
              <li>Multiple inputs are interdependent</li>
              <li>You need to dynamically change the input</li>
            </ul>

            <p className="mb-2">
              <strong>Use uncontrolled components when:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You need simple forms with minimal interactions</li>
              <li>You're integrating with non-React code</li>
              <li>Performance is critical (with many inputs)</li>
              <li>You're using file inputs</li>
            </ul>

            <p>
              The React documentation generally recommends using controlled
              components for most use cases to maintain React's philosophy of
              explicit and predictable behavior.
            </p>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            Tell us something about useFormStatus() in React
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              <code>useFormStatus</code> is a newer React hook that was
              introduced as part of React's form handling improvements. It's
              designed for working with forms in React, particularly focusing on
              tracking the submission state of a form.
            </p>

            <p className="mb-4">
              This hook is part of React's newer form handling API, which aims
              to improve the developer experience when working with forms by
              providing built-in handling for common form states.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">
              Key features of useFormStatus:
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Tracks whether a form is currently submitting</li>
              <li>Provides loading states without manual state management</li>
              <li>
                Works well with other form-related hooks like{" "}
                <code>useFormState</code>
              </li>
              <li>Helps create more responsive form UIs</li>
              <li>Must be used within a form component that has an action</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-md">
              <pre>
                <code>
                  {`import { useFormStatus } from 'react-dom';

// This component must be used inside a form
function SubmitButton() {
  const { pending, data, method } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function SignupForm() {
  async function handleSubmit(formData) {
    // Submit form data to the server
  }
  
  return (
    <form action={handleSubmit}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      
      {/* SubmitButton uses useFormStatus internally */}
      <SubmitButton />
    </form>
  );
}`}
                </code>
              </pre>
            </div>

            <p className="mt-4">
              With <code>useFormStatus</code>, you can create more responsive
              form UIs by automatically disabling the submit button while the
              form is being submitted, showing a loading spinner, or providing
              other visual feedback without manually managing these states.
            </p>

            <p className="mt-2">
              It's important to note that <code>useFormStatus</code> must be
              called from a component that is rendered inside a form with an
              action. It can't be used directly within the same component that
              defines the form element.
            </p>

            <p className="mt-2">
              This hook is part of React's newer "actions" pattern for forms,
              which provides a more integrated approach to form handling in
              React applications.
            </p>
          </div>
        </article>

        <div className="flex justify-center gap-4 mt-12 pb-8">
          <button
            onClick={scrollToTop}
            className={`bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center ${
              !showBackToTop ? "opacity-0 pointer-events-none" : ""
            }`}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
            Back to Top
          </button>

          <button
            onClick={goToHome}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

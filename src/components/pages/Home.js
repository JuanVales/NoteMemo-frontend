import Header from "../common/Header";
import Footer from "../common/Footer";

const NotesDisplay = () => {
  return (
    <div>
      <div className="pb-5">
        <Header />

        <div className="container">
          <h2 className="text-center mt-5">Welcome to NoteMemo</h2>

          <div className="my-5">
            <h3>About the App:</h3>
            <p>
              NoteMemo allows you to easily store and manage your personal
              notes. With NoteMemo, you can log in, save your notes, and access
              them from anywhere.
            </p>
          </div>
          <div className="mb-5">
            <h4>Features:</h4>
            <ul>
              <li>Creating, editing, and deleting notes</li>
              <li>Secure login to access personal notes</li>
            </ul>
          </div>

          <div className="mb-5">
            <h4>Front-end Technology:</h4>
            <p>
              NoteMemo is built using React, a popular JavaScript library for
              building user interfaces. It utilizes React Router DOM for
              navigation, Bootstrap for responsive styling, and Material-UI for
              attractive UI components.
            </p>
          </div>
          <div className="mb-5">
            <h4>Back-end Technology:</h4>
            <p>
              The back end of NoteMemo is powered by Node.js and Express, with
              Express sessions for managing user sessions. User authentication
              is handled using Passport.js, with strategies for Google OAuth2.0
              and Passport Local for local username/password authentication.
              MongoDB Atlas is used as the cloud-based database solution, and
              Mongoose is employed as the ODM tool for interacting with the
              MongoDB database.
            </p>
          </div>
          <div className="mb-5">
            <h4>Get Started:</h4>
            <p>
              To start using NoteMemo, navigate to the login page and create an
              account if you don't have one. You can log in using your Google
              account or create a local account. Once logged in, you can manage
              your notes by adding, editing, and deleting them. Your notes will
              be automatically saved and synchronized across devices.
            </p>
          </div>
        </div>

        <div className="text-center mt-5">
          <h3>Contact Me:</h3>
          <p>
            Feel free to reach out to me for any inquiries or collaborations.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/juan-ignacio-vales-82b988189/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a
                href="https://github.com/JuanVales"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotesDisplay;

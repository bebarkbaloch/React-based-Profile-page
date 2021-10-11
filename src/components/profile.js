import React from "react";
import "./profile.css";
import Contact from "./Contact";
import Education from "./Education";
import Introduction from "./Introduction";
import Professional from "./Professional";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Profile() {
  return (
    <Router>
      <div id="container">
        <header>
          <div className="quoteoftheday">Profile</div>
          <div className="name">Bebark.B</div>
        </header>

        <article>
          <div className="quote">
            <h1>
              “ Code is like humor. When you have to explain it, it’s bad.”
            </h1>
          </div>

          <div className="quoteby">
            <h4>Bebark Baloch</h4>
          </div>
        </article>

        <footer>
          <div className="skills">
            <h6>Menu</h6>
            <ul>
              <li>
                <Link to="/">Introduction</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/professional">Professional Experience</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </footer>

        <Switch>
          <Route exact path="/">
            <Introduction />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/professional">
            <Professional />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Profile;

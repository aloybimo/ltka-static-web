import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    {/* <!-- Navigation--> */}
        <nav id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"><a href="#page-top">Start Bootstrap</a></li>
                <li class="sidebar-nav-item"><a href="#page-top">Home</a></li>
                <li class="sidebar-nav-item"><a href="#about">About</a></li>
                <li class="sidebar-nav-item"><a href="#products">Products</a></li>
                <li class="sidebar-nav-item"><a href="#portfolio">Portfolio</a></li>
                <li class="sidebar-nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {/* <!-- Header--> */}
        <header class="masthead d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-center">
                <h1 class="mb-1">Notes Application</h1>
                <h3 class="mb-5"><em>Create private notes for you and your team here!</em></h3>
                <a class="btn btn-primary btn-xl" href="http://34.101.133.181:3000/">Start Here</a>
            </div>
        </header>
        {/* <!-- About--> */}
        <section class="content-section bg-light" id="about">
            <div class="container px-4 px-lg-5 text-center">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-10">
                        <h2>Creating a notes leads to a well-organized project!</h2>
                        <p class="lead mb-5">
                        As you take notes, you’ll decide on and highlight the key ideas you hear, identifying the structure of a team presentation.
                        </p>
                        <a class="btn btn-dark btn-xl" href="#products">What We Offer</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Products--> */}
        <section class="content-section bg-primary text-white text-center" id="products">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading">
                    <h3 class="text-secondary mb-0">Product</h3>
                    <h2 class="mb-5">What We Offer</h2>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-screen-smartphone"></i></span>
                        <h4><strong>Web-based Application</strong></h4>
                        <p class="text-faded mb-0">You can access your notes everywhere, anytime, and also on any devices!</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-pencil"></i></span>
                        <h4><strong>Well-designed</strong></h4>
                        <p class="text-faded mb-0">A simple and attractive design which will be comfort you.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-like"></i></span>
                        <h4><strong>Favorited</strong></h4>
                        <p class="text-faded mb-0">
                            Your favorite platform to capture a moment through notes!
                            <i class="fas fa-heart"></i>
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-mustache"></i></span>
                        <h4><strong>Saved Properly</strong></h4>
                        <p class="text-faded mb-0">No need to worry about the notes, you got it!</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Callout--> */}
        <section class="callout">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mx-auto mb-5">
                    What are you
                    waiting for?
                </h2>
                <a class="btn btn-primary btn-xl" href="http://34.101.133.181:3000/">Create Notes Now!</a>
            </div>
        </section>
        {/* <!-- Portfolio--> */}
        <section class="content-section" id="portfolio">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading text-center">
                    <h3 class="text-secondary mb-0">Notes</h3>
                    <h2 class="mb-5">Note Cases</h2>
                </div>
                <div class="row gx-0">
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Moment of Meeting (MoM)</div>
                                    <p class="mb-0">After having a meeting with client, MoM document always needed to remind the client about some important things. It's time to use our product to make it!</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio-1.jpg" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Reminder</div>
                                    <p class="mb-0">Every person has some important things in their life, but some people may forget about it. Don't worry, we can remind it for you.</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio-2.jpg" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Diary</div>
                                    <p class="mb-0">Do you like to capture every moment of your days, believe on affirmation, and have a lot of ideas to write? You got it here!</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio-3.jpg" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Life or Work Planning</div>
                                    <p class="mb-0">Are you a future-oriented people? Here you can write a lot of planning, started from a simple planning, such as "What things that I will buy at the store tomorrow?", etc.</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio-4.jpg" alt="..." />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Call to Action--> */}
        <section class="content-section bg-primary text-white">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4">Get to know the creator of this Notes App!</h2>
                <a class="btn btn-xl btn-light me-4" href="https://www.linkedin.com/in/aloysiusbimoprayogo/">Aloysius Bimo Prayogo</a>
                <a class="btn btn-xl btn-dark" href="https://www.linkedin.com/in/annisabeliaf/">Annisabelia Firdaus</a>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="footer text-center">
            <div class="container px-4 px-lg-5">
                <p class="text-muted small mb-0">Copyright &copy; Notes Application 2021</p>
            </div>
        </footer>
        {/* <!-- Scroll to Top Button--> */}
        <a class="scroll-to-top rounded" href="#page-top"><i class="fas fa-angle-up"></i></a>
        </>
  );
}

export default App;

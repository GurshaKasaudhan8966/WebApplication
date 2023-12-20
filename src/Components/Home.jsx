import { blue, pink, purple } from '@mui/material/colors'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Home() {
    return (
        <div>
            <div style={{ marginTop: -160 }}>
                <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body d-flex align-items-center">
                                <div className="input-group w-75 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="container-fluid py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-12 col-lg-7">

                                <h1 className="mb-5 display-3" style={{ fontWeight: 'bold' }}>Get thumb stopping ...</h1>
                                <h1 className="mb-5 display-3" style={{ marginTop: -50, fontWeight: 'bold' }}>for your<span style={{ color: '#9900ef' }}> Bussiness</span></h1>

                                <h4 className="mb-3 text-secondary" style={{ marginTop: -30 }}>Never run out of.....</h4>

                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <button className="button1">Get Started</button>
                                    </div>
                                    <div className='col-sm-6'>
                                        <button className="button2">Request Demo</button>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-12 col-lg-5">
                                <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active rounded">
                                            <img src="https://assets-global.website-files.com/5f9311fa6f6a0447cbb81040/630d41df4e6ffb4250947c6f_blog%20hero%20image%20x.jpg" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />

                                        </div>
                                        <div className="carousel-item rounded">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQ8i5VgTwAroJLW0RkU38TCtsPKbvMRFRQA&usqp=CAU" className="img-fluid w-100 h-100 rounded" alt="Second slide" />

                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Fruits Shop Start--> */}
            <div className="container-fluid fruite py-5" style={{ marginTop: -80 }}>
                <div className="container py-5">
                    <div className="tab-className text-center">

                        <h1 style={{ marginBottom: 50, justifyItems: 'center', fontWeight: 'bold' }}>How does CreatorsBay Work?</h1>

                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="data:image/jpeg;base64,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" className="img-fluid w-100 rounded-top" alt="" />
                                            </div>

                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <button className="button3">Step 1</button>
                                                <h5>Register and Submit </h5>
                                                <h5>campaign brief</h5>
                                                <p>Use our simple brief builder to specify your video specs,consept and creator requirement.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="data:image/png;base64,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" style={{ height: 200 }} alt="" />
                                            </div>

                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom" style={{ marginTop: 70 }}>
                                                <button className="button3">Step 2</button>
                                                <h5>Choose creators you</h5>
                                                <h5>want to work with</h5>
                                                <p>Use our simple brief builder to specify your video specs,consept and creator requirement.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="data:image/png;base64,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" style={{ height: 200 }} alt="" />
                                            </div>

                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom" style={{ marginTop: 70 }}>
                                                <button className="button3">Step 3</button>
                                                <h5>Submit and sit back</h5>
                                                <h5>while we get your</h5>
                                                <p>Use our simple brief builder to specify your video specs,consept and creator requirement.</p>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>






                    </div>
                </div>
            </div>



            <div className="container-fluid fruite py-5" style={{ marginTop: -80 }}>
                <div className="container py-5">
                    <div className="tab-className text-center">

                        <h1 style={{ justifyItems: 'center', fontWeight: 'bold' }}>UGC is your go-to ad Format</h1>
                        <h1 style={{ marginBottom: 10, justifyItems: 'center', fontWeight: 'bold' }}>in2023</h1>

                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <h5 style={{ fontSize: 40, color: '#FF69B4' }}>93% of Curtomers </h5>

                                        <p style={{ fontSize: 18 }}>Use our simple brief builder to specify your video specs,consept and creator requirement.</p>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <h5 style={{ fontSize: 40, color: '#FF69B4' }}>10x more views</h5>
                                        <p style={{ fontSize: 18 }}>Use our simple brief builder to specify your video specs,consept and creator requirement.It is crucial to know the right type of influencers.</p>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <h5 style={{ fontSize: 40, color: '#FF69B4' }}>9.8 More Impactful </h5>

                                        <p style={{ fontSize: 18 }}>Use our simple brief builder to specify your video specs,consept and creator requirement.</p>
                                    </div>


                                </div>
                            </div>
                        </div>






                    </div>
                </div>
            </div>

            <div className="container-fluid fruite py-5" style={{ marginTop: -80 }}>
                <div className="container py-5">
                    <div className="tab-className text-center">

                        <h1 style={{ justifyItems: 'center', fontWeight: 'bold' }}>Frequently Asked Question</h1>

                        <div className="row g-4">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-12 col-xl-12">

                                        <div>
                                            <Accordion style={{border:10,marginBottom:10}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header" style={{height:80}}
                                                >
                                                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails style={{height:120}}>
                                                    <Typography >
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion style={{border:10,borderBlockColor:'#FF69B4',marginBottom:10}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" style={{height:80}}
                                                >
                                                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails style={{height:120}}>
                                                    <Typography >
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion style={{border:10,borderBlockColor:'#FF69B4',marginBottom:10}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header" style={{height:80}}
                                                >
                                                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails style={{height:120}}>
                                                    <Typography >
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion style={{border:10,borderBlockColor:'#FF69B4',marginBottom:10}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel4a-content"
                                                    id="panel4a-header" style={{height:80}}
                                                >
                                                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails style={{height:120}}>
                                                    <Typography >
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion style={{border:10,borderBlockColor:'#FF69B4',marginBottom:10}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel5a-content"
                                                    id="panel5a-header" style={{height:80}}
                                                >
                                                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails style={{height:120}}>
                                                    <Typography >
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                           
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>






                    </div>
                </div>
            </div>

            {/* <!-- Footer Start --> */}
        <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
            <div class="container py-5">
               
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-item">
                            <h4 class="text-light mb-3">Why People Like us!</h4>
                            <p class="mb-4">typesetting, remaining essentially unchanged. It was 
                                popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                            <a href="" class="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="d-flex flex-column text-start footer-item">
                            <h4 class="text-light mb-3">Shop Info</h4>
                            <a class="btn-link" href="">About Us</a>
                            <a class="btn-link" href="">Contact Us</a>
                            <a class="btn-link" href="">Privacy Policy</a>
                            <a class="btn-link" href="">Terms & Condition</a>
                            <a class="btn-link" href="">Return Policy</a>
                            <a class="btn-link" href="">FAQs & Help</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="d-flex flex-column text-start footer-item">
                            <h4 class="text-light mb-3">Account</h4>
                            <a class="btn-link" href="">My Account</a>
                            <a class="btn-link" href="">Shop details</a>
                            <a class="btn-link" href="">Shopping Cart</a>
                            <a class="btn-link" href="">Wishlist</a>
                            <a class="btn-link" href="">Order History</a>
                            <a class="btn-link" href="">International Orders</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-item">
                            <h4 class="text-light mb-3">Contact</h4>
                            <p>Address: 1429 Netus Rd, NY 48247</p>
                            <p>Email: Example@gmail.com</p>
                            <p>Phone: +0123 4567 8910</p>
                            <p>Payment Accepted</p>
                            <img src="img/payment.png" class="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}

        <Layout>
      <section>
        <div
          id="slider-container"
          class="max-w-lg mx-auto 
      mt-12"
        >
          <Slider {...settings}>
            <article
              style={{ display: 'grid !important' }}
              class="shadow-2xl drop-shadow-xl w-80  p-6 rounded-lg  gap-2"
            >
              <h2 class="text-2xl font-bold">Extremely talented Individuals</h2>
              <p class="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi sunt voluptatum exercitationem nesciunt? Dolore, porro
                ipsum sit aut explicabo beatae eos voluptas commodi esse vel
                reprehenderit voluptate distinctio quae pariatur.
              </p>
              <span class="text-lg text-gray-700 font-semibold">John Doe</span>
            </article>
            <article
              style={{ display: 'grid !important' }}
              class="shadow-2xl drop-shadow-xl w-80  p-5 rounded-lg  gap-2"
            >
              <h2 class="text-2xl font-bold">
                Such Professionalism are encouraged
              </h2>
              <p class="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, quis perspiciatis. Voluptatum accusamus quasi tenetur
                dolore sequi repellat iusto ea, repellendus doloremque rem modi
                magnam sunt quo, pariatur perferendis delectus dolor reiciendis
                eligendi odit. Inventore delectus deseru
              </p>
              <span class="text-lg text-gray-700 font-semibold">Jane Doe</span>
            </article>
          </Slider>
        </div>
      </section>
    </Layout>

        </div>
    )
}

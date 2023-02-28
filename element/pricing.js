
import { useState } from "react";
function Pricing() {
    const [open, setOpen] = useState("p2")
  return (
    <>
        <section className="content-inner" style={{backgroundImage: "url(images/background/bg20.png)", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPosition:"center"}}>
            <div className="container">
                <div className="section-head style-1 text-center">
                    <h6 className="sub-title">PRICING</h6>
                    <h2 className="title">CHOOSE PLAN</h2>
                </div>
                <div className="row pricingtable-wraper-2">
                    <div className="col-lg-4 col-md-6">
                        <div className={`${open === "p1" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p1")}>
                            <div className="pricingtable-inner">
                                <div className="pricingtable-title">
                                    <h3 className="title">Basic Plan</h3>
                                </div>
                                <div className="pricingtable-price"> 
                                    <h2 className="pricingtable-bx">BDT500<small>/2 Month</small></h2>
                                </div>
                                <p className="text">Aliquam dui lacus, lobortis quis sapien non.</p>
                                <ul className="pricingtable-features">
                                    <li>Topic Choice</li>
                                    <li>Study Plan Design</li>
                                    <li>PDF Books</li>
                                   
                                </ul>
                                <div className="pricingtable-footer"> 
                                    <a href="/pricing-table-1" className="btn btn-primary rounded-md">Start Now <i className="fa fa-angle-right m-l10"></i></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className={`${open === "p2" ? "pricingtable-wrapper style-1 active m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p2")}>
                            <div className="pricingtable-inner">
                                <div className="pricingtable-title">
                                    <h3 className="title">Standart Plan</h3>
                                </div>
                                <div className="pricingtable-price"> 
                                    <h2 className="pricingtable-bx">BDT700<small>/4 Month</small></h2>
                                </div>
                                <p className="text">Aliquam dui lacus, lobortis quis sapien non.</p>
                                <ul className="pricingtable-features">
                                    <li>Research Design</li>
                                    <li>Study Plan Design</li>
                                    <li>PDF Books</li>
                                    <li>Software Support</li>
                                    <li>Publication</li>
                                </ul>
                                <div className="pricingtable-footer"> 
                                    <a href="/pricing-table-1" className="btn btn-primary rounded-md">Start Now <i className="fa fa-angle-right m-l10"></i></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-12">
                        <div className={`${open === "p3" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`} onMouseOver={() => setOpen("p3")}>
                            <div className="pricingtable-inner">
                                <div className="pricingtable-title">
                                    <h3 className="title">Premium Plan</h3>
                                </div>
                                <div className="pricingtable-price"> 
                                    <h2 className="pricingtable-bx">BDT1000<small>/6Month</small></h2>
                                </div>
                                <p className="text">Aliquam dui lacus, lobortis quis sapien non.</p>
                                <ul className="pricingtable-features">
                                     <li>Research Design</li>
                                     <li>Research consultation</li>
                                     <li>Team Support</li>
                                    <li>Study Plan Design</li>
                                    <li>PDF Books</li>
                                    <li>Software Support</li>
                                    <li>Publication</li>
                                </ul>
                                <div className="pricingtable-footer"> 
                                    <a href="/pricing-table-1" className="btn btn-primary rounded-md">Start Now <i className="fa fa-angle-right m-l10"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing;

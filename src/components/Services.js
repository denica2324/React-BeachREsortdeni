import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil",
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil",
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil",
            },
            {
                icon: <FaBeer />,
                title: "Strongest beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil",
            }
        ]
    }


    render() {

        return (
            <>
                <section className="services">
                    <Title title="Services" />
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                             return (
                             <article key={index} className="service">
                                 <span>{item.icon}</span>
                                 <h6>{item.title}</h6>
                                 <p>{item.info}</p>
                             </article>)
                             })}

                    </div>
                </section>
            </>
        )
    }
}

export default Services;
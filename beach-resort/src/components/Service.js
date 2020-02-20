import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import {Title} from './../components';
// this.state = {

//}
const Service = () => {
    let service = [{
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, impedit."
    },
    {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, impedit."
    },
    {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, impedit."
    },
    {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, impedit."
    }];
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {service.map((item, index) => {
                    return(
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Service